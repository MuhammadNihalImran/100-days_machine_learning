# 🧠 Bagging (Bootstrap Aggregating)

Bagging is an **ensemble learning technique** that improves model performance and stability by combining predictions from multiple models trained on different subsets of the data.

---

## ⚙ How Does It Work?

### Step 1: Bootstrap Sampling
- Randomly sample **with replacement** from the training dataset to create multiple subsets.
- Each subset has the same size as the original dataset but may contain duplicate samples.

### Step 2: Train Multiple Models
- Train a **base learner** (e.g., Decision Tree) on each bootstrap sample.
- Each model learns slightly different patterns due to sampling.

### Step 3: Aggregation
- **For Classification:** Take a **majority vote** across all models.
- **For Regression:** Take the **average** of predictions from all models.

---

## 📌 Mathematical Representation

Let:
- $h_1(x), h_2(x), \dots, h_B(x)$ be the predictions from $B$ base models.

For **Regression**:
$$
\hat{y} = \frac{1}{B} \sum_{b=1}^{B} h_b(x)
$$

For **Classification**:
$$
\hat{y} = \text{mode}\{ h_1(x), h_2(x), \dots, h_B(x) \}
$$

---

## 🔍 Key Benefits
- **Reduces variance** of the model.
- Works well with **high-variance models** (like Decision Trees).
- Less prone to **overfitting**.

---

## ⚙ Common Hyperparameters (BaggingClassifier & BaggingRegressor)

| Hyperparameter        | Description |
|-----------------------|-------------|
| `estimator`           | Base model (e.g., DecisionTreeClassifier) |
| `n_estimators`        | Number of base learners to train |
| `max_samples`         | Number of samples to draw for each base learner |
| `max_features`        | Number of features to consider per learner |
| `bootstrap`           | Whether samples are drawn with replacement |
| `random_state`        | Controls reproducibility |

---

## 💻 Example in Python

### **Classification Example**
```python
from sklearn.ensemble import BaggingClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load data
X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Base model
base_model = DecisionTreeClassifier(max_depth=5, random_state=42)

# Bagging Classifier
clf = BaggingClassifier(estimator=base_model, n_estimators=50, random_state=42)
clf.fit(X_train, y_train)

# Predictions
y_pred = clf.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))



