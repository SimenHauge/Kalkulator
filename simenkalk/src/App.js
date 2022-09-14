import { SimenKomp } from './SimenKalk';
import React, { useState } from 'react';
import styled from 'styled-components';


const MinHeader = styled.h1`
  font-size: 50px;
  text-align: center;
  margin: 20px;
`


function App() {
  return (
    <main>
      <MinHeader>Simens kalkulator</MinHeader>
      <SimenKomp />
    </main>
    )
  }

export default App;
