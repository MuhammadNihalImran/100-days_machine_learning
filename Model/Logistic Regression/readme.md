# 📈 Logistic Regression

## 📌 What is Logistic Regression?
Logistic Regression is a **supervised classification algorithm** used to predict **binary outcomes** (yes/no, 0/1, true/false).  
Instead of predicting continuous values like Linear Regression, it predicts the **probability** of belonging to a class using the **sigmoid function**.

---

## ❓ Why use Logistic Regression?
- **Binary classification** – Ideal for problems with two possible outcomes.  
- **Probability estimates** – Outputs probabilities, not just class labels.  
- **Interpretability** – Easy to understand and explain feature influence.  
- **Baseline model** – Often used as a starting point for classification problems.  

---

## ⚙ How Does Logistic Regression Work?

### 1️⃣ Step 1: Linear Combination
The model computes a **linear combination** of input features:

$$
z = \beta_0 + \beta_1 x_1 + \beta_2 x_2 + \dots + \beta_n x_n
$$

---

### 2️⃣ Step 2: Sigmoid Transformation
The **sigmoid function** maps the linear output into a **probability** between 0 and 1:

$$
\hat{y} = \sigma(z) = \frac{1}{1 + e^{-z}}
$$

---

### 3️⃣ Step 3: Decision Rule
We classify the output based on the predicted probability:

$$
P(y=1|x) \geq 0.5 \ \Rightarrow \ \text{Predict Class 1}
$$

$$
P(y=1|x) < 0.5 \ \Rightarrow \ \text{Predict Class 0}
$$

---

## 🔍 Loss Function (Binary Cross-Entropy / Log Loss)

Instead of **Mean Squared Error (MSE)**, Logistic Regression uses **Log Loss**:

$$
\text{Loss} = -\frac{1}{m} \sum_{i=1}^{m} \left[ y_i \log(\hat{y}_i) + (1 - y_i) \log(1 - \hat{y}_i) \right]
$$

Where:
- $y_i$ = Actual label (0 or 1)  
- $\hat{y}_i$ = Predicted probability  
- $m$ = Number of samples  


---

## 📊 Visualization
![Logistic Regression Curve](https://upload.wikimedia.org/wikipedia/commons/6/6d/Exam_pass_logistic_curve.jpeg)

---

## 💻 Example (Python)
```python
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_breast_cancer
from sklearn.metrics import accuracy_score

# Load dataset
data = load_breast_cancer()
X_train, X_test, y_train, y_test = train_test_split(
    data.data, data.target, test_size=0.2, random_state=42
)

# Create and train model
log_reg = LogisticRegression(max_iter=1000)
log_reg.fit(X_train, y_train)

# Predictions
y_pred = log_reg.predict(X_test)

# Accuracy
print("Accuracy:", accuracy_score(y_test, y_pred))
