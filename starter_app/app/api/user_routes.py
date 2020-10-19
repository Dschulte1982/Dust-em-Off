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
        return {"id": str(user.id), "username": str(user.username),
                "email": str(user.email)}
    return {"error": "User Not Found"}


@user_routes.route("/logout", methods=["DELETE"])
def logout():
    if "userId" in session:
        session.pop('userId', None)
        return {'msg': 'Successfully logged out'}
    return {"error": "User already logged out"}


@user_routes.route('/register', methods=["POST"])
def register():
    data = request.json
    print(data["user"]["username"])
    user = User.query.filter(User.username == data["user"]["username"]).first()
    if user:
        return {"error": "This user already exists."}
    if (len(data["user"]["password"]) < 8):
        return {"error": "Password must be at least 8 characters in length."}
    elif data:
        registerUser = User(username=data["user"]["username"],
                            email=data["user"]["email"],
                            password=sha256_crypt.hash(data["user"]["password"]))
        db.session.add(registerUser)
        db.session.commit()
        createdUser = User.query.filter(User.username == data["user"]["username"]).first()
        return {"id": createdUser.id, "username": createdUser.username}


@user_routes.route('/current', methods=['GET'])
def load_user():
    print(session["userId"])
    if 'userId' in session:
        return {"userId": session['userId'], 'username': session['username'], 'email': session['email']}
    else:
        return {"msg": "user not loaded"}
