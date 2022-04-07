import React, {useState} from "react";

function Counter() {
    // const numberState = useState(0);
    // const number = numberState[0];
    // const setNumber = numberState[1];

    const [ number, setNumber ] = useState(0);

    const onIncrease = () => {
        // setNumber(number + 1)
        setNumber(prevNumber => prevNumber + 1)  // 다음 업데이트할 값을 넣어주는 대신 
                                                // 업데이트 함수를 넣어줄수도 있다. 리액트 컴포넌트를 최적화할 때 사용
    }

    const onDecrease = () => {
        setNumber(number - 1)
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;