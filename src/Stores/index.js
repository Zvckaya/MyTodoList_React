import TodoStore from "./TodoStore";

class _StoreManager {
  static _Instance;
  static get Instance() {
    if (_StoreManager._Instance == null) {
      _StoreManager._Instance = new _StoreManager();
    }
    return _StoreManager._Instance;
  }

  get useTodoStore() {
    return this.TodoFor;
  }

  TodoFor = new TodoStore();
}

const StoreManager = _StoreManager.Instance;
export default StoreManager;
