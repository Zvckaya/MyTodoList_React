import { observer } from "mobx-react";
import { useState } from "react";
import StoreManager from "./Stores";

const NewTodoForm = observer(() => {
  const [newItem, setNewItem] = useState("");

  const TodoStore = StoreManager.useTodoStore;

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;
    TodoStore.addTodo(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">새 할일</label>
        <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} id="item"></input>
      </div>
      <button className="btn">추가</button>
    </form>
  );
});

export default NewTodoForm;
