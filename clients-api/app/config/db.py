from pymongo import MongoClient
# "mongodb://mongo:27017"
conn = MongoClient()

database_clients = conn['clients']
if database_clients.information == None:
    database_clients.create_collection("information")

database_images = conn['images']
