# 🤖 What is Machine Learning?

Machine Learning (ML) is a method of teaching computers to:  
- 📚 Learn from **data**  
- 🔍 Find **patterns**  
- 📊 Make **decisions** or **predictions**  
...without being explicitly programmed.

---

## 📂 Types of Machine Learning

| Type           | Learns From                | Output Type              | Example                              |
|----------------|----------------------------|--------------------------|---------------------------------------|
| **Supervised** | Labeled Data (X + Y)       | Predict known output     | Predict heart disease (Y/N)           |
| **Unsupervised** | Unlabeled Data (X only)   | Discover hidden patterns | Customer Segmentation                 |
| **Reinforcement** | Environment + Rewards   | Learn by trial/error     | Game AI, Robot Navigation             |

---

## 🗝 Key Terms

- **Feature (X):** An input variable (e.g., age, cholesterol)  
- **Label / Target (Y):** What we want to predict (e.g., heart disease = 1 or 0)  
- **Model:** A mathematical function that maps `X → Y`  
- **Training:** Teaching the model by feeding it data  
- **Prediction:** Using the model on new data to guess `Y`  
- **Loss Function:** Measures how wrong the model's predictions are  
- **Optimizer:** Method to reduce the loss and improve the model  
- **Evaluation:** Checking model performance (accuracy, precision, etc.)  

---

## 🛠 Machine Learning Process (Pipeline)

1. **Understand the Problem**  
2. **Collect / Load Data**  
3. **Explore & Clean Data**  
4. **Feature Engineering**  
5. **Split Data:** Train/Test (e.g., 70/30 split)  
6. **Train Model:** (e.g., Logistic Regression)  
7. **Evaluate Model:** Accuracy, Precision, Confusion Matrix  
8. **Deploy or Improve:** Use in real world or enhance accuracy  

---

## 📏 Performance Metrics

- **Accuracy:** % of correct predictions  
- **Precision:** How many predicted positives were actually correct  
- **Recall:** How many actual positives were detected  
- **F1-Score:** Harmonic mean of Precision and Recall  

\[
\text{Harmonic Mean} = \frac{2 \times P \times R}{P + R}
\]

**Example:**  
- Point A → B : 60 km/h  
- Point B → A : 40 km/h  

---

## 📊 Confusion Matrix

| Patient | Actual | Predicted | What Happened |
|---------|--------|-----------|---------------|
| A       | 1      | 1         | TP (True Positive) |
| B       | 0      | 0         | TN (True Negative) |
| C       | 1      | 0         | FN (False Negative) |
| D       | 0      | 1         | FP (False Positive) |

**Summary Table:**

| Actual | Predicted | Term |
|--------|-----------|------|
| 1      | 1         | TP   |
| 1      | 0         | FN   |
| 0      | 0         | TN   |
| 0      | 1         | FP   |

---

## 📬 Email Filtering AI Example

- AI marked **10 emails** as spam  
- Actually, **6** of them were truly spam  
- **4 emails** were wrongly marked as spam  

\[
\text{Precision} = \frac{TP}{TP + FP} = \frac{6}{10} = 60\%
\]  

\[
\text{Recall} = \frac{TP}{TP + FN} = \frac{6}{10} = 60\%
\]  

---

💡 **Conclusion:**  
Machine learning enables computers to learn from data, find patterns, and make predictions with minimal human intervention. By understanding the types, processes, and metrics, we can build better and more accurate models.

---
