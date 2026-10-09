// src/components/TechAdviceCard.jsx
import React from "react";
import { useAdvice } from "../hooks/useAdvice";

export default function TechAdviceCard() {
  const { advice, loading, error, refetch } = useAdvice();

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-slate-900 text-slate-100 rounded-xl text-center">
      <h2 className="text-xl font-bold mb-4">Tech Advice Generator</h2>

      {loading && <p className="text-slate-400 py-4">Loading advice...</p>}
      {!loading && error && <p className="text-rose-400 py-4">{error}</p>}
      {!loading && !error && advice && (
        <blockquote className="text-lg italic my-4 p-4 bg-slate-800 rounded-lg">
          "{advice}"
        </blockquote>
      )}

      <button
        onClick={refetch}
        disabled={loading}
        className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        {loading ? "Fetching..." : "Get Another Advice"}
      </button>
    </div>
  );
}
