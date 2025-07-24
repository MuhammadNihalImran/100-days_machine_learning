import { useState } from "react";
import axios from "axios";

function App() {
  const [input, setInput] = useState("");
  const [prediction, setPrediction] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const features = input.split(",").map(Number);

    try {
      const res = await axios.post("http://localhost:5000/predict", {
        features,
      });
      const value = parseFloat(res.data.prediction[0]).toFixed(2);
      setPrediction(value);
      console.log("Prediction response:", res.data);
    } catch (err) {
      console.error("Prediction error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6 text-gray-700">
          CGPA to Package Predictor
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your CGPA"
            className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition duration-200 cursor-pointer"
          >
            Predict
          </button>
        </form>

        {prediction !== null && (
          <div className="mt-6 text-center text-xl font-semibold text-green-700">
            Estimated Package: {prediction} LPA
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
