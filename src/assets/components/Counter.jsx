import react from "react";
import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <button
      className="rounded-lg bg-amber-800 text-white text-lg hover:bg-amber-650 p-3 d-inline-block text-bolder shadow-lg w-[350px] mx-auto"
      onClick={handleClick}
    >
      Clicks : {count}
    </button>
  );
}
