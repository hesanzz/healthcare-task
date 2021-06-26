import React, {useState} from 'react';
import "./styles.scss";
import { GoogleMap, LoadScript, Marker, InfoWindow  } from '@react-google-maps/api';
import mapStyles from './mapStyles';
import InformationContainer from './InformationContainer';

const LocationContainer = () => {

  const [selected, setSelected] = useState({});
  
  const mapStyle = {        
    height: "100%",
    width: "100%",
    styles: mapStyles
    };
  
  const defaultCenter = {
    lat: 40.3851, lng: 2.1734
  }

  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 39.3954,
        lng: 2.162 
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 40.3917,
        lng: 2.1649
      },
    },
    {
      name: "Location 3",
      location: { 
        lat: 41.3773,
        lng: 4.1585
      },
    },
    {
      name: "Location 4",
      location: { 
        lat: 40.3797,
        lng: 3.1682
      },
    },
    {
      name: "Location 5",
      location: { 
        lat: 41.4055,
        lng: 5.1915
      },
    },
    {
        name: "Location 6",
        location: { 
          lat: 39.4155,
          lng: 3.1715
        },
      },
      {
        name: "Location 7",
        location: { 
          lat: 39.4155,
          lng: 5.1715
        },
      }
  ];

  var onSelect = item => {
      console.log("item");
    setSelected(item);
  } 
  return (
     <div className="map">
         <LoadScript
       googleMapsApiKey='AIzaSyAXVaMFkqyfqsNr64e4J3S_Hb5euwooi1A'>
        <GoogleMap
          mapContainerStyle={mapStyle}
          zoom={10}
          center={defaultCenter}
        >
            {
                locations.map(item => {
                return (
                <Marker key={item.name} 
                    position={item.location}
                    onClick = { () => onSelect(item)}
                />

                )
                })
            }
            {
                selected.location && 
                (
                <InfoWindow
                position={{ lat: selected.location.lat, lng: selected.location.lng}}
                // clickable={true}
                onCloseClick={() => setSelected({})}
                >
                    <InformationContainer details = {selected} />
                </InfoWindow>
                )
            }
        </GoogleMap>
     </LoadScript>
     </div>
  )
}

export default LocationContainer;