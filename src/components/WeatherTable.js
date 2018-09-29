import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableFooter,
} from '@material-ui/core';

import './WeatherTable.css';

export default function WeatherTable(props) {
  const { data, city } = props;
  let total = {
    temp: 0,
    diff: 0,
  };

  if (data) {
    data.forEach(({temp, diff}) => {
      total.temp += parseFloat(temp);
      total.diff += parseFloat(diff);
    });
  }

  return (
    <div class="table-container">
      <Table class="table-class">
        <TableHead>
          <TableRow>
            <TableCell>{city || 'City Name'}</TableCell>
            <TableCell>Suhu</TableCell>
            <TableCell>Perbedaan</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data ? 
              data.map(({ date, diff, temp }) => (
                <TableRow>
                  <TableCell>{date}</TableCell>
                  <TableCell>{temp}</TableCell>
                  <TableCell>{diff}</TableCell>
                </TableRow>
              )) : null
          }
        </TableBody>
        {
          data ? (
            <TableFooter>
              <TableRow>
                <TableCell>Rata-rata</TableCell>
                <TableCell>{(total.temp / data.length).toFixed(2)}</TableCell>
                <TableCell>{(total.diff / data.length).toFixed(2)}</TableCell>
              </TableRow>
            </TableFooter>
          ) : null
        }
      </Table>
    </div>
  )
}