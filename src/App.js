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

  // callback for setting the state
  const handleChangeTodo = (todo) => {
    setTodo(todo);
  };
  const addTodos = (newTodos) => {
    setTodos(newTodos);
  };
  const selectActive = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  // const changeTodo(changeParam, value) {
  //   if(changeParam==='todo') {
  //     setTodo(value)
  //   } else if(changeParam==='newtodo') {
  //     setTodos(value);
  //   }
  // }

  // utils function
  const add = (e) => {
    addTodo(e, todo, addTodos, todos, handleChangeTodo);
  };

  const deleteTodos = (id) => {
    deleteTodo(id, todos, addTodos);
  };

  const setActiveTodo = (id) => {
    setActive(id, todos, setCompleted, completed, setTodos);
  };

  const checkAllTodos = () => {
    checkAll(checkedItems, setCheckedItems, todos, addTodos);
  };

  return (
    <>
      <h1>todos</h1>
      <div className="todos">
        <Form
          addTodo={add}
          todo={todo}
          handleChangeTodo={handleChangeTodo}
          checkAllTodos={checkAllTodos}
        />

        <Todos
          activeTab={activeTab}
          todos={todos}
          deleteTodos={deleteTodos}
          setActiveTodo={setActiveTodo}
          addTodos={addTodos}
        />

        <BottomTabs
          todos={todos}
          activeTab={activeTab}
          selectActive={selectActive}
          addTodos={addTodos}
        />
      </div>
    </>
  );
}

export default App;
