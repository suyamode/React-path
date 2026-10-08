import React from "react";
import { useState, useEffect } from "react";

function RandomTechAdvise() {
  const [advice, setAdvice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAdvice = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.adviceslip.com/advice");
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setAdvice(data.slip.advice);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-slate-900 text-slate-100 rounded-xl shadow-xl text-center">
      <h2 className="text-xl font-bold mb-4">Tech Advice Generator</h2>

      {loading && (
        <p className="text-slate-400 py-4 animate-pulse">Loading advice...</p>
      )}
      {!loading && error && <p className="text-rose-400 py-4">{error}</p>}
      {!loading && !error && advice && (
        <blockquote className="text-lg italic text-slate-200 my-4 p-4 bg-slate-800 rounded-lg border border-slate-700">
          "{advice}
        </blockquote>
      )}

      <button
        onClick={fetchAdvice}
        disabled={loading}
        className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white text-sm px-4 py-2 rounded-lg"
      >
        {loading ? "Fetching..." : "Get Another Advice"}
      </button>
    </div>
  );
}

export default RandomTechAdvise;
