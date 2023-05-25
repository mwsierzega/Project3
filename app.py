import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///census2000names.sqlite")
# get sqlite link set up  
# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Save references to each table
# each table needs different names 
# Measurement = Base.classes.measurement
# Station = Base.classes.station

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

# Home page
@app.route("/")
def welcome():
    # Return all available API routes 
    return(
        f"Available routes: <br/>"
        f"Homepage: '/' <br/>"
        f"Precipitation data: '/api/v1.0/precipitation' <br/>"
    )


#@app.route("")