# inside of a Python .py file

import uvicorn
import traceback

from fastapi import FastAPI
from pydantic import BaseModel

class CheckSyntaxData(BaseModel):
    user_id : str
    user_code: str

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
        "sucessfull" : error_msg == "",
        "error_message": error_msg,
        "checked_user_code" : pData.user_code
    }

@app.post("/execute-code")
def execute_code(pData : CheckSyntaxData):
    error_msg = ""
    resultB = ""
    user_code = pData.user_code
    try:
        codeObejct = compile(user_code, "<string>", 'exec')
        resultB = exec(codeObejct)
    except Exception:
        error_msg = traceback.format_exc()
    
    return { 
        "result_type" : "execute",
        "sucessfull" : error_msg == "",
        "result" : str(resultB),
        "error_message": error_msg,
        "checked_user_code" : user_code
    }

@app.get("/ready-probe")
def compile_code():
    # // Compile Code
    return {"is ready"}

if __name__ == "__main__":

    uvicorn.run("compiler_python:app", host="0.0.0.0", port=7999)