import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './Effects.css';

export const FormWithCustomHook = () => {

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password : ''
    });

    const { name, email, password } = formValues;

    useEffect( () => {
        console.log('Email Cambió');
    }, [ email ]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log( formValues );
    }

  return (
    <form className= "row g-3" onSubmit={ handleSubmit }>
        <h1>FormWithCustomHook</h1>
        <hr/>

        <div className='form-group'>
        <label className="form-label">Nombre Completo: </label>
            <input
                type="text"
                name="name"
                className="form-control form-control-sm"
                placeholder="Tu Nombre..."
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange }
            />
        </div>

        <div className='form-group'>
        <label className="form-label">Email: </label>
            <input
                type="text"
                name="email"
                className="form-control form-control-sm"
                placeholder="Email@gmail.com"
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }
            />
        </div>

        <div className="form-group">
        <label className="form-label">Password: </label>
            <input
                type="password"
                name="password"
                className="form-control form-control-sm"
                placeholder="******"
                value={ password }
                onChange={ handleInputChange }
            />
        </div>
        <div className="col-auto">
            <button type='submit' className='btn btn-primary'>Guardar</button>
        </div>

        

    </form>
  )
}

