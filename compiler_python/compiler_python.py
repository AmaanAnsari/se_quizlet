# inside of a Python .py file

import uvicorn

from fastapi import FastAPI
from pydantic import BaseModel

class CheckSyntaxData(BaseModel):
    user_id : str
    user_code: str

teams=[]
app = FastAPI()

@app.post("/compile-code")
def compile_code(pData : CheckSyntaxData):
    # // Compile Code
    return pData.user_id

@app.get("/compile-codeB")
def compile_code():
    # // Compile Code
    return {"Hat funktioniert"}

if __name__ == "__main__":

    uvicorn.run("compiler_python:app", host="0.0.0.0", port=7999)