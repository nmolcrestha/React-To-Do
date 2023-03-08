const Form = (props) => {

  const inputTextHandler = e => {
    props.setInputText(e.target.value);
  }

  const submitHandler = e => {
    e.preventDefault();
    props.setTodos([
      ...props.todos, 
      {text: props.inputText, completed: false, id:Math.random()*1000}
    ]);
    props.setInputText("");
  }

  return (
    <form>
      <input type="text" className="todo-input" onChange={inputTextHandler} value={props.inputText}/>
      <button className="todo-button" type="submit" onClick={submitHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
