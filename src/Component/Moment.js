import moment from "moment";
import { useState } from "react";
const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const Months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const GetCalander = (days = Days, months = Months) => {
  let today = moment();

  let currentDate = +moment().format("DD");

  let currentMonth = +moment().format("MM") - 1;

  let currentYear = +moment().format("YYYY");

  const [selectDate, setSelectDate] = useState(today);

  let daysInMonth = moment(selectDate).daysInMonth();

  let prevMonthLastDate = moment(selectDate)
    .subtract(1, "month")
    .endOf("month")
    .format();

  let currentMonthStartingPoint = +moment(selectDate)
    .startOf("month")
    .format("d");

  let prevMonthStartingPoint =
    moment(prevMonthLastDate).format("DD") - currentMonthStartingPoint + 1;
  let currentMonthCounter = 1;
  let nextMonthCounter = 1;
  const calanderRow = {};

  let columnRow = {};
  let c = 0;
  let b = 1;

  for (let i = 1; i <= 42; i++) {
    if (c == 7) {
      calanderRow[b] = { ...columnRow};
      b++;
      columnRow = {};
      c = 0;
    } else {
      if (i <= currentMonthStartingPoint) {
        columnRow[c] = {
          month: `${months[+moment(selectDate).format("MM") - 2]}`,
          date: prevMonthStartingPoint,
          year: +moment(selectDate).format("YYYY"),
          class: "Prev",
        };
        prevMonthStartingPoint++;
        c++;
      } else if (currentMonthCounter <= daysInMonth) {
        columnRow[c] = {
          month: `${months[+moment(selectDate).format("MM") - 1]}`,
          date: currentMonthCounter,
          year: +moment(selectDate).format("YYYY"),
          class: "current",
        };
        currentMonthCounter++;
        c++;
      } else {
        columnRow[c] = {
          month: `${
            moment(selectDate).format("MM") == 12
              ? months[+moment(selectDate).format("MM") - 12]
              : months[+moment(selectDate).format("MM")]
          }`,

          date: nextMonthCounter,
          year:
            +moment(selectDate).format("MM") == 12
              ? moment(selectDate).format("YYYY") + 1
              : moment(selectDate).format("YYYY"),
          class: "Next",
        };
        nextMonthCounter++;
        c++;
      }
    }
  }

  const getPrevMonth = () => {
    setSelectDate(moment(selectDate).subtract(1, "month"));
  };

  const getNextMonth = () => {
    setSelectDate(moment(selectDate).add(1, "month"));
  };

  const getToday = () => {
    setSelectDate(moment(today));
    // console.log("this is today", selectDate);
  };

  return {
    days,
    months,
    currentDate,
    currentMonth,
    currentYear,
    calanderRow,
    selectDate,
    getPrevMonth,
    getNextMonth,
    getToday,
  };
};

export default GetCalander;
