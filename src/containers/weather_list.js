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
        <td><Chart data={temperatures} color={'red'} /></td>
        <td><Chart data={humidities} color={'blue'} /></td>
        <td><Chart data={pressures} color={'green'} /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
