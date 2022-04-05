import React, { useState, useEffect } from 'react';
import CrudService from '../../services/api.service'
import '../02-useEffect/Effects.css';

export const AutoComp = () => {

    const [ countries, setCountries ] = useState([]);
    const [ text, setText ] = useState('');
    const [ suggestions, setSuggestions ] = useState([]);

    useEffect( () =>{
        const loadCountries = async () => {
            const response =  await CrudService.getAll();
            setCountries(response.data);
            
        }
        loadCountries();
    },[])

    const onChangeHandler = (text) => {
        let matches = [];
        if(text.lenght > 0){

            matches = countries.filter( countrie => {
                const regex = new RegExp(`${text}`,"gi");
                return countrie.match(regex);
            })

        }
        console.log(countries);
        console.log("COUNCIDENCIAS", matches);
        setSuggestions(matches)
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

        </div>
    )
}



