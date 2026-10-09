import React from "react";
import ShoppingList from "./components/ShoppingList";
import TaskPriorityBoard from "./components/TaskPriorityBoard";
import TechAdviceCard from "./components/TechAdviceCard";
function App() {
  return (
    <div>
      <ShoppingList />
      <TaskPriorityBoard />
      <TechAdviceCard />
    </div>
  );
}

export default App;
