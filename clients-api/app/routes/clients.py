from fastapi import APIRouter, Response, status, HTTPException
from ..models.clients import Client
from ..config.db import conn
from ..schemas.clients import clientEntity, clientsEntity
from bson.objectid import ObjectId
import logging


logging.basicConfig(level=logging.WARNING,
                    format='%(asctime)s :: %(levelname)s ::%(pathname)s :: %(message)s')

client = APIRouter()

# GET METHOD


@client.get('/clients')
async def get_clients():
    clients = clientsEntity(conn.clients.information.find())
    if clients:
        return clients

    return status.HTTP_400_BAD_REQUEST


# POST METHOD
@client.post('/clients', status_code=status.HTTP_201_CREATED)
async def create_client(client: Client):
    if conn.clients.information.insert_one(dict(client)):
        return clientsEntity(conn.clients.information.find())

    return status.HTTP_422_UNPROCESSABLE_ENTITY


# PUT METHOD

@client.put('/clients/{id}')
async def update_client(id: str, client: Client):
    if conn.clients.information.find_one_and_update(
            {"_id": ObjectId(id)}, {"$set": dict(client)}):
        return clientsEntity(conn.clients.information.find())

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                        detail=f"client with id: {id} does not exist")


# DELETE METHOD

@client.delete('/clients/{id}', status_code=status.HTTP_204_NO_CONTENT)
def delete_client(id: str):
    if conn.clients.information.find_one_and_delete(
            {"_id": ObjectId(id)}):
        return Response(status_code=status.HTTP_204_NO_CONTENT)

    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                        detail=f"client with id: {id} does not exist")
