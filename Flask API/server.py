import sys, os
from flask import Flask, flash, request, redirect, url_for, jsonify, send_file
from flask_cors import CORS, cross_origin
from data.all_data import collect_data
import encodings.idna

sys.path = os.getcwd()

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@cross_origin()
@app.route('/opportunities', methods=['GET'])
def generate_uml():
    if request.method == 'GET':
        try:
            status = request.args.get('status')
            if status == None:
                status = "ongoing"
            search = request.args.get('search')
        except:
            status = "ongoing"
        data = collect_data(status, search)
        return jsonify(data)

