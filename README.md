# 🤖 What is Machine Learning?

Machine Learning (ML) is a method of teaching computers to:  
- 📚 Learn from **data**  
- 🔍 Find **patterns**  
- 📊 Make **decisions** or **predictions**  
...without being explicitly programmed.

---

## 📌 Types of ML Problems

### **1. Binary Classification**  
Predict one of two possible categories: **0 or 1, Yes or No, True or False**  
**Example:** Predict if a patient has heart disease (Yes/No).

### **2. Multi-Class Classification**  
Predict one of more than two categories.  
**Example:** What type of animal is this? (**Cat, Dog, Horse**)

### **3. Regression**  
Predict a continuous numerical value.  
**Example:** Predict the selling price of a house.

### **4. Multi-Label Classification**  
Predict multiple binary labels for each instance.  
**Example:** Predict which genres apply to a movie (**Action, Comedy, Thriller, Drama**).

### **5. Clustering**  
Group similar items together without labeled targets (**Unsupervised Learning**).  
**Example:** Group customers by spending behavior.

### **6. Anomaly Detection**  
Find unusual data points that do not fit normal patterns.  
**Example:** Detect credit card fraud.

### **7. Time Series Forecasting**  
Predict values over time.  
**Example:** Forecast stock prices or electricity usage over days/weeks/months.

---

## ❤️ Example: Heart Dataset

- **Type:** Supervised Learning  
- **Problem:** Binary Classification  
- **Goal:** Predict Target (1: Disease, 0: No Disease)  
- **X (Features):** Age, Thal, Cholesterol, CPType, MaxHR, etc.  
- **Y (Label):** Target column (0 or 1)  

---

## 🛠 ML Pipeline

1. **Data (Dataset)** – Gather data  
2. **EDA** – Explore shape, missing values, outliers, distribution  
3. **Cleaning** – Fix datatypes, encode categories  
4. **Feature Engineering** – Create new features  
5. **Split** – Separate Features (X) and Target (y)  
6. **Model** – Train using ML algorithms  
7. **Evaluate** – Accuracy, precision, recall, confusion matrix  

---

## 📂 Types of Learning

| Learning Type     | Data Used                  | Goal Example                        |
|-------------------|----------------------------|--------------------------------------|
| Supervised        | Labeled data               | Predict disease (Yes/No)             |
| Unsupervised      | Unlabeled data             | Customer segmentation                |
| Reinforcement     | Rewards from environment   | Game AI, robot navigation            |

---

## 📊 Structured vs. Unstructured Data

- **Structured:** Tabular format (CSV, SQL Tables)  
- **Unstructured:** Text, images, videos  

---

## 🧪 Train / Test / Validation

- **Training Set:** Used to train the model  
- **Testing Set:** Used to evaluate performance  
- **Validation Set (Optional):** Used for tuning (hyperparameters)  

---

## 📈 Basic Probability & Statistics

- **Mean, Median, Mode, Standard Deviation**  
- **Probability:**  
  \[
  P(disease) = \frac{20}{100} = 0.20 \text{ or } 20\%
  \]  
- **Conditional Probability:**  
  \[
  P(disease \mid ChestPain=Yes)
  \]  
- **Distributions:** Normal, skewed  

---

## 📉 Standard Deviation (Spread of Data)

- **Low Std Dev:** Data tightly packed  
- **High Std Dev:** Data spread out  

Example:  
- Group A: [150, 151, 149, 150, 150] → Low spread  
- Group B: [100, 200, 150, 180, 120] → High spread  

---

## 🔗 Correlation vs Causation

- **Correlation:** Measures relationship (-1 to +1). Example: High cholesterol correlated with heart disease.  
- **Causation:** One variable directly affects another. Example: Smoking causes lung damage.  

---

## ⚖ Bias & Variance

- **Bias:** Error due to overly simplistic assumptions → **Underfitting** (High training & test error)  
- **Variance:** Error due to model sensitivity to fluctuations → **Overfitting** (Low training error, high test error)  

---

## 📂 Types of Machine Learning

| Type           | Learns From                | Output Type              | Example                              |
|----------------|----------------------------|--------------------------|---------------------------------------|
| **Supervised** | Labeled Data (X + Y)       | Predict known output     | Predict heart disease (Y/N)           |
| **Unsupervised** | Unlabeled Data (X only)   | Discover hidden patterns | Customer Segmentation                 |
| **Reinforcement** | Environment + Rewards   | Learn by trial/error     | Game AI, Robot Navigation             |

---

## 🗝 Key Terms

- **Feature (X):** Input variable (e.g., age, cholesterol)  
- **Label / Target (Y):** Output variable to predict  
- **Model:** Function mapping `X → Y`  
- **Training:** Learning patterns from data  
- **Prediction:** Applying model to unseen data  
- **Loss Function:** How wrong predictions are  
- **Optimizer:** Method to minimize loss  
- **Evaluation:** Assess performance (accuracy, precision, etc.)  

---

## 📏 Performance Metrics

- **Accuracy:** % correct predictions  
- **Precision:** % predicted positives that are correct  
- **Recall:** % actual positives caught  
- **F1-Score:** Harmonic mean of Precision & Recall  
\[
F1 = \frac{2 \times P \times R}{P + R}
\]

---

## 📊 Confusion Matrix

| Patient | Actual | Predicted | Outcome          |
|---------|--------|-----------|------------------|
| A       | 1      | 1         | TP (True Positive) |
| B       | 0      | 0         | TN (True Negative) |
| C       | 1      | 0         | FN (False Negative) |
| D       | 0      | 1         | FP (False Positive) |

---

## 📬 Email Filtering AI Example

- **AI Prediction:** 10 emails marked as spam  
- **Actually Spam:** 6 of them  
- **Wrongly Marked Spam:** 4 emails  

\[
\text{Precision} = \frac{6}{10} = 60\%
\]  
\[
\text{Recall} = \frac{6}{10} = 60\%
\]  

---

💡 **Conclusion:**  
Machine Learning combines statistics, algorithms, and computing to make predictions and find patterns in data. By understanding types, processes, and metrics, we can build effective models for real-world problems.

---
