const prefixUrl = 'http://api.openweathermap.org/data/2.5/forecast?';
const defaultOptions = 'mode=json&units=metric';
const appID = '271da6b323b05ebaf2b4aaa0f3378f89';

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function fetchWeathersByCity(cityName) {
  try {
    const response = await fetch(`${prefixUrl}q=${encodeURI(cityName)},id&appid=${appID}&${defaultOptions}`); 
    if (response.ok) {
      return response.json();
    } 
  } catch (error) {
    return error;
  }
}