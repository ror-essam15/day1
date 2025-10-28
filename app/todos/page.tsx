"use client";
import { useEffect, useState } from "react";

interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");

  // fetch all todos
  const fetchTodos = async () => {
    const res = await fetch("/api/todos");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // add new todo
  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    fetchTodos();
  };

  // delete todo
  const deleteTodo = async (id: string) => {
    const res = await fetch(`/api/todos/${id}`, { method: "DELETE" });
    if (res.ok) {
      fetchTodos(); // re-fetch after delete
    } else {
      console.error("Failed to delete todo");
    }
  };

  // mark as done
  const markDone = async (id: string, completed: boolean) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !completed }),
    });
    if (res.ok) {
      fetchTodos();
    } else {
      console.error("Failed to update todo");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-xl p-6">
      <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">My Todo List</h1>

      <form onSubmit={addTodo} className="flex gap-2 mb-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a task..."
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:ring focus:ring-blue-200 outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition"
        >
          Add
        </button>
      </form>

      <ul className="space-y-3">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg shadow-sm"
          >
            <span
              className={`text-gray-800 ${
                todo.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {todo.title}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => markDone(todo._id, todo.completed)}
                className={`px-3 py-1 rounded-md text-sm ${
                  todo.completed
                    ? "bg-yellow-400 hover:bg-yellow-500 text-white"
                    : "bg-green-500 hover:bg-green-600 text-white"
                }`}
              >
                {todo.completed ? "Undo" : "Done"}
              </button>

              <button
                onClick={() => deleteTodo(todo._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
