import React, { Component } from "react";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import theme from "./mapTheme.json";

export class MapContainer extends Component {
    constructor(props) {
        super(props);
        
        this.resizeTimer = null;
        this.map = null;
        this.mapNode = React.createRef();
    }
    
    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize)
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize)
    }
    
    onGoogleApiLoaded = (mapProps, map) => {
        this.map = map;
        this.setCenterOffset();
    };
    
    onWindowResize = () => {
        clearTimeout(this.resizeTimer);
        
        this.resizeTimer = setTimeout(() => {
            this.setCenterOffset();
        }, 1000);
    };
    
    setCenterOffset = () => {
        const { coords } = this.props.data;
        const windowWidth = window.innerWidth;
        const isMob = windowWidth <= 700;
        const mapNode = this.mapNode.current.refs.map;
        const offsetX = windowWidth * 0.15;
        const offsetY = mapNode === undefined ? 450 : mapNode.clientHeight * (isMob ? 0.15 : 0.25);
   
        this.map.setCenter({
            lat: coords[0],
            lng: coords[1]
        });
        
        this.map.panBy(-offsetX, -offsetY);
    };
    
    render() {
        const { coords } = this.props.data;
        
        return (
            <Map
                ref={this.mapNode}
                google={this.props.google}
                zoom={14}
                fullscreenControl={false}

                streetViewControl={false}
                zoomControl={false}
                
                onReady={this.onGoogleApiLoaded}
                initialCenter={{
                    lat: coords[0],
                    lng: coords[1]
                }}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                styles={theme}
            >
                <Marker
                    position={{lat: coords[0], lng: coords[1]}}
                    icon={{
                        url: require('../../images/svg/pin.svg')
                }} />
            </Map>
        );
    }
}

export default GoogleApiWrapper(
    (props) => ({
        apiKey: props.data.api_key
    }
))(MapContainer)