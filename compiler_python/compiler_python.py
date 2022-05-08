# inside of a Python .py file

import uvicorn
import traceback
import os

from typing import Optional
from fastapi import FastAPI
from pydantic import BaseModel, Field

class CheckSyntaxData(BaseModel):
    user_id : str
    user_code: str
    riddle_id : Optional[str]

teams=[]
app = FastAPI()

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

@app.get("/ready-probe")
def compile_code():
    # // Compile Code
    return {"is ready"}

if __name__ == "__main__":

    uvicorn.run("compiler_python:app", host="0.0.0.0", port=7999)

