export function TodoItem({ compeleted, id, title, toggleTodo, deleteTodo }) {
  return (
    <li key={id}>
      <label>
        <input type="checkbox" checked={compeleted} onChange={(e) => toggleTodo(id, e.target.value)} /> {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        삭제
      </button>
    </li>
  );
}
