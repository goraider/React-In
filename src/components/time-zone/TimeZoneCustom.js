import React, { useState, useEffect } from 'react';
import CrudService from '../../services/api.service';
import moment from 'moment-timezone';
import './TimeZoneStyle.css';

export const TimeZoneCustom = () => {

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

    const inputToUppercase = e => {

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

    const removeCountryListHandler = (i) => {

        let country = [...timeZone];
        console.log(country);

        
        if (i !== -1) {
          country.splice(i, 1);
          setTimeZone(country);
        }

    }

    const timeZoneFormatHandler = (datetime, timezone) => {

        let time = moment(datetime).tz(timezone).format("h:mm:ss a");

        return time;

    };

    const dateZoneFormatHandler = (datetime, timezone) => {
        
        let date = moment(datetime).tz(timezone).format("ddd, MMMM Do YYYY");

        return date;
    }



    return (

        <React.StrictMode>

        <div>
            <h1>WorldtimeLite</h1>
            <hr />
            <div className="row">
                <div className="col-4">
                    <input
                        type="text" className="col-4 form-control form-rounded input-search"
                        placeholder="Find country - Press keyboard letter..."
                        onChange={ e => onChangeHandler(e.target.value) }
                        onKeyPress={ inputToUppercase }
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
                onClick={ () => onCoincidenceHandler(coincidences) }>
                    { coincidences }
                </div>
            )}

            <hr />

            {
                timeZone && timeZone.map( (items, i) =>(

                        <div key={i} className='card card-stile' >

                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-1">

                                            <button type="button" className="btn btn-light"

                                                onClick={() => removeCountryListHandler(i) }
                                            >
                                                <i className="fa-solid fa-trash"></i>
                                            </button>

                                        </div>
                                        <div className="col-6">
                                            <h5 className="card-title">{ items.timezone }</h5>
                                            <h6 className='card-subtitle text-muted'> {  timeZoneFormatHandler(items.datetime, items.timezone) } { items.abbreviation }</h6>
                                            <p className='card-text'>
                                               { dateZoneFormatHandler(items.datetime, items.timezone) } 
                                            </p>
                                        </div>
                                        {/* <div class="col-1">

                                        </div> */}
                                        {/* <div className="col-2">

                                        </div> */}
                                    </div>
                                </div>
                        </div>



                    // console.log('test', items);
                    // return <li key={i}>{items.timezone}</li>
                ))
            }



            {/* { JSON.stringify(timeZone) } */}



        </div>
        </React.StrictMode>
    )
}



