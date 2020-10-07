from flask import Blueprint, jsonify, request, session, redirect, url_for
from app.models import User, db
from passlib.hash import sha256_crypt


user_routes = Blueprint('users', __name__)


@user_routes.route('/')
def index():
    response = User.query.all()
    print("user route______")
    return {"users": [user.to_dict() for user in response]}


@user_routes.route('/login', methods=["POST"])
def login():
    data = request.json
    user = User.query.filter(User.username == data["username"] and
                             sha256_crypt.verify(data.password, User.password)).one()
    if user:
        session["userId"] = user.id
        session["username"] = user.username
        session["userEmail"] = user.email
        session["userFirstName"] = user.firstName
        session["userLastName"] = user.lastName
        return {"id": str(user.id), "username": str(user.username), "email": str(user.email),
                "firstName": str(user.firstName), "lastName": str(user.lastName)}
    return {"error": "User Not Found"}


@user_routes.route("/logout", methods=["DELETE"])
def logout():
    if "userId" in session:
        session.pop('userId', None)
        return {'msg': 'successfully logged out'}
    return {"error": "User already logged out"}
