import sqlite3
from flask import Flask, jsonify
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
from pathlib import Path

#create the database path and enginge
database_path = Path('optn_census.db')

#create flask setup
app = Flask(__name__)

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/census_ethnicities_by_state<br/>"
        f"/api/v1.0/State_Wait_Times_by_Age<br/>"
        f"/api/v1.0/State_Wait_Times_by_Ethnicity<br/>"
        f"Here you will find national wait times by age and ethnicity compared to the age and ethnicity of the Census data."
    )

@app.route("/api/v1.0/<Ethnicities>")
def census_ethn(Ethnicities):
    #create the database connection
    conn = sqlite3.connect('optn_census.db')
    #create the cursor
    c = conn.cursor()
    
    data = c.execute("SELECT * FROM ethnicities_census WHERE Ethnicities = Ethnicities")
    rows = c.fetchall()
    data_list = []
    for row in data:
        data_list.append(data)
        return jsonify(data_list)
    #here can go a state, it will look at the national wait times
    #query code goes here, then commite
    conn.commit()


    conn.close()

@app.route("/api/v1.0/State_Wait_Times_by_Age")
def wait_age():
    #return statement will have to go when query is written
    return (f'you have reached the page')
    #create the database connection
    conn = sqlite3.connect('optn_census.db')
    #create the cursor
    c = conn.cursor()
    #variables here, not sure yet
    #query code goes here, then commite
    conn.commit()


    conn.close()

@app.route("/api/v1.0/State_Wait_Times_by_Age")
def wait_ethn():
    #return statement will have to go when query is written
    return (f'you have reached the page')
    #create the database connection
    conn = sqlite3.connect('optn_census.db')
    #create the cursor
    c = conn.cursor()
        #variables here, not sure yet
    #query code goes here, then commite
    conn.commit()


    conn.close()


if __name__ == '__main__':
    app.run(debug=True)