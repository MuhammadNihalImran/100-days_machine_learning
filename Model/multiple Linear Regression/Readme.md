# Multiple Linear Regression

## Problem
Predict a continuous numerical value based on two or more input variables.  
**Example:** Predict a house price based on square footage, number of bedrooms, and location score.

## Learning Type
- **Type:** Supervised Learning  
- **Subtype:** Regression

## Formula
\[
y = b0 + b1x1 + b2x2 + ... + bnxn
\]
Where:  
- \( y \) = Predicted output  
- \( x1, x2,..., xn \) = Input features  
- \( b0 \) = Intercept (bias)  
- \( b1, b2,.., b_n \) = Coefficients (weights)

## Example Dataset

| SqFt (X₁) | Bedrooms (X₂) | Location Score (X₃) | Price (Y)   |
|-----------|---------------|---------------------|-------------|
| 1400      | 3             | 8                   | 245,000     |
| 1600      | 3             | 7                   | 312,000     |
| 1700      | 4             | 9                   | 279,000     |
| 1875      | 4             | 6                   | 308,000     |
| 1100      | 2             | 7                   | 199,000     |

## 📊 Visualization
- 📈 **3D scatter plot** for 2 features.  
- 🔍 **Pair plots** for many features.  
- 📊 **Predicted vs Actual** line plots for performance.

**Example 3D plot:**  
![Multiple Linear Regression 3D Plot](https://github.com/user-attachments/assets/f92bd1b3-9bd5-4519-9141-daf94aefba52)


---

## 🛠 Steps to Implement
1. 📥 Collect **labeled data** with multiple features.
2. ⚙️ Fit the **regression model** to find the best coefficients \( b_0, b_1, ..., b_n \).
3. 📈 Predict new outputs using the trained model.
4. 📏 Evaluate performance using **MAE**, **MSE**, and **R²**.

---

## 💡 Common Use Cases
- 🏡 House price prediction.  
- 🎓 Predicting student performance from study time, attendance, and scores.  
- 🛒 Forecasting sales from advertising spend across channels.  

---

## 💻 Example Python Code
```python
from sklearn.linear_model import LinearRegression

# Train model
ls = LinearRegression()
ls.fit(x_train, y_train)

# Predict
predictions = ls.predict(x_test)
print(predictions)
