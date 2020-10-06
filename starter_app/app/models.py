from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    firstName = db.Column(db.String(255), nullable=False)
    lastName = db.Column(db.String(255), nullable=False)
    password = db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {
          "id": self.id,
          "username": self.username,
          "email": self.email,
          "firstName": self.firstName,
          "lastName": self.lastName,
          "password": self.password,
        }


class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(100), nullable=False)


class Collection(db.Model):
    __tablename__ = 'collections'

    id = db.Column(db.Integer, primary_key=True)
    collection_name = db.Column(db.String(255), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    itemId = db.Column(db.Integer, db.ForeignKey("items.id"), nullable=False)
    categoryId = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)
    user = db.relationship("User")
    item = db.relationship("Item")
    category = db.relationship("Category")

    def to_dict(self):
        return {
          "id": self.id,
          "collection_name": self.collection_name,
          "category": self.category,
          "userId": self.userId,
          "itemId": self.itemId
        }


class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String(255), nullable=False)
    likes = db.Column(db.Integer, nullable=True)
    description = db.Column(db.String(400), nullable=True)
    year = db.Column(db.Integer, nullable=True)
    image = db.Column(db.Binary, nullable=True)

    def to_dict(self):
        return {
          "id": self.id,
          "collection_name": self.collection_name,
          "category": self.category,
          "userId": self.userId,
          "itemId": self.itemId
        }
