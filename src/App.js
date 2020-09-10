import React from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import styled from '@emotion/styled';


const Contenedor = styled.div `
  max-width:600px;
  margin: 0 auto;
`;

const ContenedorFormulario = styled.div `
  background-color: #fff;
  padding:3rem;
`;

function App() {
  return (
    <Contenedor>
   <Header 
   titulo='Cotizador de seguros'
   />
   <ContenedorFormulario>
    <Form />
   </ContenedorFormulario>
   </Contenedor>
  );
}

export default App;
