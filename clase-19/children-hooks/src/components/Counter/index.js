import { useState } from 'react';

function Counter() {
    const [ number, setNumber ] = useState(0);
    const [ backgroundColor, setBackgroundColor ] = useState('green');
    
    return (
        <>
            <h2>{number}</h2>
            <button onClick={() => setNumber(prev => prev + 1)}>SUMAR 1</button>
            <button onClick={() => setNumber(prev => prev - 1)}>RESTAR 1</button>
            <button onClick={() => setNumber(0)}>REINICIAR</button>
            <button onClick={() => setNumber(27)}>FALOPA</button>
            <button style={{ backgroundColor: backgroundColor, height: 100 }} onClick={() => setBackgroundColor('blue')}>BACKGROUND COLOR!</button>
        </>
    )
}

export default Counter;