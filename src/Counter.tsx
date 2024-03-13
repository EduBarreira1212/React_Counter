import { useReducer } from "react";

type State = {
    count:number;
}

type Action =  { type: 'INCREMENT' } | { type: 'DECREMENT' } | {type: 'RESET'};

const counterReducer = (state:State, action:Action) => {
    switch(action.type){
        case "DECREMENT":
            return {count: state.count --};
        case "INCREMENT":
            return {count: state.count ++};
        case "RESET":
            return {count: 0};
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, {count: 0})

    return (
        <div>
            <button className="action-button" onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
            <span id="count-span">{state.count}</span>
            <button className="action-button" onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
            <br />
            <button className="action-button" onClick={() => dispatch({type: "RESET"})}>Reset</button>
        </div>
    );
}

export default Counter;