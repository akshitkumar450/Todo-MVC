import React from "react";

function Form({ addTodo, todo, setTodo, checkAllTodos }) {
  return (
    <form onSubmit={addTodo} className="formContainer">
      <p
        onClick={() => checkAllTodos()}
        style={{
          cursor: "pointer",
        }}>
        🔽
      </p>
      <input
        type="text"
        value={todo}
        className="formInput"
        placeholder="What need to be done"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        style={{
          display: "none",
        }}>
        Add Todo
      </button>
    </form>
  );
}

export default Form;
