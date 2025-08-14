# 📚 Stacking (Ensemble Learning)

## 📌 Overview
Stacking is an ensemble learning technique that combines multiple base models (**level-0 learners**) and uses a **meta-model** (**level-1 learner**) to make the final prediction.

---

## ⚙️ How It Works

1. **Train base models** on the training dataset.
2. **Generate predictions** from base models.
3. Use these predictions as **features** for the meta-model.
4. **Train meta-model** to make the final prediction.

---

## 📐 Mathematical Representation

Given:
- Base learners: $h_1(x), h_2(x), \dots, h_k(x)$  
- Meta learner: $H_M$

**Step 1:** Predictions from base learners:
$$
z_j = h_j(x), \quad j = 1, 2, \dots, k
$$

**Step 2:** Meta-model combines these:
$$
\hat{y} = H_M(z_1, z_2, \dots, z_k)
$$

---

## 🛠️ Example (Classification)

```python
from sklearn.ensemble import StackingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

# Load data
X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)

# Base learners
base_learners = [
    ('dt', DecisionTreeClassifier(max_depth=5, random_state=42)),
    ('svc', SVC(probability=True, random_state=42))
]

# Meta learner
meta_learner = LogisticRegression()

# Stacking Classifier
stack_clf = StackingClassifier(estimators=base_learners, final_estimator=meta_learner)
stack_clf.fit(X_train, y_train)

print("Accuracy:", stack_clf.score(X_test, y_test))




from sklearn.ensemble import StackingRegressor
from sklearn.linear_model import LinearRegression
from sklearn.tree import DecisionTreeRegressor
from sklearn.svm import SVR
from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split

# Load data
X, y = load_diabetes(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)

# Base learners
base_learners = [
    ('dt', DecisionTreeRegressor(max_depth=5, random_state=42)),
    ('svr', SVR())
]

# Meta learner
meta_learner = LinearRegression()

# Stacking Regressor
stack_reg = StackingRegressor(estimators=base_learners, final_estimator=meta_learner)
stack_reg.fit(X_train, y_train)

print("R² Score:", stack_reg.score(X_test, y_test))
