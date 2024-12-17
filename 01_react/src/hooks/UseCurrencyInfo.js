import { useState, useEffect } from "react";

function UseCurrencyInfo(currency) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrencyData = async () => {
      setLoading(true);
      setError(null); // Reset errors
      try {
        const response = await fetch(
          `https://v6.exchangerate-api.com/v6/805eee5b0c4977ad97388cf0/latest/${currency}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencyData();
  }, [currency]);

  // Optional: Debugging output
  useEffect(() => {
    console.log("Currency Data: ", data);
  }, [data]);

  return { data, error, loading };
}

export default UseCurrencyInfo;
