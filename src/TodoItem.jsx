export function TodoItem({ compeleted, id, title, toggleTodo, deleteTodo }) {
  const handleDeleteClick = () => {
    if (document.getElementById(id).checked) {
      deleteTodo(id);
    }
  };
  return (
    <li key={id}>
      <label>
        <input id={id} type="checkbox" checked={compeleted} onChange={(e) => toggleTodo(id, e.target.value)} /> {title}
      </label>
      <button onClick={handleDeleteClick} className="btn btn-danger">
        삭제
      </button>
    </li>
  );
}
