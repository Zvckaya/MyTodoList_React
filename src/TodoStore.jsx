import { makeAutoObservable } from "mobx";

class TodoStore {
  todos = [{ id: "qqwe12313", title: "코딩하기", compeleted: false }];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(title) {
    this.todos.push({ id: crypto.randomUUID(), title, completed: false });
  }

  toggleTodo(id, compeleted) {
    const todo = this.todos.find((todo) => todo.id === id);
    if (todo) {
      todo.compeleted = compeleted;
    }
  }

  deleteTodo(id) {
    this.todos.filter((todo) => todo.id !== id);
  }
}

export default TodoStore;
