import React, { useState, useEffect } from "react";
import uuidv4 from "uuid/v4";

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [todos, setTodos] = useState(getTodos);
  const [text, setText] = useState("");
  const todoList = todos.map(todo => (
    <li onClick={deleteItem.bind(null, todo)} key={todo.id}>
      {" "}
      {todo.text}
    </li>
  ));

  useEffect(() => {
    document.title = `${todos.length} tasks`;
  });

  return (
    <div>
      <p>{todos.length} tasks </p>
      <button onClick={addToList}>Click me</button>
      <input type="text" value={text} onChange={handleChange} />
      <ul>{todoList}</ul>
    </div>
  );

  function addToList() {
    updateTodos([...todos, { id: uuidv4(), text }]);
    setText("");
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  function deleteItem(todo) {
    const index = todos.findIndex(item => item.id === todo.id);
    todos.splice(index, 1);
    updateTodos(todos);
  }

  function getTodos() {
    let localTodos = localStorage.getItem("rh-todo");
    if (localTodos) {
      return JSON.parse(localTodos);
    }
    return [];
  }

  function updateTodos(todos) {
    setTodos([...todos]);
    localStorage.setItem("rh-todo", JSON.stringify(todos));
  }
}
