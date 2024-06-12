from configurator import Configurator
from mean_price_calculator import MeanPriceCalculator
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from conn import Data

configurator = Configurator()
manager = configurator.manager
meanCalculator = MeanPriceCalculator(manager)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/get-mean-price")
async def root(product = ""):
    if product == '':
        raise HTTPException(status_code=404, detail="Item not found")
    mean = meanCalculator.searchSimilarItens(product)
    if mean != None:
        return {"items": mean}
    raise HTTPException(status_code=404, detail="Cotations not found")

@app.get("/get-data")
async def get_data():
    db = Data()
    data = db.getTables()

    return data