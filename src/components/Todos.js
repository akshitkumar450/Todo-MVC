import React from "react";
import Row from "./Row";
function Todos({ activeTab, todos, setActiveTodo, deleteTodos, addTodos }) {
  return (
    <>
      {activeTab === "All" &&
        todos.map((todo) => (
          <Row
            todos={todos}
            addTodos={addTodos}
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
                addTodos={addTodos}
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
                addTodos={addTodos}
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
