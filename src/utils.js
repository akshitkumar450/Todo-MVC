import { v4 as uuidv4 } from "uuid";

export const addTodo = (e, todo, setTodos, todos, setTodo) => {
  e.preventDefault();
  if (todo.trim().length === 0) return;
  setTodos([
    ...todos,
    {
      id: uuidv4(),
      todo: todo.trim(),
      active: false,
    },
  ]);
  setTodo("");
};

export const deleteTodo = (id, todos, setTodos) => {
  let temp;
  temp = todos.filter((todo) => todo.id !== id);
  setTodos(temp);
};

export const setActive = (id, todos, setCompleted, completed, setTodos) => {
  let activeTodos;
  activeTodos = todos.forEach((todo) => {
    if (todo.id === id) {
      todo.active = !todo.active;
      setCompleted(!completed);
    }
  });
  activeTodos = todos;
  setTodos(activeTodos);
};

export const checkAll = (checkedItems, setCheckedItems, todos, setTodos) => {
  if (!checkedItems) {
    todos.forEach((todo) => {
      todo.active = true;
    });
    setCheckedItems(true);
    setTodos([...todos]);
    return;
  } else {
    todos.forEach((todo) => {
      todo.active = false;
    });
    setCheckedItems(false);
    setTodos([...todos]);
    return;
  }
};
