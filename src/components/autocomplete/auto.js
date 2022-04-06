import React, { useState, useEffect } from 'react';
import CrudService from '../../services/api.service'
import './autocomplete.css';

export const AutoComp = () => {

    const [ countries, setCountries ] = useState([]);
    const [ text, setText ] = useState('');
    const [ timeZone, setTimeZone ] = useState([]);
    const [ coincidences, setCoincidences ] = useState([]);

    useEffect( () =>{
        const loadCountries = async () => {
            const response =  await CrudService.getAllCountries();
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

        setCoincidences(matches)
        setText(text)
    }

    const toInputUppercase = e => {
        
        e.target.value = ("" + e.target.value).charAt(0).toUpperCase() + e.target.value.substr(1);
    };
    
    const onCoincidenceHandler = (text) => {

        setText(text);
        setCoincidences([]);
        getTimeZoneHandler(text);
    }

    const getTimeZoneHandler = (text) => {

        const loadTimeZoneCountrie = async () => {

            const timeZoneCountrie =  await CrudService.getTimeZoneCountrie(text);

            setTimeZone([
                ...timeZone,
                timeZoneCountrie.data
            ])
            console.log("xxxx", timeZone);
            
        }
        loadTimeZoneCountrie();
    }


    return (

        <div>
            <h1>WorldtimeLite</h1>
            <hr />

            <div className="row">
                <div className="col-4">
                    <input
                        type="text" className="col-4 form-control form-rounded input-search "
                        placeholder="Find country - Press keyboard letter..."
                        onChange={ e =>onChangeHandler(e.target.value) }
                        onKeyPress={ toInputUppercase }
                        value={ text }
                        onBlur={()=>{
                            setTimeout(() => {
                                setCoincidences([])
                            }, 100);
                        }}
                    />
                </div>
                
            </div>


            { coincidences && coincidences.map((coincidences, i) =>
                <div key={i} className='coincidence border-0'
                onClick={() => onCoincidenceHandler(coincidences) }>
                    { coincidences }
                </div>
            )}

            <hr />

            {   
                timeZone && timeZone.map( (items, i) =>(

                        <div  key={i} className='card card-stile' >

                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-1">
                                            <i class="fa-solid fa-trash"></i>
                                        </div>
                                        <div class="col-6">
                                            <h5 className="card-title">{ items.timezone }</h5>
                                            <h6 className='card-subtitle text-muted'>{ items.abbreviation }</h6>
                                            <p className='card-text'>{ items.datetime }</p>
                                        </div>
                                        {/* <div class="col-1">
                                            
                                        </div> */}
                                        <div class="col-2">
                                            
                                        </div>
                                    </div>
                                </div>
                        </div>

                        

                    // console.log('test', items);
                    // return <li key={i}>{items.timezone}</li>
                ))
            }



            { JSON.stringify(timeZone) }



        </div>
    )
}



