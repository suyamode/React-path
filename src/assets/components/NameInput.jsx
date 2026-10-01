import React from "react";
import { useState } from "react"; // Fixed typo: useState, not userState

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div className="flex justify-center items-center p-3 gap-3 max-w-lg bg-slate-700 shadow-lg border my-4 mx-auto text-white">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 focus:outline-none focus:ring ring-amber-500 bg-white rounded-lg text-slate-900 text-shadow-mist-100"
      />
      <p>Hello, {name}!</p>
    </div>
  );
}

export default NameInput;
