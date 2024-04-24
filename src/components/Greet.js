import React, {useState} from "react";

const Greet = (props) => {
    const [count, setCount] = useState(0);
    const {name} = props;

    const increment = () => setCount(count + 1)

    return <div>
        <h1>Welcome {name}</h1>
        <button onClick={increment}>Counter: {count}</button>
    </div>
}

export default Greet;
