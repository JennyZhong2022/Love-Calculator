// import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import exclamation from "../../pictures/exclamation-mark2.png";

const HoroscopeMatchP2 = (props) => {
  const {
    year2,
    setYear2,
    month2,
    setMonth2,
    day2,
    setDay2,
    hour2,
    setHour2,
    setMonthNumber2,
    showHint5,
    showHint6,
    showHint7,
    showHint8,
  } = props;

  const currentYear = new Date().getFullYear();
  const yearArray = Array.from(
    { length: currentYear - 1989 },
    (_, index) => currentYear - index
  );

  const inputYearHandler2 = (e) => {
    setYear2(e.target.value);
  };

  const monthArray = [];
  for (let month = 0; month < 12; month++) {
    const date = new Date(2000, month, 1);
    const monthName = date.toLocaleString("en-US", { month: "long" });
    monthArray.push(monthName);
  }

  const inputMonthHandler2 = (e) => {
    const selectedMonthName = e.target.value;
    const selectedMonthIndex = monthArray.findIndex(
      (month) => month === selectedMonthName
    );
    const selectedMonthNumber = selectedMonthIndex + 1;
    setMonth2(selectedMonthName);
    setMonthNumber2(selectedMonthNumber);
  };

  const dayArray = Array.from({ length: 31 }, (_, index) => 1 + index);

  const inputDayHandler2 = (e) => {
    setDay2(e.target.value);
  };

  const hourArray = Array.from({ length: 24 }, (_, index) => 1 + index);

  const inputHourHandler2 = (e) => {
    setHour2(e.target.value);
  };

  return (
    <>
      {/*----- year input -----*/}
      <FormControl sx={{ minWidth: 315, marginBottom: 2, marginRight: 2 }}>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year2}
          label="Date"
          onChange={inputYearHandler2}
        >
          {yearArray.map((year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {showHint5 && (
        <p className="fillTextHintYear">
          {" "}
          <img src={`${exclamation}`} alt="!" /> Please fill in this field
        </p>
      )}

      <div className="inputMonthAndDay">
        {/*----- month input -----*/}
        <div>
          {" "}
          <FormControl sx={{ minWidth: 150, marginBottom: 2, marginRight: 2 }}>
            <InputLabel id="demo-simple-select-label">Month</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={month2}
              label="Date"
              onChange={inputMonthHandler2}
            >
              {monthArray.map((month) => (
                <MenuItem key={month} value={month}>
                  {month}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {showHint6 && (
            <p className="fillTextHintMonthAndDay">
              {" "}
              <img src={`${exclamation}`} alt="!" /> Please fill in this field
            </p>
          )}
        </div>

        {/*----- day input -----*/}
        <div>
          <FormControl sx={{ minWidth: 150, marginBottom: 2, marginRight: 2 }}>
            <InputLabel id="demo-simple-select-label">Day</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={day2}
              label="Date"
              onChange={inputDayHandler2}
            >
              {dayArray.map((day) => (
                <MenuItem key={day} value={day}>
                  {day}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {showHint7 && (
            <p className="fillTextHintMonthAndDay">
              {" "}
              <img src={`${exclamation}`} alt="!" /> Please fill in this field
            </p>
          )}
        </div>
      </div>

      {/*----- hour input -----*/}
      <FormControl sx={{ minWidth: 150, marginBottom: 2, marginRight: 2 }}>
        <InputLabel id="demo-simple-select-label">Hour</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={hour2}
          label="Date"
          onChange={inputHourHandler2}
        >
          {hourArray.map((hour) => (
            <MenuItem key={hour} value={hour}>
              {hour}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {showHint8 && (
        <p className="fillTextHintHour">
          {" "}
          <img src={`${exclamation}`} alt="!" /> Please fill in this field
        </p>
      )}
    </>
  );
};

export default HoroscopeMatchP2;
