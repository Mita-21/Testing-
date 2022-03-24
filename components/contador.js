import React, {useState} from 'react';
import {Card, Button} from 'semantic-ui-react';
import Botonmás from './botonmás'
import Botonmenos from './botonmenos'


function Contador() {
const [contador, setContador] = useState(0);

const decrement = () =>
  setContador(contador - 1);
 
const increment = () =>
  setContador(contador + 1); 

    return (
      <div>
        <h1>Hello React World</h1>
        <Card>
          <Card.Content>
            <Card.Header>Contador</Card.Header>
            <Card.Meta>{contador}</Card.Meta>
            <Card.Description>Presiona - ó + para modificar</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green" onClick={decrement}>
                -
              </Button>
              <Button basic color="red" onClick={increment}>
                +
              </Button>
            </div>
          </Card.Content>
          <Card.Content>
            <div>
              <Botonmás increment={increment} />
            </div>
            <div>
              <Botonmenos decrement={decrement} />
            </div>
          </Card.Content>
        </Card>
      </div>
    );
   }

export default Contador;



