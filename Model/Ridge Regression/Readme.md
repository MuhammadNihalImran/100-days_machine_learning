# 📈 Ridge Regression – Explained

## ❓ What is Ridge Regression?
Ridge Regression is a **regularization technique** used in linear regression to prevent **overfitting** by adding a penalty term to the loss function.  
It helps when:
- Features are highly correlated (**multicollinearity**)
- We have **more features than samples**
- We want to control the magnitude of coefficients

The Ridge penalty term is based on the **L2 norm** of coefficients.

---

## 💡 Why use Ridge Regression?
- ✅ **Prevents overfitting** in high-dimensional datasets  
- ✅ **Reduces variance** of model predictions  
- ✅ **Handles multicollinearity** effectively  
- ✅ Works well when **all features contribute** to the outcome

---

## ⚙️ How does Ridge Regression work?
In standard linear regression, we minimize:

$$
\text{Loss} = \sum (y_i - \hat{y}_i)^2
$$

In Ridge Regression, we add an L2 penalty:

$$
\text{Loss} = \sum (y_i - \hat{y}_i)^2 + \lambda \sum \beta_j^2
$$

Where:

- $\lambda$ = regularization strength  
- $\beta_j$ = model coefficients  
- Large $\lambda$ → smaller coefficients (more bias, less variance)  
- Small $\lambda$ → behaves like linear regression  


---

## 🖼 Visualization
![Ridge Regression vs Linear Regression](https://i.sstatic.net/s71QZ.png)

---

## 🛠 Python Example
```python
from sklearn.linear_model import Ridge
from sklearn.datasets import load_boston
from sklearn.model_selection import train_test_split

# Load dataset
X, y = load_boston(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train Ridge Regression model
ridge = Ridge(alpha=1.0)
ridge.fit(X_train, y_train)

# Predictions
predictions = ridge.predict(X_test)

print("Model Coefficients:", ridge.coef_)
print("Intercept:", ridge.intercept_)
