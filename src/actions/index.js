import Axios from 'axios';

const API_KEY = '04ed9e4c45e3696b183cf8931a8a2e99';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); // Promise

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
