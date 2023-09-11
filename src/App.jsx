// eslint-disable-next-line no-unused-vars
import styles from "./styles.css";
import NewTodoForm from "./NewTodoForm";
import { TodoList } from "./TodoList";

const App = () => {
  return (
    <>
      <h1>안녕하세요 Jonathan</h1>
      <NewTodoForm></NewTodoForm>
      <TodoList></TodoList>
      {/* <TimerView timer={clock}></TimerView>
      <button className="btn" onClick={() => clock.resetTimer()}>
        리셋
      </button> */}
    </>
  );
};

export default App;
