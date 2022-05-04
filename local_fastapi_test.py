# inside of a Python .py file

import uvicorn

from fastapi import Request, FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from starlette.responses import RedirectResponse
import requests

teams=[]
app = FastAPI()

#app.mount("/static", StaticFiles(directory="static", html = True), name="static")

# class CheckSyntaxData(BaseModel):
#     user_id : str
#     user_code: str

@app.get("/hello-world")
def home():
     return "Hello World"
     

@app.post("/user-check-syntax/{language}")
async def check_syntax(request: Request, language: str):
    
    # body = request.json()
    # print(body)
    # if language == 'python':
    #     answer = 
    
    # # res = requests.get(URL_COMPILER_PYTHON)
    # # return answer
    # return answer.content
    json_data = await request.json()
    resp = requests.post("https://httpbin.org/anything", data=json_data)
    return resp.json()

if __name__ == "__main__":

    uvicorn.run("local_fastapi_test:app", host="localhost", port=8000)