import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapOptions from './mapOptions'

const AnyReactComponent = ({ img_src }) => 
  <div>
    <img 
      src={img_src} 
      alt="pin" 
      className="pin" 
      style={{ width: "40px"}} />
  </div>;

class MapContainer extends React.Component {
    static defaultProps = {
      center: {
        lat: 51.5124449,
        lng: -0.1270106
      },
      zoom: 13
    };

    
  
    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '500px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ 
              key: process.env.REACT_APP_MAP_API_KEY,
              //map_ids: '3ab7b6444af7707',
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            options={
              MapOptions
            }
            >

            <AnyReactComponent
              lat={51.5124449}
              lng={-0.1270106}
              img_src={`${process.env.PUBLIC_URL + "/images/location-icon.png"}`}
            />
          </GoogleMapReact >
        </div>
      );
    }
  }
  
  export default MapContainer;