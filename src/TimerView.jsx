import { observer } from "mobx-react";

const TimerView = observer(({ timer }) => <h1>{timer.sec}</h1>);

export default TimerView;
