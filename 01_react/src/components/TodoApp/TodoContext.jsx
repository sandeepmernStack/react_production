import { useContext, createContext, useEffect, useState } from "react";

const TodoContext = createContext({});

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  // Add Todo Function
  const addTodo = (todoText) => {
    if (todoText.trim()) {
      const newTodo = {
        id: Date.now(),
        text: todoText,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }
  };

  // Update Todo Function
  const updateTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  // Delete Todo Function
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Load todos from localStorage on initial render
  useEffect(() => {
    const storedData = localStorage.getItem("todos");
    if (storedData) {
      setTodos(JSON.parse(storedData)); // Parse the string into an array
    }
  }, []);

  // Save todos to localStorage whenever todos state changes
  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to use the TodoContext
export const useTodoContext = () => useContext(TodoContext);
