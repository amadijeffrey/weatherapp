import React, { Component } from 'react'
import { Loader } from "@googlemaps/js-api-loader"



class GoogleMap extends Component {
    constructor() {
        super()
        this.mapDiv = React.createRef()
    }
 
    componentDidMount() {
        const loader = new Loader({
            apiKey: process.env.REACT_APP_MAP_API_KEY,
            version: "weekly",
        });
        loader.load().then(() => {
          new window.google.maps.Map(this.mapDiv.current, {
                zoom: 12,
                center: {
                    lat: this.props.lat,
                    lng: this.props.lon
                }
            });

        })
    }

    render() {
        return (
            <div ref={this.mapDiv} />
        )

    }
}

export default GoogleMap