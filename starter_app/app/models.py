from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    password = db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {
          "id": self.id,
          "username": self.username,
          "email": self.email,
          "password": self.password,
        }

    def __repr__(self):
        return self.id


class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    category = db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "category": self.category
        }


class Collection(db.Model):
    __tablename__ = 'collections'

    id = db.Column(db.Integer, primary_key=True)
    collection_name = db.Column(db.String(255), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    categoryId = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)
    user = db.relationship("User")
    category = db.relationship("Category")

    def to_dict(self):
        return {
          "id": self.id,
          "collection_name": self.collection_name,
          "userId": self.userId,
          "categoryId": self.categoryId
        }

    # def __repr__(self):
    #     return self.id


class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    item_name = db.Column(db.String(255), nullable=False)
    collectionId = db.Column(db.Integer, db.ForeignKey("collections.id"), nullable=False)
    likes = db.Column(db.Integer, nullable=True)
    description = db.Column(db.String(400), nullable=True)
    year = db.Column(db.Integer, nullable=True)
    condition = db.Column(db.String(100), nullable=True)
    image = db.Column(db.Binary, nullable=True)
    collection = db.relationship("Collection",
                                 backref=db.backref("items", lazy=True))

    def to_dict(self):
        return {
          "id": self.id,
          "item_name": self.item_name,
          "collectionId": self.collectionId,
          "likes": self.likes,
          "description": self.description,
          "year": self.year,
          "condition": self.condition,
          "image": self.image
        }

    def __repr__(self):
        return '<Item %r>' % {"id": self.id}
