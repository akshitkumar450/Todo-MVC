import React from "react";
import Tab from "./Tab";

function BottomTabs({ todos, activeTab, setActiveTab, setTodos }) {
  let items = 0;
  todos.forEach((todo) => todo.active === true && items++);

  const clear = () => {
    let clearedTodos;
    clearedTodos = todos.filter((todo) => todo.active !== true);
    items = 0;
    setTodos([...clearedTodos]);
  };

  let total = 0;
  todos.forEach((todo) => todo.active === false && total++);
  return (
    <div className="todos__bottom">
      <p>{total} items left</p>
      {tabs.map((tab, idx) => (
        <Tab
          key={idx}
          tab={tab}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
      {items > 0 && <p onClick={() => clear()}>clear completed</p>}
    </div>
  );
}

export default BottomTabs;
const tabs = ["All", "Active", "Completed"];
