import React, { useState } from "react";
import propTypes from 'prop-types';

import ApiService from "./services/api.service";

const CounterApp = ({ value = 10 }) => {

    const [ counter, setCounter ] = useState(value); //[]

    

    const handleAdd = () => {
        //setCounter(counter+1);
        setCounter( ()=> counter + 1 );
    }

    const handleSubstract = () => {
        setCounter( ()=> counter - 1 );
    }

    const handleReset = () => {
        setCounter( ()=> value );
    }



    const getAllCountries = () => {
        ApiService.getAll()
          .then(response => {
            console.log("aca en el response",response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>

            <button onClick={ getAllCountries }>
              Obtener all
            </button>

            {/* <button onClick={ (e) => 
                { handleAdd(e) } 
            }>+1</button> */}
        </>
    );
}

CounterApp.propTypes = {
    value: propTypes.number.isRequired
}

export default CounterApp;