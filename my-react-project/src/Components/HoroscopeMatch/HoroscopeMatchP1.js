// import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const HoroscopeMatchP1 = (props) => {
  const {
    year1,
    setYear1,
    month1,
    setMonth1,
    day1,
    setDay1,
    hour1,
    setHour1,
    setMonthNumber1,
  } = props;
  const currentYear = new Date().getFullYear();
  const yearArray = Array.from(
    { length: currentYear - 1989 },
    (_, index) => currentYear - index
  );

  const inputYearHandler1 = (e) => {
    setYear1(e.target.value);
  };

  const monthArray = [];
  for (let month = 0; month < 12; month++) {
    const date = new Date(2000, month, 1);
    const monthName = date.toLocaleString("en-US", { month: "long" });
    monthArray.push(monthName);
  }
  const inputMonthHandler1 = (e) => {
    const selectedMonthName = e.target.value;
    const selectedMonthIndex = monthArray.findIndex(
      (month) => month === selectedMonthName
    );
    const selectedMonthNumber = selectedMonthIndex + 1;
    setMonth1(selectedMonthName);
    setMonthNumber1(selectedMonthNumber);
  };

  const dayArray = Array.from({ length: 31 }, (_, index) => 1 + index);

  const inputDayHandler1 = (e) => {
    setDay1(e.target.value);
  };

  const hourArray = Array.from({ length: 24 }, (_, index) => 1 + index);

  const inputHourHandler1 = (e) => {
    setHour1(e.target.value);
  };

  return (
    <>
      {/*----- year input -----*/}
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year1}
          label="Date"
          onChange={inputYearHandler1}
        >
          {yearArray.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/*----- month input -----*/}

      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="demo-simple-select-label">Month</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={month1}
          label="Age"
          onChange={inputMonthHandler1}
        >
          {monthArray.map((month) => (
            <MenuItem key={month} value={month}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/*----- day input -----*/}
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="demo-simple-select-label">Day</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={day1}
          label="Date"
          onChange={inputDayHandler1}
        >
          {dayArray.map((day) => (
            <MenuItem key={day} value={day}>
              {day}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/*----- hour input -----*/}
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel id="demo-simple-select-label">Hour</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={hour1}
          label="Date"
          onChange={inputHourHandler1}
        >
          {hourArray.map((hour) => (
            <MenuItem key={hour} value={hour}>
              {hour}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default HoroscopeMatchP1;
