# 🌳 Decision Tree: Classification & Regression

## 📖 Overview
A **Decision Tree** is a supervised learning algorithm that splits the dataset into smaller subsets based on feature values.  
It can be used for:
- **Classification** → Predict discrete labels.
- **Regression** → Predict continuous values.

---

## ⚙ How it Works

### 1️⃣ Splitting Criteria
At each node, the tree chooses the **best feature** and **split point** that maximizes information gain or minimizes impurity.

---

### **For Classification**
We use impurity measures like:

#### **Gini Impurity**
$$
Gini = 1 - \sum_{k=1}^K p_k^2
$$
Where:
- \(p_k\) = proportion of samples of class \(k\) in the node  
- \(K\) = number of classes

#### **Entropy**
$$
Entropy = -\sum_{k=1}^K p_k \log_2 p_k
$$

#### **Information Gain**
$$
IG(D, feature) = Entropy(D) - \sum_{i=1}^m \frac{|D_i|}{|D|} Entropy(D_i)
$$

---

### **For Regression**
We use variance-based metrics:

#### **Mean Squared Error (MSE)**
$$
MSE = \frac{1}{n} \sum_{i=1}^n (y_i - \hat{y}_i)^2
$$

#### **Variance Reduction**
$$
VarianceReduction = Var(parent) - \left[ \frac{n_{left}}{n} Var(left) + \frac{n_{right}}{n} Var(right) \right]
$$

---

## 🌿 Decision Rules

At each **internal node**:
- Choose feature \(x_j\) and threshold \(t\) that give the **best split** according to the chosen metric.
- Send samples left if \(x_j \leq t\), right if \(x_j > t\).

At each **leaf node**:
- **Classification** → Predict the majority class in the leaf.
- **Regression** → Predict the average target value in the leaf.

---

## 📉 Stopping Criteria
The tree stops growing when:
- Max depth reached
- Minimum samples per node reached
- No improvement in split metric

---

## 🔍 Advantages & Disadvantages

✅ **Pros**:
- Easy to interpret & visualize  
- Handles both classification & regression  
- Works with numerical & categorical data  

⚠ **Cons**:
- Can overfit without pruning  
- Sensitive to small data changes

---

## 📚 References
- [Scikit-learn Decision Tree Documentation](https://scikit-learn.org/stable/modules/tree.html)
- [CART Algorithm Paper](https://doi.org/10.1201/9781315139470)

