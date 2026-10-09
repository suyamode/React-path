import React from "react";
import { useState } from "react";

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState("");
  const handleAddItem = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;
    const newItem = {
      id: Date.now(),
      name: inputText,
      isPurchased: false,
    };
    setItems([...items, newItem]);
    setInputText("");
  };
  const togglePurchased = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, isPurchased: !item.isPurchased };
        }
        return item;
      }),
    );
  };
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const totalItems = items.length;
  const purchasedItems = items.filter((item) => item.isPurchased).length;
  return (
    <div className="bg-cyan-950 max-w-lg mx-auto my-8 p-6 rounded-xl shadow-2xl border border-cyan-800">
      {/* Header */}
      <h1 className="text-amber-200 text-3xl text-center font-bold tracking-wide mb-2">
        Smart Shopping List
      </h1>

      {/* Stats Badge Container */}
      <div className="flex justify-center items-center gap-4 text-sm font-medium text-amber-100/90 mb-6 bg-cyan-900/60 py-2 px-4 rounded-lg border border-cyan-800/50">
        <span>
          Total Items:{" "}
          <strong className="text-amber-300 font-bold">{totalItems}</strong>
        </span>
        <span className="text-cyan-700">|</span>
        <span>
          Purchased:{" "}
          <strong className="text-emerald-400 font-bold">
            {purchasedItems}
          </strong>
        </span>
      </div>

      {/* Add Item Form */}
      <form onSubmit={handleAddItem} className="flex gap-2 mb-6">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Add an item..."
          className="flex-1 bg-cyan-900/40 text-amber-100 placeholder-cyan-500/70 border border-cyan-800 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400 rounded-lg px-4 py-2.5 text-sm transition-all"
        />
        <button
          type="submit"
          className="bg-amber-400 hover:bg-amber-300 text-cyan-950 font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors cursor-pointer shadow-md active:scale-[0.98]"
        >
          Add Item
        </button>
      </form>

      {/* Shopping Items List */}
      <ul className="flex flex-col gap-2.5">
        {items.length === 0 ? (
          <p className="text-center text-cyan-500 text-sm py-4 italic">
            Your list is empty. Add some items above!
          </p>
        ) : (
          items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-3 bg-cyan-900/30 border border-cyan-800/60 p-3 rounded-lg hover:border-cyan-700 transition-colors"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <input
                  type="checkbox"
                  checked={item.isPurchased}
                  onChange={() => togglePurchased(item.id)}
                  className="w-4 h-4 accent-amber-400 rounded cursor-pointer shrink-0"
                />
                <span
                  className={`text-sm truncate transition-all ${
                    item.isPurchased
                      ? "line-through text-cyan-500/80 italic"
                      : "text-amber-100 font-medium"
                  }`}
                >
                  {item.name}
                </span>
              </div>

              <button
                onClick={() => deleteItem(item.id)}
                className="text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 px-2.5 py-1.5 rounded border border-rose-900/40 hover:border-rose-800 transition-all shrink-0 cursor-pointer"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ShoppingList;
