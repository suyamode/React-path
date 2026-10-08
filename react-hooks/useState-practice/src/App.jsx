import React from "react";
import ShoppingList from "./assets/components/ShoppingList";
import TaskPriorityBoard from "./assets/components/TaskPriorityBoard";
import RandomTechAdvise from "./assets/components/RandomTechAdvise";

function App() {
  return (
    <div>
      <ShoppingList />
      <TaskPriorityBoard />
      <RandomTechAdvise />
    </div>
  );
}

export default App;
