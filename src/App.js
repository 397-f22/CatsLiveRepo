import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { getAuth } from "firebase/auth";
import Apartment from './components/Apartment';
import data from './temp_data/data.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";

function App() {

  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<GuestRoute element={Login} />} />
        </Routes>
      </BrowserRouter>
      {Object.entries(data).map(([key,unit]) => {
        return <Apartment data = {unit} key={key}/>
      })}
      
    </div>
  );
}

function GuestRoute({ element: Element, ...rest }) {
  const auth = getAuth();
  const user = auth.currentUser;
  return user ? <Navigate to="/home" /> : <Element />;
}

export default App;
