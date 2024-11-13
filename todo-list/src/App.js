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
  