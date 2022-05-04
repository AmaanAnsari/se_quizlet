# inside of a Python .py file

import uvicorn
from tinydb import TinyDB, Query
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.encoders import jsonable_encoder

db = TinyDB('/data/db.json')

app = FastAPI()

class User(BaseModel):
    user_id : str
    user_name: str
    user_password: str
    user_scores: dict

@app.post("/insert/", status_code=200)
def db_insert(pUser: User):
    res = db.insert(jsonable_encoder(pUser))
    return "none"

@app.get("/search-by/user_name/{name}")
def db_searchByUsername():
    Fruit = Query()
    return db.search(Fruit.user_name == name)

@app.get("/search-by/user_id/{id}")
def db_searchByUsername():
    Fruit = Query()
    return db.search(Fruit.user_id == id)

@app.get("/ready-probe")
def compile_code():
    # // Compile Code
    return {"is ready"}

if __name__ == "__main__":

    uvicorn.run("db:app", host="0.0.0.0", port=7998)