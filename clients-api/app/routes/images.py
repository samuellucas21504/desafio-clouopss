from email.headerregistry import ContentDispositionHeader, HeaderRegistry
from bson import ObjectId
from fastapi import APIRouter, UploadFile, File, status, HTTPException, Response
import aiofiles
import gridfs
from yaml import FlowEntryToken
from ..config.db import database_images, conn
from ..schemas.clients import clientsEntity
from starlette.responses import FileResponse
import os
import logging


logging.basicConfig(level=logging.WARNING,
                    format='%(asctime)s :: %(levelname)s ::%(pathname)s :: %(message)s')


image = APIRouter()


@image.get('/images/{id}')
async def get_image(id: str, response: Response):
    fs = gridfs.GridFS(database_images)
    image = database_images.fs.files.find_one({"filename": id})
    filename = image['metadata']
    pre_extension, extension = os.path.splitext(filename)
    absolute_path = f"static/{filename}"
    file = FileResponse(
        path=absolute_path, media_type='application/octet-stream',
        headers={"Content-Disposition": "attachment; filename*=utf-8''curriculo{}".format(extension)})
    return file


@image.post('/images/{id}', status_code=status.HTTP_201_CREATED)
async def create_image(id: str, file: UploadFile):
    name = id
    pre_extension, extension = os.path.splitext(file.filename)
    filename = f"{name}{extension}"
    file_path = f"static/{filename}"
    async with aiofiles.open(f"static/{name}{extension}", "wb") as out_file:
        while content := await file.read(1024):  # async read chunk
            await out_file.write(content)

    with open(file_path, 'rb') as f:
        contents = f.read()

    fs = gridfs.GridFS(database_images)
    fs.put(contents, filename=id, metadata=filename)

    return status.HTTP_201_CREATED
