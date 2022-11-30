import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import LeafletGeocoder from './LeatletGeocoder';

const Map = () => {
    return (
        <div style = {{top: "60 px"}}>
            <MapContainer center={[42.05, -87.67]} zoom={12} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[42.05673940074193,-87.68665687697604]}>
                {/* <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup> */}
                </Marker>
                <Marker position={[42.02844775,-87.66930366776066]}> </Marker>
                <Marker position={[42.0536655770962,-87.70313200506638]}> </Marker>
                <Marker position={[42.04010718506308,-87.68823369237123]}> </Marker>
                <Marker position={[42.0589676,-87.6853594]}> </Marker>
                <Marker position={[42.0597594,-87.6830651]}> </Marker>
                <Marker position={[42.0575266,-87.6857011]}> </Marker>
                <Marker position={[42.0573778,-87.6858007]}> </Marker>
                <Marker position={[42.056636,-87.6862901]}> </Marker>
                <Marker position={[42.0565568,-87.6859068]}> </Marker>
                <Marker position={[42.0552875,-87.6826479]}> </Marker>
                <Marker position={[42.055433,-87.680769]}> </Marker>
                <Marker position={[42.053538450000005,-87.68204800399621]}> </Marker>
                <Marker position={[42.0531711,-87.68787230559356]}> </Marker>
                <Marker position={[42.049579800000004,-87.68812666820261]}> </Marker>
                <Marker position={[42.048113,-87.678377]}> </Marker>
                <Marker position={[42.0477208,-87.67760436378603]}> </Marker>
                <Marker position={[42.0472056,-87.6854423]}> </Marker>
                <Marker position={[42.046685161545334,-87.68437286708972]}> </Marker>
                <LeafletGeocoder />
            </MapContainer>
        </div>
    )
}


let DefaultIcon = L.icon({
    iconUrl: "/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
L.Marker.prototype.options.icon = DefaultIcon;

export default Map;