import './App.css';
import Apartment from './components/Apartment';
import Map from './components/Map';
import data from './temp_data/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <div className="App">
      {Object.entries(data).map(([key,unit]) => {
        return <Apartment data = {unit} key={key}/>
      })}
      <Map />
    </div>
  );
}
export default App;
