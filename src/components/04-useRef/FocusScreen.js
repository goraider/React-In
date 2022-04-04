import React, { useRef } from 'react'
import '../02-useEffect/Effects.css';

export const FocusScreen = () => {

    const inputRef = useRef();
    console.log(inputRef);

    const handleClick = () => {
        inputRef.current.select();
        //document.querySelector('input').select();
    }
  
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input
            ref={ inputRef }
            className='form-control'
            placeholder='Su Nombre...'
            >
            </input>

            <button 
                className='btn btn-outline-primary mt-5'
                onClick={ handleClick }    
            >
                Focus Mee
            </button>
        </div>
  )

}
