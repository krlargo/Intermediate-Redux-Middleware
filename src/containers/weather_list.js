import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.js';

class WeatherList extends Component {
  constructor(props) {
    super(props);

    this.state = { weather: null }
  }

  renderWeather(cityData) {
    const name = cityData.city.name
    const temperatures = cityData.list.map(weather => weather.main.temp);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const pressures = cityData.list.map(weather => weather.main.pressure);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td><Chart data={temperatures} color={'red'} units='K' /></td>
        <td><Chart data={humidities} color={'blue'} units='hPa' /></td>
        <td><Chart data={pressures} color={'green'} units='%' /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
