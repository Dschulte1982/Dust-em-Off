from flask import Blueprint, jsonify, request, session, redirect, url_for
from sqlalchemy.orm import joinedload
from app.models import User, Category, Collection, Item, db


collection_routes = Blueprint('collection', __name__)


@collection_routes.route('/')
def index():
    response = Collection.query.all()
    return {"collections": [collection.to_dict() for collection in response]}


@collection_routes.route('<userId>/all')
def getCollections(userId):
    # collectionList = []
    collections = db.session.query(Collection).filter(Collection.userId == userId).all()
    collections_dict = {}
    if collections:
        for collection in collections:
            # collectionList.append(collection.collection_name)
            collections_dict[collection.id] = collection.to_dict()
    # return {"collections": collectionList}
    return {"collections": collections_dict}, 200


@collection_routes.route('<userId>/new-collection', methods=["POST"])
def newCollection(userId):
    data = request.json
    collection = Collection(
        collection_name=data["collection_name"],
        userId=userId,
        categoryId=data["categoryId"]
    )
    db.session.add(collection)
    db.session.commit()
    collections = db.session.query(Collection).filter(Collection.userId == userId).all()
    collections_dict = {}
    for collection in collections:
        collections_dict[collection.id] = collection.to_dict()
    return {'collections': collections_dict}, 200


@collection_routes.route("item/<itemId>", methods=["GET"])
def getItem(itemId):
    item = Item.query.filter(Item.id == itemId).first()
    return {"item": str(item.item_name)}


@collection_routes.route("item/user/<userId>", methods=["GET"])
def getUserItems(userId):
    collections = db.session.query(Collection).filter(Collection.userId == userId).all()
    collectionIds = []
    for collection in collections:
        collectionIds.append(collection.id)
    all_items = db.session.query(Item).filter(Item.collectionId
                                              .in_(collectionIds))
    items_dict = {}
    for item in all_items:
        items_dict[item.id] = item.to_dict()
    return {"userItems": items_dict}, 200


@collection_routes.route("item/all", methods=["GET"])
def getAllItems():
    items = db.session.query(Item).all()
    items_dict = {}
    for item in items:
        items_dict[item.id] = item.to_dict()
    return {"items": items_dict}, 200


@collection_routes.route('<collectionId>/new-item', methods=['POST'])
def postItem(collectionId):
    data = request.json
    print(data)
    if data:
        item = Item(item_name=data["name"],
                    collectionId=collectionId,
                    likes=0,
                    description=data["description"],
                    year=data["year"],
                    condition=data["condition"],
                    # image=data["image"]
                    )
        db.session.add(item)
        db.session.commit()
        items = db.session.query(Item).filter(Item.collectionId == collectionId).all()
        items_dict = {}
        for item in items:
            items_dict[item.id] = item.to_dict()
        return {"items": items_dict}, 200
