import { render, screen } from "@testing-library/react"
import { click } from "@testing-library/user-event/dist/click";
import { MapContainer, Marker, Popup } from "react-leaflet";
import Map from "../components/Map";
import MapMarker from "../components/MapMarker";

jest.mock("../components/MapMarker");

describe('Map', () => {
    it('displays popup when clicked', async () =>{
        const data = [{"address":"2156 Ridge Ave, Evanston, IL 60201","coordinates":[42.05673940074193,-87.68665687697604]}];
        MapMarker.mockReturnValue(<></>);

        expect(MapMarker).toBeCalledTimes(0);

        render(<Map markerData={data}/>);

        expect(MapMarker).toHaveBeenCalledWith({"address":"2156 Ridge Ave, Evanston, IL 60201","coords":[42.05673940074193,-87.68665687697604]}, {})
    });
})