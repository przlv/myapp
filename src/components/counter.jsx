import { useState } from "react"
import './style.css'

const Counter = () => {
    const [count,  setCount] = useState(0);

    const handleCounter = (state) => {
        if (state === "up") {
            setCount(count + 1);
        }
        else {
            setCount(count - 1);
        }
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <div className="counter">
            <span className="count-text">
                {count}
            </span>
            <div className="btn-menu">
                <button className="btn" onClick={() => handleCounter('up')}>Добавить +1</button>
                <button className="btn" onClick={() => handleCounter('down')}>Отнять -1</button>
                <button className="btn" onClick={handleReset}>Сбросить</button>
            </div>
        </div>
    )
}

export default Counter;
