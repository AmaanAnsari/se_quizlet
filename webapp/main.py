# inside of a Python .py file

import uvicorn

from fastapi import Request, FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from starlette.responses import RedirectResponse
import requests

URL_COMPILER_PYTHON = "http://pythoncompiler:7999/compile-code/"

teams=[]
app = FastAPI()

app.mount("/static", StaticFiles(directory="static", html = True), name="static")

# class CheckSyntaxData(BaseModel):
#     user_id : str
#     user_code: str

@app.get("/t")
def home():
     return "Hello World"
     requests.post()

@app.post("/user-check-syntax/{language}")
async def check_syntax(request: Request, language: str):
    
    # body = request.body()
    # print(body)
    # if language == 'python':
    #     answer = requests.post(URL_COMPILER_PYTHON, data=body)
    
    # # res = requests.get(URL_COMPILER_PYTHON)
    # # return answer
    # return answer.content
    #return RedirectResponse(url=URL_COMPILER_PYTHON)
    json_data = await request.body()
    resp = requests.post(URL_COMPILER_PYTHON, data=json_data)
    return resp.json()


if __name__ == "__main__":

    uvicorn.run("main:app", host="0.0.0.0", port=8000)