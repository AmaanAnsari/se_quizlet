# inside of a Python .py file

import uvicorn

from fastapi import FastAPI

teams=[]
app = FastAPI()

@app.get("/")
def home():
    return {"Hello": "World"}

@app.post("/teams")
def create_team():
    team = {

        "team_name": "Phoenix Suns",
        "players": [

            {

                  "name": "Chris Paul",
                  "age": 36

            }

        ]

    }

    teams.append(team)
    return {'teams':teams}

if __name__ == "__main__":

    uvicorn.run("main:app", port=8000)