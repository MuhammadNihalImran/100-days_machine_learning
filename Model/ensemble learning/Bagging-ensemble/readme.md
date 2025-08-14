## 💻 Python Examples

### **1. Bagging (Random Forest - Classification)**
```python
from sklearn.ensemble import RandomForestClassifier

rf_clf = RandomForestClassifier(
    n_estimators=100,
    criterion="gini",
    max_depth=5,
    random_state=42,
    bootstrap=True
)
rf_clf.fit(X_train, y_train)
