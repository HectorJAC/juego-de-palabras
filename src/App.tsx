import React, { useState } from 'react';
import { Container, Row, Col, Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { generarPalabras } from './functions/generarPalabras';

const App: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(generarPalabras());
  const [inputValue, setInputValue] = useState("");
  const [aciertos, setAciertos] = useState(0);
  const [fallos, setFallos] = useState(0);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Verificar si la palabra u oracion ingresada es correcta
    if (inputValue.toUpperCase() === currentWord.toUpperCase() 
    ) {
      // Si es correcta, generar una nueva palabra u oracion
      setCurrentWord(generarPalabras());
      setInputValue("");
      toast.success('Palabra u oración correcta!', {autoClose: 500});
      setAciertos(aciertos + 1);
    } else {
      toast.error('Palabra u oración incorrecta, intenta de nuevo!', {autoClose: 500});
      setInputValue("");
      setFallos(fallos + 1);
    }
  };

  return (
    <div className='fondo'>
      <Container className="text-center mt-5">
        <Row className="mb-5">
          <Col>
            <h1>Aciertos</h1>
          </Col>
          <Col className="points">
            <h1>{aciertos}</h1>
          </Col>
          <Col>
            <h1>JUEGO DE PALABRA</h1>
          </Col>
          <Col>
            <h1>Fallos</h1>
          </Col>
          <Col className="points-red">
            <h1>{fallos}</h1>
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <div className="display-word">
              {currentWord}
            </div>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col>
            <Form onSubmit={handleSubmit}>
              <FormControl 
                type="text" 
                placeholder="Escribe la palabra u oración" 
                className="textarea"
                aria-label="Input para escribir la palabra"
                value={inputValue}
                onChange={handleInputChange}
                size='lg'
              />
              <Button variant="primary" type="submit" className="mt-5" size='lg'>
                Enter
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
}

export default App;
