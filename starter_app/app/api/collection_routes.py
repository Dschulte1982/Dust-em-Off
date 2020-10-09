from flask import Blueprint, jsonify, request, session, redirect, url_for
from app.models import User, Category, Collection, Item, db


collection_routes = Blueprint('collection', __name__)


@collection_routes.route('/')
def index():
    response = Collection.query.all()
    return {"collections": [collection.to_dict() for collection in response]}
