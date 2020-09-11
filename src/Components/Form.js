import React, { useState } from 'react';
import styled from '@emotion/styled';
import { obtenerDiferenciaYear, calcularMarca, obtenerPlan } from './Helper';

const Campo = styled.div`
    display:flex;
    margin-bottom:1rem;
    align-items:center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`
const Select = styled.select`
    display:block;
    width:100%;
    padding:1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`
const Input = styled.input`
    margin: 1rem 1rem;
`;

const Boton = styled.button`
    background-color:#00838F;
    font-size:16px;
    width: 100%;
    padding:1rem;
    color:#ffff;
    text-transform: uppercase;
    font-weight: bold;
    border:none;
    transition: background-color 3s ease;
    margin-top:1.5rem;

    &:hover {
        background-color: #26C6DA;
        cursor:pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width:100%;
    text-align: center;
    margin-bottom:2rem;
`;

const Form = ({setResumen, setCargando}) => {

    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    })

    const [error, setError] = useState(false);

    //extraer valores del state 
    const { brand, year, plan } = data;

    //leer los datos del formulario y colocarlos en el state
    const obtenerInformacion = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    // Cuando el usuario presiona submit
    const cotizarSeguro = (e) => {
        e.preventDefault();
        if (brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
            return;
        }
        setError(false);

        // una base de 2000
        let resultado = 2000;

        // obtener la diferencia de años
        const diferencia = obtenerDiferenciaYear(year);

        // por cada año hay que restar el 3%
        resultado -= (diferencia * 3) * resultado / 100;

        // americano 15%
        // asiatico 5%
        // europeo 30%
        resultado = calcularMarca(brand) * resultado;
        console.log(resultado);

        // Basico aumenta 20%
        // Completo 50%
        const incrementoPlan = obtenerPlan(plan);
        resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

        // Cargando Spinner
        setCargando(true);
        setTimeout(() => {
            // elimina Spinner
            setCargando(false);
            // pasa la data al componente principal
            setResumen({
                cotizacion:resultado,
                data
            });
        }, 3000)
    }



    return (
        <form
            onSubmit={cotizarSeguro}
        >
            {error ? <Error>Todos los campos son Obligatorios</Error> : null}
            <Campo>
                <Label>Marca</Label>
                <Select
                    name='brand'
                    value={brand}
                    onChange={obtenerInformacion}
                >
                    <option value=''>-- Seleccione --</option>
                    <option value='americano'>Americano</option>
                    <option value='europeo'>Europeo</option>
                    <option value='asiatico'>Asiatico</option>
                </Select>
            </Campo>
            <Campo>
                <Label>Año</Label>
                <Select
                    name='year'
                    value={year}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Campo>
            <Label>Tipos de planes:</Label>
            <Input
                type='radio'
                name='plan'
                value='basico'
                checked={plan === 'basico'}
                onChange={obtenerInformacion}
            /> Basico
            <Input
                type='radio'
                name='plan'
                value='completo'
                checked={plan === 'completo'}
                onChange={obtenerInformacion}
            /> Completo
            <Boton type='submit'>Cotizar</Boton>
        </form>
    )
}

export default Form
