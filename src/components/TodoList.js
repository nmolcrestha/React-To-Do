import Todo from "./Todo";

const TodoList = (props) => {
  console.log(props.todo);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {props.todos.map(todo => <Todo key={todo.id} text={todo.text}/>)}
        <Todo/>
      </ul>
    </div>
  );
};

export default TodoList;
