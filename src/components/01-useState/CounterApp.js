import React, { useState } from 'react'
import './Counter.css'

export const CounterApp = () => {

    const [ state , setState] = useState({

        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,

    });

    const { counter1, counter2 } = state;
    // const Counter10 = () => {
    //     //setCounter(counter+1);
    //     setState({

    //         ...state,
    //         counter1: counter1 + 10

    //     });
    // }

    // const Counter20 = () => {
    //     //setCounter(counter+1);
    //     setState({

    //         ...state,
    //         counter2: counter2 + 20,

    //     });
    // }

    //console.log(counter);

  return (
    <>
    <h1>
        Counter1 { counter1 },
    </h1>
    <h1>
        Counter2 { counter2 }
    </h1>

    <button className='btn btn-primary'
    onClick={
        () => {
            //setCounter(counter + 1);
            setState({
                ...state,
                counter1: counter1 + 10
            });
        }
    }>
        +1
    </button>

    {/* <button onClick={ Counter10 }>+10</button>
    <button onClick={ Counter20 }>+20</button> */}

    </>
  )
}

export default CounterApp;
