import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AptModal from "./AptModal";

const Apartment = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          height: "20rem",
          float: "left",
          margin: "10px",
        }}
      >
        <div style={{ width: "100%", height: "230px" }}>
          <Card.Img
            variant="top"
            src={data.img}
            style={{ width: "100%", height: "200px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            <div style={{ display: "inline-block", float: "left" }}>
              ${data.rent} | {data.bedrooms}bd | {data.bathrooms}ba |{" "}
              {data.dimensions} |
            </div>
          </Card.Text>
          <AptModal data={data} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Apartment;
