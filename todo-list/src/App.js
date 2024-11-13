import React from "react";

function App() {
  const [formData, setFormData] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setFormData(e.target.value);
  };

  const addTodo = () => {
    if (formData.trim() !== '') {
      setTodos([...todos, { text: formData, completed: false }]);
    }
  };
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };
  const toggleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
      i === index ? {...todo, completed: !todo.completed } : todo
    )
    );
  };
  const editTodo = (index, newText) => {
    setTodos(
      todos.map((todo, i) => (i === index ? {...todo, text: newText } : todo))
    );
  };
 return (
  <div>
    <h1>Todo List</h1>

    <input type="text" value={formData} onChange={handleInputChange} />
    <button onClick={addTodo}> Add Todo</button>

    <ul>
      {todos.map((todo, index) => (
       <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>

        <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(index)}
        />
        {todo.text}

        <button
        onClick={() => {
          const newText = prompt('Edit Todo', todo.text);
          if (newText) editTodo(index, newText);
    
        }}
        >
          Edit
        </button>
        
       </li>
      ))}
    </ul>
  </div>
 ) 