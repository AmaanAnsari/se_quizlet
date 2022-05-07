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
    error_msg = ""
    resultB = ""
    user_code = pData.user_code
    resDict = {}
    try:
        
        # webapp_path = "/"
        # riddles_path = "/riddles/"

        # os.popen('cp ' + riddles_path + pData.riddle_id + "/input.txt " + webapp_path + "/input.txt") 
        
        codeObejct = compile(user_code, "<string>", 'exec')
        exec(codeObejct)

        #filename = os.path.join(os.path.dirname(__file__), "solution-" + pData.riddle_id + ".txt")
        filename = "/root/root/code/solution-1.txt"
        solution = open(filename, "r")
        user = open("output.txt", "r")
        count = 0
        
        while True:
            count += 1
            solution_line = solution.readline()
            user_line = user.readline()

            resDict[count] = "Test " + str(count) + " with input '" + str(solution_line) + "': "
            if(solution_line == user_line):
                resDict[count] += "Successful"
            else:
                resDict[count] += "Error! Your output was: " + str(user_line)


            if not solution_line and not user_line:
                break

    except Exception:
        error_msg = traceback.format_exc()

    
    resultMSG = "Well done, your code runs :D\n"

    for pE in resDict:
        resultMSG+=pE + "\n"
    
    return { 
        "result_type" : "execute",
        "successful" : error_msg == "",
        "result" : resultMSG,
        "error_message": error_msg,
        "checked_user_code" : user_code
    }

@app.get("/ready-probe")
def compile_code():
    # // Compile Code
    return {"is ready"}

if __name__ == "__main__":

    uvicorn.run("compiler_python:app", host="0.0.0.0", port=7999)

