import { useState } from  'react';
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([])

  return (
    <div>
      <TodoList todos={todos} />
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Complete</button>
      <div>0 left to do</div>
    </div>
  );
}

export default App;
