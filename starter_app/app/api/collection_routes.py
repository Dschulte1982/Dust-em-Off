from flask import Blueprint, jsonify, request, session, redirect, url_for
from app.models import User, Category, Collection, Item, db


collection_routes = Blueprint('collection', __name__)


@collection_routes.route('/')
def index():
    response = Collection.query.all()
    return {"collections": [collection.to_dict() for collection in response]}


@collection_routes.route('<userId>/all')
def getCollections(userId):
    collectionList = []
    collections = Collection.query.filter(Collection.userId == userId).all()
    if collections:
        for collection in collections:
            collectionList.append(collection.collection_name)
    return {"collections": collectionList}


@collection_routes.route("item/<itemId>", methods=["GET"])
def getItem(itemId):
    item = Item.query.filter(Item.id == itemId).first()
    return {"item": str(item.item_name)}


@collection_routes.route('/new-item', methods=['POST'])
def postItem():
    data = request.json
    if data:
        postItem = Item(item_name=data["item_name"],
                        likes=0,
                        description=data["description"],
                        year=data["year"],
                        image=data["image"])
        db.session.add(postItem)
        db.session.commit()
        createdItem = Item.query.filter(Item.item_name == data["item_name"]).first()
    return {"id": createdItem.id, "item_name": createdItem.item_name}
