import { makeAutoObservable } from "mobx";

class TodoStore {
  // static _Instance;

  // static get Instance() {
  //   if (TodoStore._Instance == null) {
  //     TodoStore._Instance = new TodoStore();
  //   }
  //   return TodoStore._Instance;
  // }

  todos = [{ id: "qqwe12313", title: "코딩하기", compeleted: false }];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(title) {
    this.todos.push({ id: crypto.randomUUID(), title, completed: false });
  }

  toggleTodo(id) {
    const todo = this.todos.find((todo) => todo.id === id);

    if (todo) {
      todo.compeleted = !todo.compeleted;
    }
  }

  deleteTodo(id) {
    console.log("삭제시도");
    this.todos = this.todos.filter((todo) => todo.id !== id);
    console.log(this.todos, id);
  }
}

export default TodoStore;
