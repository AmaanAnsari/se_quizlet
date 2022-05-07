# inside of a Python .py file

import uvicorn
from tinydb import TinyDB, Query
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder
import json

db = TinyDB('/data/db.json')

app = FastAPI()

class User(BaseModel):
    user_name: str
    user_password: str
    user_scores: dict

class Authentication(BaseModel):
    user_name: str
    user_password: str

@app.post("/user/signup", status_code=200)
def db_insert(pUser: User):
    res = db.insert(jsonable_encoder(pUser))
    return "none"

@app.post("/user/login", status_code=200)
def db_insert(pAuth: Authentication):
    Fruit = Query()
    for pE in db.search(Fruit.user_name == pAuth.user_name):
        if pE["user_password"] == pAuth.user_password:
            return "true"
        return "false"

@app.get("/user/get/scores/{name}")
def db_getScores():
    Fruit = Query()
    for pE in db.search(Fruit.user_name == name):
        return pE[user_scores]

# @app.get("/search-by/user_id/{id}")
# def db_searchByUsername():
#     Fruit = Query()
#     return db.search(Fruit.user_id == id)

@app.get("/ready-probe")
def compile_code():
    # // Compile Code
    return {"is ready"}

if __name__ == "__main__":

    uvicorn.run("db:app", host="0.0.0.0", port=7998)