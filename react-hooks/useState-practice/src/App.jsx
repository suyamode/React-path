import React from "react";
import ShoppingList from "./components/ShoppingList";
import TaskPriorityBoard from "./components/TaskPriorityBoard";
import TechAdviceCard from "./components/TechAdviceCard";
import Timer from "./components/Timer";
function App() {
  return (
    <div>
      <ShoppingList />
      <TaskPriorityBoard />
      <TechAdviceCard />
      <Timer />
    </div>
  );
}

export default App;
