from flask import Blueprint, jsonify, request, session, redirect, url_for
from app.models import User, Category, Collection, Item, db


category_routes = Blueprint('category', __name__)


@category_routes.route("/<categoryId>")
def category(categoryId):
    response = Category.query.filter(Category.id == categoryId).one()
    print(response.category)
    return {"category": response.category}


@category_routes.route('/all', methods=["GET"])
def categories():
    categories = db.session.query(Category).all()
    categories_dict = {}
    for category in categories:
        categories_dict[category.id] = category.to_dict()
    return {"categories": categories_dict}, 200
