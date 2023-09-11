// eslint-disable-next-line no-unused-vars
import styles from "./styles.css";
import Timer from "./TImer";
import TimerView from "./TimerView";
import TodoStore from "./TodoStore";
import NewTodoForm from "./NewTodoForm";
import { TodoList } from "./TodoList";
const App = () => {
  const clock = new Timer();
  const todoMng = new TodoStore();

  setInterval(() => {
    clock.increaseTimer();
  }, 1000);
  return (
    <>
      <h1>안녕하세요 Jonathan</h1>
      <NewTodoForm todoMng={todoMng}></NewTodoForm>
      <TodoList todoMng={todoMng} todos={todoMng.todos}></TodoList>
      <TimerView timer={clock}></TimerView>
      <button className="btn" onClick={() => clock.resetTimer()}>
        리셋
      </button>
    </>
  );
};

export default App;
