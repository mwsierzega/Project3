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
        f"/api/v1.0/state<br/>"
        f"Replace state with the state for which you want census data on percent ethnicity for that state.<br/>"
        f"/api/v1.0/waiting_by_state/state_wait<br/>"
        f"Replace state_wait to get the wait time by age and ethnicity.<br/>"
    )

@app.route("/api/v1.0/<state>")
def census_ethn(state):
    #create the database connection
    conn = sqlite3.connect('optn_census.db')
    #create the cursor
    c = conn.cursor()
    
    state = f'{state}_ethn'
    data = c.execute("SELECT * FROM " + state)
    data = c.fetchall()
    data_list = []
    
    for row in data:
        data_list.append(data)
        return jsonify(data_list)
    conn.commit()

    conn.close()

@app.route("/api/v1.0/waiting_by_state/<state_wait>")
def wait_age(state_wait):

    #create the database connection
    conn = sqlite3.connect('optn_census.db')
    #create the cursor
    c = conn.cursor()
    
    data_wait = c.execute("SELECT * FROM " + state_wait)
    data_wait = c.fetchall()
    data_wait_list = []

    for row in data_wait:
        data_wait_list.append(data_wait)
        return jsonify(data_wait_list)
    
    conn.commit()

    conn.close()


if __name__ == '__main__':
    app.run(debug=True)