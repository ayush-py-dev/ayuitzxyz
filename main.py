from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def main():
    return render_template("index.html")

@app.route("/404")
def fof():
    return render_template("404.html")

if __name__ == "__main__":
    app.run(debug=True)