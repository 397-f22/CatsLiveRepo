import logo from './logo.svg';
import './App.css';
import { getAuth } from "firebase/auth";
import Apartment from './components/Apartment';
import data from './temp_data/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";

function App() {

  return (
    <div className="App">
      <Login/>
      {Object.entries(data).map(([key,unit]) => {
        return <Apartment data = {unit} key={key}/>
      })}
      
    </div>
  );
}




export default App;
