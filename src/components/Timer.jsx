import React, { useState, useEffect, useRef } from 'react';
import './style.css'

function Watch() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef();

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    const handleReset = () => {
        setTime(0);
        setIsRunning(false);
    };

    return (
        <div>
            <h1 style={{fontSize: '72px'}}>{time} сек.</h1>
            <div className="btn-menu">
                <button className="btn" onClick={handleStart}>Старт</button>
                <button className="btn" onClick={handleStop}>Стоп</button>
                <button className="btn" onClick={handleReset}>Сброс</button>
            </div>
        </div>
    );
}

export default Watch;
