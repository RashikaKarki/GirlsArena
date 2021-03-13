import sys, os
from flask import Flask, flash, request, redirect, url_for, jsonify, send_file
from flask_cors import CORS, cross_origin
from data.powertofly import getdata

sys.path = os.getcwd()

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@cross_origin()
@app.route('/opportunities', methods=['GET'])
def generate_uml():
    if request.method == 'GET':
        data = getdata()
        return jsonify(data)

