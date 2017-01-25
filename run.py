from flask import Flask
from flask import abort, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", page="index")

@app.route("/ohjeet/<page>")
def instructions(page):
    try:
        return render_template(page + ".html", page=page)
    except:
        abort(404)
