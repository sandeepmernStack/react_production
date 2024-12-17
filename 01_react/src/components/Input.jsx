import React, { useState } from "react";
import {UseCurrencyInfo} from "./index";

function Input() {
  const { data, error, loading } = UseCurrencyInfo("USD");

  const [amount, setAmount] = useState(""); // Input amount
  const [fromCurrency, setFromCurrency] = useState("USD"); // Default 'from' currency
  const [toCurrency, setToCurrency] = useState("USD"); // Default 'to' currency
  const [result, setResult] = useState(null); // Conversion result

  // Function to handle conversion
  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      alert("Please enter a valid amount!");
      return;
    }
    if (data && data.conversion_rates) {
      const fromRate = data.conversion_rates[fromCurrency];
      const toRate = data.conversion_rates[toCurrency];
      const convertedValue = (amount / fromRate) * toRate; // Conversion logic
      setResult(convertedValue.toFixed(2));
    }
  };

  if (loading) return <p>Loading currency data...</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;

  return (
    <div className="container bg-danger p-4 h-100">
      <h1 className="text-center text-white">Currency Converter</h1>

      <div className="input-box col-6 mx-auto">
        {/* Amount Input */}
        <input
          type="number"
          placeholder="Enter Amount"
          className="form-control mb-3"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        {/* From Currency */}
        <select
          className="form-select mb-3"
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {data &&
            Object.keys(data.conversion_rates).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
        </select>

        {/* To Currency */}
        <select
          className="form-select mb-3"
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {data &&
            Object.keys(data.conversion_rates).map((key) => (
              <option key={key} value={key}>
                {key}
              </option>
            ))}
        </select>

        {/* Convert Button */}
        <button className="btn btn-primary w-100" onClick={handleConvert}>
          Convert
        </button>

        {/* Display Conversion Result */}
        {result && (
          <div className="mt-4 text-center">
            <h3 className="text-white">
              {amount} {fromCurrency} = {result} {toCurrency}
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default Input;
