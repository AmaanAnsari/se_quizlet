# inside of a Python .py file

import uvicorn

from fastapi import Request, FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from starlette.responses import RedirectResponse
import requests_async as requests

URL_COMPILER_PYTHON = "http://pythoncompiler:7999"

teams=[]
app = FastAPI()

app.mount("/static", StaticFiles(directory="static", html = True), name="static")

# class CheckSyntaxData(BaseModel):
#     user_id : str
#     user_code: str

@app.get("/")
def home():
     return "Welcome, go to /static to see the real thing :D"
     requests.post()

# Leitet die Anfrage für einen Syntax Check in Python an den Pythoncompiler weiter
@app.post("/user-check-syntax/{language}")
async def check_syntax(request: Request, language: str):
    if language == "python":
        json_data = await request.body()
        resp = await requests.post(URL_COMPILER_PYTHON + "/compile-code/", data=json_data)
        return resp.json()
    return "Wrong language"

# Leitet die Anfrage zum ausführen des Codes und überprüfen der Testfälle an den Pythoncompiler weiter
@app.post("/user-execute-code/{language}")
async def check_syntax(request: Request, language: str):
    if language == "python":
        json_data = await request.body()
        resp = await requests.post(URL_COMPILER_PYTHON + "/execute-code/", data=json_data)
        return resp.json()

if __name__ == "__main__":

    uvicorn.run("main:app", host="0.0.0.0", port=8000)