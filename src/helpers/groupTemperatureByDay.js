export default function groupTemperatureByDay(weatherList) {
  if (weatherList.length > 0) {
    let groupedWeatherByDate = new Map();
    for (const {dt_txt, ...others} of weatherList) {
      const day = dt_txt.split(' ')[0];
      if (groupedWeatherByDate.has(day)) {
        groupedWeatherByDate.set(day, [
          ...groupedWeatherByDate.get(day),
          {dt_txt, ...others},
        ]);
      } else {
        groupedWeatherByDate.set(day, [{dt_txt, ...others}]);
      }
    }
    let dailyWeather = [];
    let totalTempAvg = 0;
    let totalDiffAvg = 0;
    for (const [key, value] of groupedWeatherByDate) {
      let tempAvg = 0;
      let tempMinAvg = 0;
      let tempMaxAvg = 0;
      for (const { main } of value) {
        tempAvg += main.temp;
        tempMinAvg += main.temp_min;
        tempMaxAvg += main.temp_max;
      }
      tempMinAvg = tempMinAvg / value.length;
      tempMaxAvg = tempMaxAvg / value.length;
  
      dailyWeather.push({
        date: key,
        temp: (tempAvg / value.length).toFixed(2),
        diff: (tempMaxAvg - tempMinAvg).toFixed(2),
      });
    }
    return dailyWeather;
  }
  return [];
}