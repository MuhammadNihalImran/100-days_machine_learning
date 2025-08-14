# 🌳 Decision Tree Classification & Regression

A **Decision Tree** is a supervised learning algorithm used for **both** classification and regression tasks. It splits the dataset into subsets based on the most significant features, forming a tree-like structure where each node represents a decision.

---

## 📌 What is a Decision Tree?

- **Classification:** Predicts a **category** (e.g., spam or not spam).
- **Regression:** Predicts a **continuous value** (e.g., house price).

It works by asking a series of **yes/no questions** based on feature values and selecting the splits that **best reduce impurity**.

---

## ⚙ How does it work?

### Step 1: Feature Selection
At each node, the algorithm chooses the **best feature** to split the data.  
- For **classification**, it uses measures like **Gini Impurity** or **Entropy**.
- For **regression**, it uses **Mean Squared Error (MSE)** or **Mean Absolute Error (MAE)**.

---

### Step 2: Splitting Criteria

#### **Classification (Gini Impurity)**
$$
Gini = 1 - \sum_{i=1}^{C} p_i^2
$$
where \( p_i \) is the proportion of samples belonging to class \( i \).

#### **Regression (Mean Squared Error)**
$$
MSE = \frac{1}{n} \sum_{i=1}^n (y_i - \hat{y}_i)^2
$$

---

### Step 3: Recursive Splitting
The process repeats **recursively** until:
- Maximum depth is reached.
- Node is pure (all samples have the same class in classification).
- Minimum number of samples per split is reached.

---

## 🔍 Hyperparameters

| Parameter         | Description |
|-------------------|-------------|
| `criterion`       | Metric to measure split quality. `"gini"` or `"entropy"` for classification, `"mse"` or `"mae"` for regression. |
| `max_depth`       | Maximum depth of the tree (controls overfitting). |
| `min_samples_split` | Minimum samples needed to split a node. |
| `min_samples_leaf` | Minimum samples needed at a leaf node. |
| `random_state`    | Ensures reproducibility. |

---

## 🛠 Implementation in Python

```python
from sklearn.tree import DecisionTreeClassifier, DecisionTreeRegressor

# Classification
clf = DecisionTreeClassifier(criterion="gini", max_depth=5, random_state=42)
clf.fit(X_train, y_train)

# Regression
reg = DecisionTreeRegressor(criterion="mse", max_depth=5, random_state=42)
reg.fit(X_train, y_train)
