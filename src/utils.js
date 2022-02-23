import { v4 as uuidv4 } from "uuid";

export const addTodo = (e, todo, addTodos, todos, handleChangeTodo) => {
  e.preventDefault();
  if (todo.trim().length === 0) return;
  addTodos([
    ...todos,
    {
      id: uuidv4(),
      todo: todo.trim(),
      active: false,
    },
  ]);
  handleChangeTodo("");
};

export const deleteTodo = (id, todos, addTodos) => {
  let temp;
  temp = todos.filter((todo) => todo.id !== id);
  addTodos(temp);
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

export const checkAll = (checkedItems, setCheckedItems, todos, addTodos) => {
  if (!checkedItems) {
    todos.forEach((todo) => {
      todo.active = true;
    });
    setCheckedItems(true);
    addTodos([...todos]);
    return;
  } else {
    todos.forEach((todo) => {
      todo.active = false;
    });
    setCheckedItems(false);
    addTodos([...todos]);
    return;
  }
};
