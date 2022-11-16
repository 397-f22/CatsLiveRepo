import logo from './logo.svg';
import './App.css';
import Apartment from './components/Apartment';
import data from './temp_data/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      {Object.entries(data).map(([key,unit]) => {
        return <Apartment data = {unit} key={key}/>
      })}
      
    </div>
  );
}

export default App;
