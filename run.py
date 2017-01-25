from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("base.html", page="index")

@app.route("/ohje/<page>")
def instructions(page):
    return render_template("base.html", page=page)
