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

## Visualization
A scatter plot works for one variable, but for multiple variables, we often use:
- **3D scatter plots** (for 2 features)
- **Pair plots** (matrix of scatter plots for all features)
- **Predicted vs Actual line plots**  

**Example 3D plot:**  
![Multiple Linear Regression 3D Plot](<img width="458" height="395" alt="image" src="https://github.com/user-attachments/assets/6b5fe13c-d7a3-48ab-a65f-cff90c3855a2" />
)

## Steps
1. Collect labeled data with multiple features.
2. Fit the regression model to find the best coefficients \(b_0, b_1, ..., b_n\).
3. Use the model to predict new outputs.
4. Evaluate using metrics like MAE, MSE, R².

## Common Use Cases
- House price prediction.
- Predicting student performance from study time, attendance, and previous scores.
- Forecasting sales from advertising spend across multiple channels.
