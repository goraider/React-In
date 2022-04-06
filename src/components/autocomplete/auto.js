import React, { useState, useEffect } from 'react';
import CrudService from '../../services/api.service'
import './autocomplete.css';

export const AutoComp = () => {

    const [ countries, setCountries ] = useState([]);
    const [ text, setText ] = useState('');
    const [ coincidences, setCoincidences ] = useState([]);

    useEffect( () =>{
        const loadCountries = async () => {
            const response =  await CrudService.getAll();
            setCountries(response.data);
            
        }
        loadCountries();
    },[])

    const onChangeHandler = (text) => {
        let matches = [];

        if(text.length > 0){

            matches = countries.filter( countrie => {
                
                const regex = new RegExp(`${text}`,'g');
                return countrie.match(regex);
            })

        }
        console.log('matches',matches);
        setCoincidences(matches)
        setText(text)
    }


    return (

        <div>
            <h1>Autocomplete</h1>
            <hr />
            <input
                type="text" className="col-md-12"
                onChange={ e =>onChangeHandler(e.target.value) }
                value={ text }
            />
            { coincidences && coincidences.map((coincidences, i) =>
                <div
                  className='coincidence col-md-12 justify-content-md-center'
                >
                    { coincidences }
                </div>
            )}

        </div>
    )
}



