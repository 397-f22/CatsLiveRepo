
import './App.css';
import { getAuth } from "firebase/auth";
import Apartment from './components/Apartment';
import data from './temp_data/data.json'
import Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import { useEffect, useState } from "react";
import newData from "./temp_data/newData.json";


function App() {
  const [data, setData] = useState(newData);
  const [prize, setPrize] = useState("All");
  const [bedrooms, setBedrooms] = useState("All");
  const [bathrooms, setBathrooms] = useState("All");

  const handlePrizeChange = (array) => {
    if (prize === "All") {
      return array;
    } else {
      return array.filter((e) => +prize > +e.rent);
    }
  };

  const handleBedroomsChange = (array) => {
    if (bedrooms === "All") {
      return array;
    } else {
      return array.filter((e) => +bedrooms === +e.bedrooms);
    }
  };

  const handleBathroomsChange = (array) => {
    if (bathrooms === "All") {
      return array;
    } else {
      return array.filter((e) => +bathrooms === +e.bathrooms);
    }
  };

  useEffect(() => {
    let APARTMENT = newData;
    APARTMENT = handlePrizeChange(APARTMENT);
    APARTMENT = handleBedroomsChange(APARTMENT);
    APARTMENT = handleBathroomsChange(APARTMENT);
    setData(APARTMENT);
  }, [prize, bedrooms, bathrooms]);
  return (
    <div className="App">
      <label className="text-xl font-semibold" htmlFor="team">
        Prize:
      </label>
      <select
        className="border border-[#E0E0E0] rounded-md bg-white w-52 px-2 py-1"
        id="team"
        name="team"
        value={prize}
        onChange={(e) => setPrize(e.target.value)}
      >
        <option value="All">All</option>
        <option value="250">Under 250</option>
        <option value="500">Under 500</option>
        <option value="1000">Under 1000</option>
        <option value="2000">Under 2000</option>
      </select>

      <label className="text-xl font-semibold" htmlFor="team">
        Bedrooms:
      </label>
      <select
        className="border border-[#E0E0E0] rounded-md bg-white w-52 px-2 py-1"
        id="team"
        name="team"
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
      >
        <option value="All">All</option>
        <option value="1"> 1</option>
        <option value="2"> 2</option>
        <option value="3"> 3</option>
        <option value="4"> 4</option>
      </select>

      <label className="text-xl font-semibold" htmlFor="team">
        Bathrooms:
      </label>
      <select
        className="border border-[#E0E0E0] rounded-md bg-white w-52 px-2 py-1"
        id="team"
        name="team"
        value={bathrooms}
        onChange={(e) => setBathrooms(e.target.value)}
      >
        <option value="All">All</option>

        <option value="1"> 1</option>
        <option value="2"> 2</option>
        <option value="3"> 3</option>
        <option value="4"> 4</option>
      </select>

      {data.map((app, index) => (
        <Apartment data={app} key={index} />
      ))}

      {/* {Object.entries(data).map(([key, unit]) => {
        return <Apartment data={unit} key={key} />;
      })} */}
      <h1><span style={{color: 'purple'}}>Cats</span><span style={{color: "gray"}}>Live</span></h1>
      <Login/>
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
