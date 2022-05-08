# inside of a Python .py file

import uvicorn
import traceback
import os

from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel, Field
import requests

class CheckSyntaxData(BaseModel):
    user_id : str
    user_code: str
    riddle_id : Optional[str]

teams=[]
app = FastAPI()

# Kompiliert den im Request Body gesendeten Code 
@app.post("/compile-code")
def compile_code(pData : CheckSyntaxData):
    error_msg = ""
    
    try:
        codeObejct = compile(pData.user_code, "<string>", 'exec')
    except Exception:
        error_msg = traceback.format_exc()
    
    return { 
        "result_type" : "compile",
        "successful" : error_msg == "",
        "error_message": error_msg,
        "checked_user_code" : pData.user_code
    }

# Führt den im Request Body gesendeten Code aus. Überprüft den Output in der TXT Datei mit der Lösung und gibt zurück, welche Testfälle bestanden wurden und welche nicht
@app.post("/execute-code")
def execute_code(pData : CheckSyntaxData):
    resultMSG = ""
    user_code = pData.user_code
    resDict = {}

    solution = open("/quiz/" + str(pData.riddle_id) + "/solution.txt", "r")

    inputFilePath = "/quiz/" + str(pData.riddle_id) + "/input.txt"
    inputFile = open(inputFilePath, "r")
    
    userInputFile = open("input.txt", "w")
    userInputFile.write(inputFile.read())
    userInputFile.close()
    inputFile.close()
    try:
        
        # webapp_path = "/"
        # riddles_path = "/riddles/"

        #os.popen('cp ' + inputFilePath + "/code/input.txt") 
        
        codeObejct = compile(user_code, "<string>", 'exec')
        exec(codeObejct)

        if not os.path.exists("output.txt"):
            raise Exception("You did not write your output into the 'output.txt' file. Please correct your mistake and try again.") 
        
        user = open("output.txt", "r")
        inputFile = open(inputFilePath, "r")
        count = 0
        correct_count = 0
        while True:
            count += 1
            solution_line = str(solution.readline())
            user_line = str(user.readline())
            inputFile_line = str(inputFile.readline())

            if not solution_line and not user_line:
                break
            
            if(solution_line == user_line):
                correct_count += 1
                resDict[count] = "Test " + str(count) + " | pass (Input: '" + inputFile_line  + "')"
            else:
                resDict[count] = "Test " + str(count) + " | FAIL | Input: '" + inputFile_line + "' | Output Solution: '" + solution_line + "' | Your Output: '" + user_line + "'"

        count -= 1
        os.remove("output.txt")
        
        print(pData.user_id)
        if (pData.user_id != "invalid"):
            final_score = 0
            if(correct_count == 0):
                final_score = -1
            else:
                final_score = round(float(correct_count/count), 2)

            requests.post("http://db:7998/user/set/score/", json={
                "user_name" : pData.user_id, 
                "riddle_id" : pData.riddle_id,
                "score" : final_score
            })
    except Exception as e:
        resultMSG = str(e)

    
    if resultMSG == "":
        if count == correct_count:
            resultMSG = "Well done, you passed all test :D\n\n"
        else:
            resultMSG = "There are still some mistakes. You passed " + str(correct_count) + " from " + str(count) + " Tests\n\n"
        for pE in resDict:
            resultMSG= resultMSG + resDict[pE] + "\n"
   
    return { 
        "result_type" : "execute",
        "result" : resultMSG,
        "checked_user_code" : user_code
    }

# Readyprobe (für debugging verwendet)
@app.get("/ready-probe")
def compile_code():
    # // Compile Code
    return {"is ready"}

if __name__ == "__main__":

    uvicorn.run("compiler_python:app", host="0.0.0.0", port=7999)

