# Import dependencies
from flask import Flask
from sqlalchemy import create_engine
from sqlalchemy.ext.automap import automap_base

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///census2000names.sqlite")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Connect to SQLite database 
import sqlite3
from sqlite3 import Error

def create_connection(db_file):
    """ create a database connection to a SQLite database """
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        print(sqlite3.version)
    except Error as e:
        print(e)
    finally:
        if conn:
            conn.close()


if __name__ == '__main__':
    create_connection(r"C:\sqlite\db\pythonsqlite.db")


#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################
@app.route("/")
def welcome():
    names = Base.classes.keys()
    return (
        f"This is a template to fill in for later!</br>"
        f"This page represents the welcome page!</br>"
        f"Add 'whatever' to the url to get to the 'something' page! </br>"
        f"This takes you to the kidney page</br>"
        f"This takes you to the heart page </br>"
        f"This takes you to the liver page </br>"
        f"This takes you to the ethnicities page </br>"
        f"{names}</br>"
    )


@app.route("/calc")
def calc():
    session = Session(engine) 
    
    
    name = "Peleke"
    location = "Tien Shan"

    return f"My name is {name}, and I live in {location}."


@app.route("/contact")
def contact():
    email = "peleke@example.com"

    return f"Questions? Comments? Complaints? Shoot an email to {email}."


# Define main behavior
if __name__ == "__main__":
    app.run(debug=True)