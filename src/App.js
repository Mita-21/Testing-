import { Container, Segment } from 'semantic-ui-react';
import Contador from './components/contador';
import './App.css';

function App() {
  return (
    <Container>
      <Segment basic>
         <Contador/>
      </Segment>
    </Container>
  );
}

export default App;
