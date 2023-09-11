import { observer } from "mobx-react";
import StoreManager from "./Stores";

export const TodoList = observer(() => {
  const TodoStore = StoreManager.useTodoStore;

  function handleDeleteClick(id) {
    TodoStore.deleteTodo(id);
  }

  console.log(TodoStore.todos);
  return (
    <>
      <ul className="List">
        {TodoStore.todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input id={todo.id} type="checkbox" checked={todo.compeleted} onChange={(e) => TodoStore.toggleTodo(todo.id, e.checked)} />
                {todo.title}
              </label>

              <button onClick={() => handleDeleteClick(todo.id)} className="btn btn-danger">
                삭제
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
});
