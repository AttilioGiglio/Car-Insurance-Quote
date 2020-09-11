import React, {useState} from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import styled from '@emotion/styled';
import Resume from './Components/Resume';
import Result from './Components/Result';

const Contenedor = styled.div `
  max-width:600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div `
  background-color: #fff;
  padding:3rem;
`;

function App() {
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    data: {
      brand:'',
      year:'',
      plan:''
  }}); 

// Extraer data
  const {data, cotizacion} = resumen;

  return (
    <Contenedor>
   <Header 
   titulo='Cotizador de seguros'
   />
   <ContenedorFormulario>
    <Form 
    setResumen={setResumen}
    />
    <Resume 
    data={data}
    />
    <Result 
    cotizacion={cotizacion}
    />
   </ContenedorFormulario>
   </Contenedor>
  );
}

export default App;
