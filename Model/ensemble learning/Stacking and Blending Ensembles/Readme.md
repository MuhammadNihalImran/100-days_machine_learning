# 📚 Stacking (Ensemble Learning)

## 📖 Overview
**Stacking** (Stacked Generalization) is an **ensemble learning** technique that combines multiple base models (level-0) through a meta-model (level-1) to improve predictive performance.

The idea:
- Train **several base models** on the training data.
- Use their predictions as input features for a **meta-model**.
- The meta-model learns to best combine these predictions.

---

## ⚙ How Does It Work?

### Step 1: Train Base Models (Level-0)
We fit multiple algorithms (e.g., Decision Tree, Logistic Regression, SVM) on the training dataset.

### Step 2: Generate Predictions
Predictions from the base models are used as **new features**.

### Step 3: Train Meta-Model (Level-1)
A meta-learner (e.g., Logistic Regression) is trained on these predictions to make the final decision.

---

## 📊 Mathematical Representation

Let:
- \( h_1, h_2, \dots, h_k \) be **k base learners**
- \( x \) be the input features

1. **Base Models Predictions**:
\[
p_j = h_j(x) \quad \text{for} \quad j = 1, 2, \dots, k
\]

2. **Meta-Model Prediction**:
\[
\hat{y} = H(p_1, p_2, \dots, p_k)
\]
where \( H \) is the meta-learner.

---

## 🛠 Hyperparameters

### Base Models:
- **Choice of algorithms** (e.g., Decision Tree, Random Forest, Logistic Regression)
- **Individual hyperparameters** for each base model

### Meta-Model:
- **Choice of algorithm**
- **Regularization parameters** (if applicable)

### General:
- `cv` → Number of folds for cross-validation when generating meta-features
- `n_jobs` → Parallel processing for faster computation

---

## 🖥 Example (Scikit-learn)
```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import StackingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC

# Load dataset
X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)

# Define base models
base_estimators = [
    ('dt', DecisionTreeClassifier(max_depth=3)),
    ('svm', SVC(probability=True, kernel='linear'))
]

# Define meta-model
meta_model = LogisticRegression()

# Create stacking model
stack_clf = StackingClassifier(
    estimators=base_estimators,
    final_estimator=meta_model,
    cv=5
)

# Train
stack_clf.fit(X_train, y_train)

# Evaluate
score = stack_clf.score(X_test, y_test)
print(f"Stacking Accuracy: {score:.4f}")
