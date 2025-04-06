from flask import Flask, render_template
from main import app

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat")
def chat():
    return render_template("chat.html")