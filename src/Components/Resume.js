import React from 'react';
import styled from '@emotion/styled';
import {primeraLetraMayuscula} from './Helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align:center;
    background-color: #00838F;
    color: #fff;
    margin-top: 1rem;
`;

const Resume = ({ data }) => {

    // extraer datos
    const { brand, year, plan } = data;

    if (brand === '' || year === '' || plan === '') return null;

    return (
        <ContenedorResumen>
            <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Brand: {primeraLetraMayuscula(brand)}</li>
                <li>Year: {year}</li>
                <li>Plan: {primeraLetraMayuscula(plan)}</li>
            </ul>
        </ContenedorResumen>
    )
}

export default Resume
