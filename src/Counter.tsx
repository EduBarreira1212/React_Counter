import { useReducer } from "react";

type State = {
    count:number;
}

type Action =  { type: 'INCREMENT' } | { type: 'DECREMENT' }

const counterReducer = (state:State, action:Action) => {
    switch(action.type){
        case "DECREMENT":
            return {count: state.count --};
        case "INCREMENT":
            return {count: state.count ++};
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, {count: 0})

    return (
        <div>
            <button onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
            <span id="count-span">{state.count}</span>
            <button onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
        </div>
    );
}

export default Counter;