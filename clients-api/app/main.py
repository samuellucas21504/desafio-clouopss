from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from .routes.clients import client
from .routes.images import image
from fastapi.middleware.cors import CORSMiddleware
import logging


logging.basicConfig(level=logging.WARNING,
                    format='%(asctime)s :: %(levelname)s ::%(pathname)s :: %(message)s')

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

app.mount("/static", StaticFiles(directory="static"), name="static")

app.include_router(client)
app.include_router(image)
