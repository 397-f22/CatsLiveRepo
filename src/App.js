import './App.css';
import Apartment from './components/Apartment';
import data from './temp_data/data.json'
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <h1><span style={{color: 'purple'}}>Cats</span><span style={{color: "gray"}}>Live</span></h1>
      <Container fluid>
        <Row>
          {Object.entries(data).map(([key,unit]) => {
            return (
              <Col>
                <Apartment data = {unit} key={key}/>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  );
}

export default App;
