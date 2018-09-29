import groupTemperatureByDay from '../groupTemperatureByDay';

describe('Grouping Helper Test', () => {
  const rawDataMock = [
    {
      dt_txt: "2018-09-29",
      main: {
        temp: 20.00,
        temp_min: 18.00,
        temp_max: 22.00,
      }
    },
    {
      dt_txt: "2018-09-29",
      main: {
        temp: 21.00,
        temp_min: 19.00,
        temp_max: 24.00,
      }
    },
    {
      dt_txt: "2018-09-30",
      main: {
        temp: 20.00,
        temp_min: 18.00,
        temp_max: 22.00,
      }
    },
    {
      dt_txt: "2018-09-30",
      main: {
        temp: 25.00,
        temp_min: 24.00,
        temp_max: 29.00,
      }
    },
  ];
  it('Should return empty array', () => {
    expect(groupTemperatureByDay([])).toEqual([]);
  });
  it('Should work with minimal data required', () => {
    expect(groupTemperatureByDay(rawDataMock)).not.toEqual([]);
  });
  it('Should return correct data', () => {
    let result = groupTemperatureByDay(rawDataMock);
    let expected = [{"date": "2018-09-29", "diff": "4.50", "temp": "20.50"}, {"date": "2018-09-30", "diff": "4.50", "temp": "22.50"}];
    expect(result).toEqual(expected);
  });
})