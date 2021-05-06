import React from 'react';
import GoogleMapReact from 'google-map-react';
import MapStyle from './mapStyles'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends React.Component {
    static defaultProps = {
      center: {
        lat: 51.5124319,
        lng: -0.1290983
      },
      zoom: 13
    };
  
    render() {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '500px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'MY-API-KEY' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            defaultOptions={{
                styles: MapStyle
            }}>

            <AnyReactComponent
              lat={51.5124319}
              lng={-0.1290983}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      );
    }
  }
  
  export default MapContainer;