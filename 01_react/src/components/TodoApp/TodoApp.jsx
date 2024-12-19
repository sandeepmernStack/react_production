import React, { useState } from "react";
import { useTodoContext } from "./TodoContext";

function TodoApp() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodoContext();
  const [todoText, setTodoText] = useState("");
  const [editingTodo, setEditingTodo] = useState(null); // For tracking the todo being edited
  const [updatedText, setUpdatedText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTodo) {
      // Update the todo if it's in edit mode
      updateTodo(editingTodo.id, updatedText);
      setEditingTodo(null);
      setUpdatedText("");
    } else {
      // Add new todo
      addTodo(todoText);
      setTodoText(""); // Clear the input after adding the todo
    }
  };

  const handleEdit = (todo) => {
    setEditingTodo(todo);
    setUpdatedText(todo.text); // Pre-fill the input with the current todo text
  };

  return (
    <div className="col-md-6 col-12 mx-auto p-3 bg-info">
      <h3 className="text-center text-white mb-3">Todo App</h3>
      <form onSubmit={handleSubmit} className="mb-3">
        <input
          type="text"
          value={editingTodo ? updatedText : todoText}
          onChange={(e) =>
            editingTodo ? setUpdatedText(e.target.value) : setTodoText(e.target.value)
          }
          placeholder={editingTodo ? "Update todo" : "Enter a new todo"}
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-light w-100">
          {editingTodo ? "Update Todo" : "Add Todo"}
        </button>
      </form>

      {todos.length > 0 ? (
        <ul className="list-group">
          {todos.map((todo) => (
            <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{todo.text}</span>
              <div>
                <button
                  onClick={() => handleEdit(todo)}
                  className="btn btn-warning btn-sm mx-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-white">No todos yet. Add one!</p>
      )}
    </div>
  );
}

export default TodoApp;
