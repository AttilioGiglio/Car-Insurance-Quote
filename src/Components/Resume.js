import React, { Fragment } from 'react'

const Resume = ({data}) => {

    // extraer datos
    const {brand,year,plan} = data;

    if(brand === '' || year === '' || plan === '') return null;

    return (
        <Fragment>
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Brand:</li>
                <li>Year:</li>
                <li>Plan:</li>
            </ul>
        </Fragment>
    )
}

export default Resume
