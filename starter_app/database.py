from dotenv import load_dotenv
load_dotenv()

from app import app, db
from app.models import User, Category, Collection, Item
from passlib.hash import sha256_crypt

with app.app_context():
    db.drop_all()
    db.create_all()

    demo = User(username='DemoUser', email='demouser@demo.com', password=sha256_crypt.hash('password'))
    maggie = User(username='Mdority', email='maggie@demo.com', password=sha256_crypt.hash('password'))
    gus = User(username='Goose', email='gus@demo.com', password=sha256_crypt.hash('password'))
    oona = User(username='OoneyBalooney', email='oona@demo.com', password=sha256_crypt.hash('password'))
    antiques = Category(category='Antiques')
    comics = Category(category='Comic Books')
    dolls_toys = Category(category='Dolls & Toys')
    records = Category(category='Vinyl Records')
    sports_memorabilia = Category(category='Sports Memorabilia')
    star_wars = Category(category='Star Wars')
    trading_cards = Category(category='Trading Cards')
    video_games = Category(category='Video Games')
    demo_item_1 = Item(item_name='Amazing Spider-Man #1', likes="1", description="A classic!", year='1963')
    demo_item_2 = Item(item_name='Millenium Falcon', likes='2', description='Vintage Millenium Falcon playset', year='1979')
    demo_comics = Collection(collection_name="Demo's Comics", categoryId="1", userId='1', itemId='1')
    demo_star_wars = Collection(collection_name="Star Wars Figures", categoryId='3', userId='1', itemId='2')

    db.session.add(demo)
    db.session.add(maggie)
    db.session.add(gus)
    db.session.add(oona)
    db.session.add(antiques)
    db.session.add(comics)
    db.session.add(dolls_toys)
    db.session.add(sports_memorabilia)
    db.session.add(star_wars)
    db.session.add(trading_cards)
    db.session.add(video_games)
    db.session.add(records)
    db.session.add(demo_item_1)
    db.session.add(demo_item_2)
    db.session.add(demo_comics)
    db.session.add(demo_star_wars)

    db.session.commit()
