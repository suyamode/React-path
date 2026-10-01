import React from "react";
import { useState } from "react"; // Fixed typo: useState, not userState

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div className="flex max-w-lg justify-center items-center p-3 gap-3 max-w-lg bg-slate-700 shadow-lg border-1 mt-4 text-white">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 focus:outline-none focus:ring ring-amber-500 bg-white rounded-lg text-slate-900"
      />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default NameInput;
