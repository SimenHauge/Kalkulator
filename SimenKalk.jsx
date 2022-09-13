import React, { useState } from 'react';
import styled from 'styled-components';

const MinDiv = styled.div`
    width 400px;
    height: 625px;
    background-color: lightgrey;
    float: left;
    margin-left: 40%;
`;

const KalkScreen = styled.div`
    width: 300px;
    height: 100px;
    background-color: black;
    color: white;
    font-size: 50px;
    margin-left: 50px;
    margin-top: 25px;
    text-align: center;
`;

const Tekstboks = styled.p`
    color: white;
    font-size: 20px;
    opacity: 0.7;
    height: 35px;
`;

const Resultatboks = styled.p`
    color: white;
    font-size: 30px;
`;

const Reset = styled.button`
  background-color: grey;
  font-size: 35px;
  width: 300px;
  height: 65px;
  border: 1px, black;
  margin: 5px;
  margin-left: 50px;
`;

const MineKnapper = styled.div`
    margin-left: 45px;
    float: left; 
`;

const KnappStyled = styled.button`
    background-color: white;
    font-size: 35px;
    border: 1px, black;
    width: 65px;
    height: 65px;
    margin: 5px;
`;

const SpesKnapp = styled.button`
    background-color: grey;
    font-size: 35px;
    width: 65px;
    height: 65px;
    border: 1px, black;
    margin: 5px;
    float right;
`;

const RegneKnapper = styled.div`
    float: right;
    width: 65px;
    margin-right: 45px;
    margin-top: 25px;
    
`;

const KnappStyleWide = styled(KnappStyled)`
  width: 215px;
`;

const Utregning = styled(SpesKnapp)`
  width: 215px;
  float: left;
  margin-left: 50px;
`;

export const SimenKomp = () => {
  // logikk går her
  const [historikk, setHistorikk] = useState('');
  const [currentNumber, setCurrentNumber] = useState('');
  const [tall1, setTall1] = useState(null);
  const [tall2, setTall2] = useState(null);

  const [isFirst, setIsFirst] = useState(true);
  const [operator, setOperator] = useState(null);

  const OperatorKlikk = (operatoren) => {
    setOperator(operatoren);
    setIsFirst(false);
    setCurrentNumber('');
    setHistorikk(historikk + operatoren);
  };

  const SettVerdi = (verdi) => {
    const nyStrengVerdi = currentNumber + verdi;
    const FloatVerdi = parseFloat(nyStrengVerdi, 10);

    setHistorikk(historikk + verdi);
    setCurrentNumber(nyStrengVerdi);

    if (isFirst) {
      setTall1(FloatVerdi);
    } else {
      setTall2(FloatVerdi);
    }
  };


  const RegnUt = () => {g
    let resultat = 0;g

    // eslint-disable-next-line no-console
    console.log(`tall1: ${tall1} ${operator} tall2: ${tall2}`);

    switch (operator) {
      case ' / ':
        resultat = (tall1 / tall2);
        if (resultat % 1 !== 0) {
          resultat = resultat.toFixed(2);
        }
        break;
      case ' x ':
        resultat = tall1 * tall2;
        if (resultat % 1 !== 0) {
          resultat = resultat.toFixed(2);
        }
        break;

      case ' + ':
        resultat = tall1 + tall2;
        if (resultat % 1 !== 0) {
          resultat = parseFloat(resultat.toFixed(2));
        }
        break;
      case ' - ':
        resultat = tall1 - tall2;
        if (resultat % 1 !== 0) {
          resultat = resultat.toFixed(2);
        }
        break;
      default:
        resultat = 0;
    }

    setTall1(resultat);
    setCurrentNumber(resultat);
  };

  const resetVerdier = () => {
    setTall1(0);
    setTall2(0);
    setCurrentNumber('');
    setIsFirst(true);
    setHistorikk('');
  };

  return (
    <MinDiv>
      <KalkScreen>
        <Tekstboks>{historikk}</Tekstboks>
        <Resultatboks>{currentNumber}</Resultatboks>
      </KalkScreen>
      <Reset onClick={() => resetVerdier()}>AC</Reset>
      <MineKnapper>
        <br />
        <KnappStyled onClick={() => SettVerdi(7)}>7</KnappStyled>
        <KnappStyled onClick={() => SettVerdi(8)}>8</KnappStyled>
        <KnappStyled onClick={() => SettVerdi(9)}>9</KnappStyled>
        <br />
        <KnappStyled onClick={() => SettVerdi(4)}>4</KnappStyled>
        <KnappStyled onClick={() => SettVerdi(5)}>5</KnappStyled>
        <KnappStyled onClick={() => SettVerdi(6)}>6</KnappStyled>
        <br />
        <KnappStyled onClick={() => SettVerdi(1)}>1</KnappStyled>
        <KnappStyled onClick={() => SettVerdi(2)}>2</KnappStyled>
        <KnappStyled onClick={() => SettVerdi(3)}>3</KnappStyled>
        <br />
        <KnappStyleWide onClick={() => SettVerdi(0)}>0</KnappStyleWide>
      </MineKnapper>
      <RegneKnapper>
        <SpesKnapp onClick={() => OperatorKlikk(' / ')}>/</SpesKnapp>
        <br />
        <SpesKnapp onClick={() => OperatorKlikk(' x ')}>x</SpesKnapp>
        <br />
        <SpesKnapp onClick={() => OperatorKlikk(' + ')}>+</SpesKnapp>
        <br />
        <SpesKnapp onClick={() => OperatorKlikk(' - ')}>-</SpesKnapp>
        <br />
        <SpesKnapp onClick={() => SettVerdi('.')}>.</SpesKnapp>
      </RegneKnapper>
      <Utregning onClick={() => RegnUt()}>=</Utregning>
    </MinDiv>
  );
};
