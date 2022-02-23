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

  // const addTodo = (e) => {
  //   e.preventDefault();
  //   if (todo.trim().length === 0) return;
  //   setTodos([
  //     ...todos,
  //     {
  //       id: uuidv4(),
  //       todo: todo.trim(),
  //       active: false,
  //     },
  //   ]);
  //   setTodo("");
  // };
  const add = (e) => {
    addTodo(e, todo, setTodos, todos, setTodo);
  };
  const deleteTodos = (id) => {
    deleteTodo(id, todos, setTodos);
  };
  // const deleteTodo = (id) => {
  //   let temp;
  //   temp = todos.filter((todo) => todo.id !== id);
  //   setTodos(temp);
  // };

  const setActiveTodo = (id) => {
    setActive(id, todos, setCompleted, completed, setTodos);
  };
  // const setActive = (id) => {
  //   let activeTodos;
  //   activeTodos = todos.forEach((todo) => {
  //     if (todo.id === id) {
  //       todo.active = !todo.active;
  //       setCompleted(!completed);
  //     }
  //   });
  //   activeTodos = todos;
  //   setTodos(activeTodos);
  // };

  const checkAllTodos = () => {
    checkAll(checkedItems, setCheckedItems, todos, setTodos);
  };
  // const checkAll = () => {
  //   if (!checkedItems) {
  //     todos.forEach((todo) => {
  //       todo.active = true;
  //     });
  //     setCheckedItems(true);
  //     setTodos([...todos]);
  //     return;
  //   } else {
  //     todos.forEach((todo) => {
  //       todo.active = false;
  //     });
  //     setCheckedItems(false);
  //     setTodos([...todos]);
  //     return;
  //   }
  // };

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
