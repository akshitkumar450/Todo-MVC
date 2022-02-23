import { useState } from "react";
import "./App.css";
import BottomTabs from "./components/BottomTabs";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { addTodo, checkAll, deleteTodo, setActive } from "./utils";
function App() {
  const [activeTab, setActiveTab] = useState("All");
  const [todo, setTodo] = useState("");
  const [completed, setCompleted] = useState(false);
  const [todos, setTodos] = useState([]);
  const [checkedItems, setCheckedItems] = useState(false);

  const add = (e) => {
    addTodo(e, todo, setTodos, todos, setTodo);
  };

  const deleteTodos = (id) => {
    deleteTodo(id, todos, setTodos);
  };

  const setActiveTodo = (id) => {
    setActive(id, todos, setCompleted, completed, setTodos);
  };

  const checkAllTodos = () => {
    checkAll(checkedItems, setCheckedItems, todos, setTodos);
  };

  return (
    <>
      <h1>todos</h1>
      <div className="todos">
        <Form
          addTodo={add}
          todo={todo}
          setTodo={setTodo}
          checkAllTodos={checkAllTodos}
        />

        <Todos
          activeTab={activeTab}
          todos={todos}
          setTodos={setTodos}
          setActiveTodo={setActiveTodo}
          deleteTodos={deleteTodos}
        />

        <BottomTabs
          todos={todos}
          activeTab={activeTab}
          setTodos={setTodos}
          setActiveTab={setActiveTab}
        />
      </div>
    </>
  );
}

export default App;
