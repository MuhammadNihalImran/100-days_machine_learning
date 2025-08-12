## ✂ Lasso Regression

### 📌 What is Lasso Regression?
Lasso Regression is a **regularized version of Linear Regression** that adds an **L1 penalty** to the loss function.  
It not only prevents overfitting but can also **perform feature selection** by shrinking some coefficients to exactly zero.

---

### ❓ Why use Lasso Regression?
- **Feature selection** – Automatically removes irrelevant features by setting their coefficients to zero.  
- **Overfitting prevention** – Reduces variance in high-dimensional datasets.  
- **Improved model interpretability** – Keeps only the most important features.  

---

### ⚙ How does it work?
Lasso Regression modifies the Linear Regression loss function by adding an **L1 penalty term**:

**Standard Linear Regression Loss:**
$$
\text{Loss} = \sum (y_i - \hat{y}_i)^2
$$

**Lasso Regression Loss:**
$$
\text{Loss} = \sum (y_i - \hat{y}_i)^2 + \lambda \sum |\beta_j|
$$

Where:
- **$\lambda$ (lambda)** → Regularization strength (controls penalty size)  
- **$\beta_j$** → Model coefficients  

**Key Points:**
- Large $\lambda$ → More penalty → More coefficients shrink to zero (**stronger feature selection**)  
- Small $\lambda$ → Acts like **Linear Regression**  

---

### 📊 Visualization
![Lasso Regression vs Linear Regression](https://media.licdn.com/dms/image/v2/C5612AQEubqIMPzIWsA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1603631920705?e=1760572800&v=beta&t=eFVjx3WmIM2pHRPpghKE8hzpus3Dr4qY47pfRTClZio)


---

### 💻 Example (Python)
```python
from sklearn.linear_model import Lasso

# Create model with regularization
lasso = Lasso(alpha=1.0)
lasso.fit(X_train, y_train)

# Predictions
predictions = lasso.predict(X_test)
print(predictions)
