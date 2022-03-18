import React, { Component } from "react";
import { connect } from 'react-redux'
import Chart from "../components/sparkline";
import GoogleMap from "../components/googlemap";


class weatherList extends Component {
    createArr(number) {
        // create a range of data for the sparkline chart
        const min = number - 4
        const max = number + 4
        const arr = []
        for (let i = 0; i < 20; i++) {
            const el = Math.floor(Math.random() * (max - min + 1) + min)
            arr.push(el)
        }
        return arr
    }

    renderWeather() {
        return this.props.weather.map((cityData) => {
            const temps = this.createArr(cityData.main.temp)
            const humidities = this.createArr(cityData.main.humidity)
            const pressures = this.createArr(cityData.main.pressure)
            const {lon,lat } = cityData.coord

            return <tr key={cityData.id}>
                <td> <GoogleMap lon={lon} lat={lat} /></td>
                <td> <Chart data={temps} color='blue' units='k' /></td>
                <td> <Chart data={humidities} color='orange' units='%' /></td>
                <td> <Chart data={pressures} color='black' units='hPa' /></td>
            </tr>

        })
    }

    render() {
        return (
            <div className="container">
                <table className=" table table-hover">
                    <thead>
                        <tr>
                            <td>City</td>
                            <td>Temperature (k)</td>
                            <td>Humidity (%)</td>
                            <td>Pressure (hPa)</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderWeather()}
                    </tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps({weather}) {
    return {
        weather
    }
}

export default connect(mapStateToProps)(weatherList)