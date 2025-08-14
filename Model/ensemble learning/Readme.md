# 🌲 Ensemble Learning

Ensemble Learning is a **machine learning paradigm** where multiple models (called *base learners*) are trained and combined to solve the same problem.  
It leverages the **wisdom of the crowd** — multiple weak learners combine to form a stronger overall model.

---

## 📌 Types of Ensemble Learning

### 1. **Bagging (Bootstrap Aggregating)**
- **Goal**: Reduce variance.
- Trains multiple models in parallel on **different random subsets** of data (with replacement).
- Example: **Random Forest**

### 2. **Boosting**
- **Goal**: Reduce bias.
- Trains models **sequentially**, where each new model focuses on correcting errors of the previous one.
- Example: **AdaBoost, Gradient Boosting, XGBoost, LightGBM, CatBoost**

### 3. **Stacking**
- Combines predictions of multiple base models using a **meta-model**.

---

## ⚙ How does it work?

### Step 1: Train Multiple Base Models
$$
\hat{y}_1, \hat{y}_2, \dots, \hat{y}_n
$$

### Step 2: Combine Predictions
- **For classification (majority vote)**:
$$
\hat{y} = \text{mode}(\hat{y}_1, \hat{y}_2, \dots, \hat{y}_n)
$$
- **For regression (average)**:
$$
\hat{y} = \frac{1}{n} \sum_{i=1}^{n} \hat{y}_i
$$

---

## 🔍 Advantages
- Reduces **overfitting** (especially bagging).
- Improves **accuracy** and **generalization**.
- Works well with unstable models (e.g., decision trees).

## ⚠ Disadvantages
- Can be computationally expensive.
- Less interpretable.

---

## 📊 Common Hyperparameters

| Parameter | Description |
|-----------|-------------|
| `n_estimators` | Number of base learners |
| `max_depth` | Maximum depth of each tree |
| `learning_rate` | Step size for boosting |
| `criterion` | Split quality measure (`gini`, `entropy`, `mse`, `friedman_mse`) |
| `max_features` | Number of features to consider for best split |
| `bootstrap` | Whether sampling is with replacement (Bagging) |

---

