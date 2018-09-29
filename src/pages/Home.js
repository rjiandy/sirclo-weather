import React, { Component } from 'react';
import autobind from 'class-autobind';

import {
  TextField,
  Button
} from '@material-ui/core';

import fetchWeather from '../helpers/fetchWeather';
import groupTemperatureByDay from '../helpers/groupTemperatureByDay';

import WeatherTable from '../components/WeatherTable';

import './Home.css';

export default class HomePage extends Component {
  constructor() {
    super(...arguments);
    autobind(this);
    this.state = {
      finishFetch: false,
      cityName: '',
      error: '',
      weatherData: null,
    }
  }

  render() {
    const { cityName, error, weatherData } = this.state;
    return (
      <div class="container">
        <span class="header-text">
          Welcome To Simple Weather App (INA only)!
        </span>
        <div class="form-content">
          <form method="submit" onSubmit={this.onSubmit} class="form-style">
            <TextField
              id="outlined-named"
              label="City Name"
              value={this.state.cityName}
              onChange={this.onCityTextChange}
              margin="normal"
              variant="outlined"
              error={error.length > 0}
            />
            <Button variant="contained" onClick={this.onSubmit}>
              See Temperature
            </Button>
          </form>
        </div>
        <div class="table-content">
          <WeatherTable 
            data={weatherData}
            city={cityName}
          />
        </div>
      </div>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    fetchWeather(this.state.cityName).then((data) => {
      if (data) {
        this.setState({
          finishFetch: true,
          error: '',
          weatherData: groupTemperatureByDay(data.list),
        })
      } else {
        this.setState({
          error: 'No Data Found',
          weatherData: null,
        })
      }
    });
  }

  onCityTextChange(e) {
    this.setState({
      cityName: e.target.value
    })
  }
}