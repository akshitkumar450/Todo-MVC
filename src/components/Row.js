import React, { useState } from "react";

function Row({ todo, setActiveTodo, deleteTodo, todos, setTodos }) {
  const [editable, setEditable] = useState(false);
  const [edit, setEdit] = useState("");

  const editTodo = (todo) => {
    setEditable(true);
    setEdit(todo.todo);
  };

  const addTodo = (e, id) => {
    e.preventDefault();
    if (edit.trim().length === 0) {
      setEditable(false);
      let temp;
      temp = todos.filter((todo) => todo.id !== id);
      setTodos([...temp]);
      return;
    }
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.todo = edit.trim();
      }
    });
    // console.log(todos);
    setTodos(todos);
    setEditable(false);
  };

  const escCheck = (e, mytodo, id) => {
    console.log(mytodo, id);
    if (e.key === "Escape") {
      todos.forEach((todo) => {
        if (todo.id === id) {
          todo.todo = mytodo;
        }
      });
      // console.log(todos);
      setTodos([...todos]);
    } else return;
  };

  return (
    <div key={todo.id} className="todos__container">
      <div className="todo">
        <p onClick={() => setActiveTodo(todo.id)}>{todo.active ? "✅" : "✔"}</p>
        {!editable ? (
          <p
            style={{
              width: "100%",
              fontSize: "20px",
              marginLeft: "20px",
            }}
            onDoubleClick={() => editTodo(todo)}
            className={`${todo.active && "completed"} pointer`}>
            {todo.todo}
          </p>
        ) : (
          <form
            style={{
              width: "100%",
              height: "100%",
              marginLeft: "20px",
            }}
            onSubmit={(e) => addTodo(e, todo.id)}>
            <input
              onKeyDown={(e) => escCheck(e, todo.todo, todo.id)}
              className="editFormInput"
              autoFocus
              onBlur={(e) => addTodo(e, todo.id)}
              value={edit}
              onChange={(e) => setEdit(e.target.value)}
            />
            <button type="submit">add</button>
          </form>
        )}
        <p className="deleteBtn" onClick={() => deleteTodo(todo.id)}>
          X
        </p>
      </div>
    </div>
  );
}

export default Row;
