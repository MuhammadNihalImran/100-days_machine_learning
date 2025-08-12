# Polynomial Regression

## Problem
Model a non-linear relationship between input variables and a continuous numerical output by introducing polynomial terms of the input features.  
**Example:** Predicting the growth rate of plants based on temperature, where the relationship is curved.

**Problem Category:** Regression  
- **Binary Classification?** ❌  
- **Multi-class Classification?** ❌  
- **Regression?** ✅  
- **Clustering?** ❌  

## Learning Type
- **Type:** Supervised Learning  
- **Subtype:** Regression (Non-linear)

## Formula
\[
y = b_0 + b_1x + b_2x^2 + \dots + b_nx^n
\]
Where:  
- \( y \) = Predicted output  
- \( x \) = Input feature  
- \( b_0 \) = Intercept (bias)  
- \( b_1, b_2, \dots, b_n \) = Coefficients for polynomial terms  
- \( n \) = Degree of the polynomial

## Example Dataset

| X (Temperature °C) | Y (Growth Rate cm/week) |
|--------------------|-------------------------|
| 10                 | 1.2                     |
| 15                 | 2.5                     |
| 20                 | 3.8                     |
| 25                 | 5.0                     |
| 30                 | 4.5                     |
| 35                 | 3.0                     |

## Visualization
- **Linear Regression** fits a straight line.
- **Polynomial Regression** fits a curve to capture non-linear patterns.

**Example Plot:**  
![Linear vs Polynomial Regression](ec0edd03-3b59-4861-a7ed-a2b102ba91a5.png)

## Steps
1. Collect labeled data.
2. Transform input features into polynomial terms (e.g., \(x, x^2, x^3\)).
3. Fit the regression model on these transformed features.
4. Predict on new data.
5. Evaluate using metrics like MAE, MSE, R².

## Common Use Cases
- Predicting non-linear physical processes.
- Modeling growth curves.
- Forecasting with cyclical or curved trends.

## Example Python Code
```python
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

# Transform features into polynomial terms
poly = PolynomialFeatures(degree=2)
X_poly = poly.fit_transform(x_train)

# Train model
model = LinearRegression()
model.fit(X_poly, y_train)

# Predict
X_test_poly = poly.transform(x_test)
predictions = model.predict(X_test_poly)
print(predictions)
