from flask import Blueprint, jsonify, request, session, redirect, url_for
from app.models import User, Category, Collection, Item, db


category_routes = Blueprint('category', __name__)


@category_routes.route("/<categoryId>")
def category(categoryId):
    print("test")
    response = Category.query.filter(Category.id == categoryId).one()
    print(response.category)
    # return {"category": response}
    return {"category": response.category}
