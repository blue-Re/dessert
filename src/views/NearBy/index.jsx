import React, { Component } from 'react'
import { Map, Marker } from 'react-amap'
export default class index extends Component {
  state = {
    currentLocation: '',
    position: { longitude: 120, latitude: 30 },
  }

  amapEvents = () => {
    window.AMap.plugin('AMap.Geocoder', () => {
      this.geocoder = new window.AMap.Geocoder({
        city: "010"//城市，默认：“全国”
      });
    })
  }
  render() {
    let mapStyle = {
      boxSizing: 'border-box',
      width: this.props.width || '100vw',
      height: this.props.height || 'calc(100vh - 50px)'
    }
    return (
      <div>
        <div className='container' id='container' style={mapStyle}>
          <Map events={this.amapEvents} amapkey='	3e3de9bace9d41531b94804daa2dfee8' version='1.4.15'>
            <Marker position={this.state.position} />
          </Map>
        </div>
      </div>
    );
  }

}
