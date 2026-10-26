import React, { useState } from "react";

function TaskPriorityBoard() {
  // States definition
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [priority, setPriority] = useState("Medium");

  // Priority Colors
  const priorityColors = {
    High: "bg-red-950 text-red-400 border-red-800",
    Medium: "bg-amber-950 text-amber-400 border-amber-800",
    Low: "bg-emerald-950 text-emerald-400 border-emerald-800",
  };

  // Handle Task Add
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskInput.trim()) return;

    const newTask = {
      id: Date.now(),
      title: taskInput,
      isCompleted: false,
      priority: priority,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
    setPriority("Medium");
  };

  // Handle Task Deletion
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); // 3. Wrapped in setTasks
  };

  // Toggle completion of tasks
  const toggleComplete = (id) => {
    setTasks(
      tasks.map(
        (task) =>
          task.id === id ? { ...task, isCompleted: !task.isCompleted } : task, // 4. Returned expression directly
      ),
    );
  };

  // Global Counters
  const total = tasks.length;
  const completed = tasks.filter((task) => task.isCompleted).length;
  const highPriorityTasks = tasks.filter(
    (task) => task.priority === "High",
  ).length;

  // UI rendering
  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Simple Task Manager</h1>

      <div className="flex gap-2 mb-4 text-sm">
        <span>
          Total Tasks: <strong>{total}</strong>
        </span>
        <span>|</span>
        <span>
          Completed: <strong>{completed}</strong>
        </span>
        <span>|</span>
        <span>
          High Priority: <strong>{highPriorityTasks}</strong>
        </span>
      </div>

      <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
        <input
          type="text"
          value={taskInput}
          placeholder="Add task title..."
          onChange={(e) => setTaskInput(e.target.value)}
          className="border p-2 rounded flex-1"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </form>

      <ul>
        {tasks.length === 0 ? (
          <p>No tasks found. Create one above!</p>
        ) : (
          tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-2 border-b"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => toggleComplete(task.id)}
                />
                <span
                  className={
                    task.isCompleted ? "line-through text-slate-500" : ""
                  }
                >
                  {task.title}
                </span>
                <span
                  className={`px-2 py-0.5 text-xs rounded border ${
                    priorityColors[task.priority]
                  }`}
                >
                  {task.priority}
                </span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-xs text-rose-400"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TaskPriorityBoard;
