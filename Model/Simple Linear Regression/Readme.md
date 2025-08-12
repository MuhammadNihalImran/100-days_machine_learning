# Simple Linear Regression

## Problem
Predict a continuous numerical value based on one input variable.  
**Example:** Predict a student's exam score based on hours studied.

## Learning Type
- **Type:** Supervised Learning  
- **Subtype:** Regression

## Formula
\[
y = m.x + b
\]
Where:  
- \( y \) = Predicted output  
- \( x \) = Input feature  
- \( m \) = Slope (weight)  
- \( b \) = Intercept (bias)

## Example Dataset

| Hours Studied (X) | Exam Score (Y) |
|-------------------|----------------|
| 1                 | 52             |
| 2                 | 56             |
| 3                 | 61             |
| 4                 | 66             |
| 5                 | 71             |

## Scatter Plot with Regression Line
![Scatter Plot with Regression Line](https://upload.wikimedia.org/wikipedia/commons/3/3a/Linear_regression.svg)

## Steps
1. Collect labeled data (X, Y).
2. Fit a linear regression model.
3. Find best slope \(m\) and intercept \(b\) using least squares.
4. Use model to predict new values.

## Common Use Cases
- Predicting sales based on advertising spend.
- Estimating house prices from square footage.
- Forecasting temperature from time of year.

