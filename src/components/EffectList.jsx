import { useEffect, useState } from "react";

const EffectList = () => {
    const [listNames, setListNames] = useState([
        ['Банан', 5],
        ['Яблоко', 10],
        ['Киви', 13],
        ['Огурец', 17],
        ['Арбуз', 6],
    ]);

    const [kiwiCount, setKiwiCount] = useState(13);

    const handleCounter = (action) => {
        setKiwiCount(currentCount => action === 'up' ? currentCount + 1 : currentCount - 1);
    };

    useEffect(() => {
        setListNames(prevList => {
            const newList = [...prevList];
            const kiwiIndex = newList.findIndex(fruit => fruit[0] === 'Киви');
            if (kiwiIndex !== -1) {
                newList[kiwiIndex] = ['Киви', kiwiCount];
            }
            return newList.sort((a, b) => b[1] - a[1]);
        });
    }, [kiwiCount]);

    return (
        <div>
            <ul className='effect-list'>
                <span>Автоматическая сортировка списка (target item -> Киви)</span>
                {listNames.map((fruit, index) => (
                    <li key={index}>{index + 1}) {fruit[0]}&emsp; &mdash; &emsp;{fruit[1]} шт</li>
                ))}
            </ul>
            <div className="btn-menu">
                <button className="btn" onClick={() => handleCounter('up')}>Добавить +1</button>
                <button className="btn" onClick={() => handleCounter('down')}>Отнять -1</button>
            </div>
        </div>
    );
};

export default EffectList;
