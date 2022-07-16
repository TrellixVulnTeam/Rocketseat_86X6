import { useState } from 'react';

// Sempre que uma fuunção do React iniciar seu nome com use . a chamamos de Hook

export function Counter (){
    // Utilizaremos o conceito de desestructuring. Ou seja, receberemos um array de retorno de useState, e iremos separar as uinformações em duas variáveis  
    const [counter,setCounter] = useState(0);
    function increment(){
       setCounter(counter+1);
    }

    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    );
}