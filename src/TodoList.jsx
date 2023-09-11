import { observer } from "mobx-react";

export const TodoList = observer(({ todoMng, todos }) => {
  const handleDeleteClick = (id) => {
    if (document.getElementById(id).checked) {
      todoMng.deleteTodo(id);
    }
  };
  console.log(todoMng.todos);
  return (
    <>
      <ul className="List">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input id={todo.id} type="checkbox" checked={todo.compeleted} onChange={(e) => todoMng.toggleTodo(todo.id, e.target.value)} />
              </label>
              {todo.title}
              <button onClick={handleDeleteClick} className="btn btn-danger">
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
});
