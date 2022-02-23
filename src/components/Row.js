import React, { useState } from "react";

function Row({ todo, setActiveTodo, deleteTodo, todos, setTodos, addTodos }) {
  const [editable, setEditable] = useState(false);
  const [edit, setEdit] = useState("");
  const [todoItem, setTodoItem] = useState(todo);

  const editTodo = () => {
    setEditable(true);
    setEdit(todoItem.todo);
  };
  const addTodo = (e, id) => {
    e.preventDefault();
    if (edit.trim().length === 0) {
      setEditable(false);
      let temp;
      temp = todos.filter((todo) => todo.id !== id);
      addTodos([...temp]);
      return;
    }
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo.todo = edit.trim();
      }
    });
    addTodos(todos);
    setEditable(false);
  };

  const escCheck = (e) => {
    if (e.key === "Escape") {
      setEdit(todoItem.todo);
      setEditable(false);
    }
  };
  return (
    <div key={todoItem.id} className="todos__container">
      <div className="todo">
        <p onClick={() => setActiveTodo(todoItem.id)}>
          {todoItem.active ? "✅" : "✔"}
        </p>
        {!editable ? (
          <p
            style={{
              width: "100%",
              fontSize: "20px",
              marginLeft: "20px",
            }}
            onDoubleClick={() => editTodo()}
            className={`${todoItem.active && "completed"} singleTodo`}>
            {todoItem.todo}
          </p>
        ) : (
          <form className="editForm" onSubmit={(e) => addTodo(e, todoItem.id)}>
            <input
              onKeyDown={(e) => escCheck(e, todoItem.todo, todoItem.id)}
              className="editFormInput"
              autoFocus
              onBlur={(e) => addTodo(e, todoItem.id)}
              value={edit}
              onChange={(e) => setEdit(e.target.value)}
            />
            <button type="submit">add</button>
          </form>
        )}
        <p className="deleteBtn" onClick={() => deleteTodo(todoItem.id)}>
          ❌
        </p>
      </div>
    </div>
  );
}
export default Row;
