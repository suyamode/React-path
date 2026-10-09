// src/hooks/useAdvice.js
import { useState, useEffect } from "react";
import { getAdvice } from "../api/adviceApi";

export function useAdvice() {
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNewAdvice = async () => {
    try {
      setLoading(true);
      setError(null);
      const newAdvice = await getAdvice();
      setAdvice(newAdvice);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch automatically on mount
  useEffect(() => {
    fetchNewAdvice();
  }, []);

  // Return the data and trigger function to the UI
  return { advice, loading, error, refetch: fetchNewAdvice };
}
