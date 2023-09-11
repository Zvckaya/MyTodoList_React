import { makeAutoObservable } from "mobx";

class Timer {
  sec = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.sec += 1;
  }

  resetTimer() {
    this.sec = 0;
  }
}

export default Timer;
