import { useState, useRef } from  'react';
import { TodoList } from "./components/TodoList";
import uuidv4 from 'uuid/v4';

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef();

  function handleAddTodo() {
    const name = todoNameRef.current.value;
    if (name === '') return;
    todoNameRef.current.value = null;
    setTodos(prevTodo => {
      return [...prevTodo, {id: uuidv4(), name: name, complete: false}]
    });
  }

  return (
    <div>
      <TodoList todos={todos} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do</div>
    </div>
  );
}

export default App;
