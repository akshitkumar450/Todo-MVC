import React from "react";
import Row from "./Row";
function Todos({ activeTab, todos, setTodos, setActiveTodo, deleteTodos }) {
  return (
    <>
      {activeTab === "All" &&
        todos.map((todo) => (
          <Row
            todos={todos}
            setTodos={setTodos}
            key={todo.id}
            todo={todo}
            setActiveTodo={setActiveTodo}
            deleteTodo={deleteTodos}
          />
        ))}

      {activeTab === "Completed" &&
        todos.map(
          (todo) =>
            todo.active === true && (
              <Row
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
                todo={todo}
                setActiveTodo={setActiveTodo}
                deleteTodo={deleteTodos}
              />
            )
        )}

      {activeTab === "Active" &&
        todos.map(
          (todo) =>
            todo.active === false && (
              <Row
                key={todo.id}
                todo={todo}
                setTodos={setTodos}
                todos={todos}
                setActiveTodo={setActiveTodo}
                deleteTodo={deleteTodos}
              />
            )
        )}
    </>
  );
}

export default Todos;
