# inside of a Python .py file
from typing import Optional
import uvicorn
from tinydb import TinyDB, Query
from fastapi import FastAPI, Response
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder
import json
from fastapi.middleware.cors import CORSMiddleware

db = TinyDB('/data/db.json')

app = FastAPI()

origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class User(BaseModel):
    user_name: str
    user_password: str

#Schreibt den neuen User mit Username und Passwort in die Datenbank
@app.post("/user/signup")
def db_insert(pUser: User):

    if pUser.user_name == "" or pUser.user_password == "":
        return JSONResponse(status_code=406, content={
            "error" : "Username or Password can not be empty!"
        })

    Fruit = Query()
    print(db.search(Fruit.user_name == pUser.user_name))
    if db.search(Fruit.user_name == pUser.user_name) != []:
        return JSONResponse(status_code=406, content={
            "error" : "There is already a account with this email"
        })

    res = db.insert(jsonable_encoder(pUser))
    return Response(status_code=200)

#Ermöglicht das einloggen - überprüft ob User vorhanden ist und das Passwort stimmt und liefert das zurück
@app.post("/user/login", status_code=200)
def db_insert(pAuth: User):
    Fruit = Query()
    for pE in db.search(Fruit.user_name == pAuth.user_name):
        if pE["user_password"] == pAuth.user_password:
            return "true"
    return "false"


# Gibt die Scores eines Users zurück
@app.get("/user/get/scores/{name}")
def db_getScores(name):
    Fruit = Query()
    for pE in db.search(Fruit.user_name == name):
        return pE["user_scores"]

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