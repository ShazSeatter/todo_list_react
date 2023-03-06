import './App.css';
import React, {useState} from 'react'; 



function App() {

  const [todos, setTodos] = useState([
    {name: "Buy shopping", priority: "high"},
    {name: "Clean bathroom", priority: "low"},
    {name: "Car's MOT", priority: "high"},
  ])

  const [newTodoName, setNewTodoName] = useState(''); 
  const [value, setValue] = useState('')

  function handleInputChange(event) {
    setNewTodoName(event.target.value)
  }

  function handleRadioChange (event) {
    setValue(event.target.value); 
  }

  function saveNewTodo (event) {
    event.preventDefault(); 

    const newTodo = {
      name: newTodoName,
      priority: value,
    }
    
    const newTodoList = [...todos, newTodo]

    setTodos(newTodoList);
    setNewTodoName('');
  }


  const todoNodes = todos.map((todo, index) => 
   ( <li key={index}>

    {todo.priority === "high" ? <span className='high'>{todo.name}</span> : <span className='low'>{todo.name}</span>}

    </li>
  ));


  return (
    <div className="App">
      <h1>ToDo's</h1>
      <form onSubmit={saveNewTodo}>
        <label htmlFor="todo-name">Add New Todo:</label>
        <input id="todo-name" type="text" value={newTodoName}onChange={handleInputChange}/>
        High<input type="radio" value="high" checked={value === "high"} onChange={handleRadioChange}/> 
        Low<input type="radio" value="low" checked={value === "low"} onChange={handleRadioChange}/> 
        <input type="submit" value="Save Item"/>
      </form>
      <ul>
        {todoNodes}
      </ul>
    </div>
  );
}


export default App;
