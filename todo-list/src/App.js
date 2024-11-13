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
  