import React, { useEffect, useState } from 'react';
import { Message } from './Message';
import './Effects.css';

export const SimpleForm = () => {

    const [ formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () =>{
        //console.log('hey!!');
    }, []);

    useEffect( () =>{
        //console.log('el formState Cambio!');
    }, [formState]);

    useEffect( () =>{
        //console.log('email Cambio!');
    }, [email]);

    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [ target.name ] : target.value

        })
        // console.log(target.name);
        // console.log(target.value);
    };

  return (
    <>
    <h1>useEffect</h1>
    <hr/>

    <div className='form-group'>
        <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Tu Nombre"
            autoComplete="off"
            value={ name }
            onChange={ handleInputChange }
        />
    </div>

    <div className='form-group'>
        <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Email@gmail.com"
            autoComplete="off"
            value={ email }
            onChange={ handleInputChange }
        />
    </div>

    { (name === '123') && <Message /> }

    </>
  )
}
