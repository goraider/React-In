import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/Effects.css';

export const MultipleCustomHooks = () => {

   const { counter, increment } = useCounter(1);
   const { loading, data } =  useFetch (`https://www.breakingbadapi.com/api/quotes/${ counter }`);
   
   const { author, quote  } = !!data && data[0];


   console.log(author, quote);
   console.log(data);




  return (
    <div>
        <h1>
            BreakingBad Quotes
        </h1>
        <hr/>

        {
            loading
            ?
            (
                <div className="alert alert-info text-center">
                    Loading...
                </div>
            )
            :
            (

                <blockquote className="text-right" >
                    <p className="mb-0">{ author }</p>
                    <footer className="blockquote-footer"> { quote } </footer>
                </blockquote>

            )
        }

        <button 
            className='btn btn-primary'
            onClick={ increment }
        >
            Siguiente Quote
        </button>


    </div>
  )
}
