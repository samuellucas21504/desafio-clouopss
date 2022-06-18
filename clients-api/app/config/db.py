from pymongo import MongoClient

conn = MongoClient("mongodb://mongo:27017")

database_images = conn['images']
