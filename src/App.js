import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterToDos, setFilterToDos] = useState([]);

  useEffect(()=>filterHandler(), [status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilterToDos(todos.filter(todo=>todo.completed === true));
        break;

      case 'uncompleted':
        setFilterToDos(todos.filter(todo=>todo.completed === false));
        break;
      
      default:
        setFilterToDos(todos);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>To-Do List</h1>
      </header>
      <Form 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText} 
      inputText={inputText} 
      setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} filterToDos={filterToDos}/>
    </div>
  );
}

export default App;
