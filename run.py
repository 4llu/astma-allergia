from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route("/")
@app.route("/<page>")
def hello_world(page="index"):
    return render_template("base.html", page=page)
