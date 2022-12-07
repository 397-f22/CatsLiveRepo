import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import LeafletGeocoder from "./LeatletGeocoder";

const MapMarker = ({address, coords}) => (
    <Marker key={coords.join(",")} position={coords}>
        <Popup>{address}</Popup>
    </Marker>
)

export default MapMarker;