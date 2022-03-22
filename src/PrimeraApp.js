//import React, {Fragment} from "react";
import React from "react";
import propTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo = 'Soy un subtitulo' }) => {

    return(
        <>
            <h1>{ saludo }</h1>
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p>{ subtitulo }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: propTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: 'soy un ...'
}

export default PrimeraApp;