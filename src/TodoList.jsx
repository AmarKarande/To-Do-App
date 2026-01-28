import { useState } from "react";
import "./index.css"; // Import the CSS file

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo(""); // Clear the input field after adding
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <div className="todo-card">
        <h1 className="todo-title">To-Do List</h1>

        <div className="todo-input-container">
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="todo-input"
            placeholder="Add a new task"
          />
          <button onClick={handleAddTodo} className="todo-add-btn">
            Add
          </button>
        </div>

        <ul className="todo-list">
          {todos.map((task, index) => (
            <li key={index} className="todo-item">
              <span>{task}</span>
              <button onClick={() => handleRemoveTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
