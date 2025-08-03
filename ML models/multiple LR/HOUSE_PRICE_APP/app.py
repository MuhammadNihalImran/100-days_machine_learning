from flask import Flask, render_template, request
import pandas as pd
import numpy as np
import joblib
import sklearn

print(sklearn.__version__)


app = Flask(__name__)

# Load dataset to get location list
data = pd.read_csv("./data/clean_Bengaluru_House_Data.csv")
locations = sorted(data["location"].unique())

# Load the model
pipe = joblib.load("model.pkl")


@app.route("/")
def index():
    return render_template("index.html", locations=locations)


@app.route("/predict", methods=["POST"])
def predict():
    location = request.form["location"]
    total_sqft = float(request.form["total_sqft"])
    bath = int(request.form["bath"])
    bhk = int(request.form["bhk"])

    # Create input DataFrame
    inputs = pd.DataFrame(
        [[location, total_sqft, bath, bhk]],
        columns=["location", "total_sqft", "bath", "bhk"],
    )

    # Predict
    price = (
        pipe.predict(inputs)[0] * 1e5
    )  # Multiply if your model is trained on lakh units
    predicted_price = round(price, 2)

    # Pass prediction and locations to template
    return render_template(
        "index.html", prediction=predicted_price, locations=locations
    )


if __name__ == "__main__":
    app.run(debug=True)
