import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {
          props.filterToDos.map(todo => 
          <Todo setTodos={props.setTodos} key={todo.id} todo={todo} text={todo.text} todos={props.todos}/>)
        }
      </ul>
    </div>
  );
};

export default TodoList;
