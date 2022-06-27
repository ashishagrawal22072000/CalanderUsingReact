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
  // console.log("Today", today);
  // const daysInWeek = [0, 1, 2, 3, 4, 5, 6];

  let currentDate = +moment().format("DD");
  // console.log("Current Date", currentDate);

  let currentMonth = +moment().format("MM") - 1;
  // console.log("Current Month", currentMonth);

  let currentYear = +moment().format("YYYY");
  // console.log("Current Year", currentYear);

  // let currentDay = moment().format("dddd");

  const [selectDate, setSelectDate] = useState(today);
  // console.log("selectDate", selectDate);

  // let monthLastDate = moment(selectDate).endOf("month");
  // console.log("monthlastdate", monthLastDate);

  let daysInMonth = moment(selectDate).daysInMonth();
  // console.log("DaysInMonth", daysInMonth);

  let prevMonthLastDate = moment(selectDate)
    .subtract(1, "month")
    .endOf("month")
    .format();
  // console.log("prevMonthLastDate", prevMonthLastDate.toString());

  // let firstDayInMonth = moment(selectDate).startOf("month").format("ddd");
  // console.log("firstDayInMonth", firstDayInMonth);
  // console.log("firstDayInMonth", days.indexOf(firstDayInMonth));

  let currentMonthStartingPoint = +moment(selectDate)
    .startOf("month")
    .format("d");
  // console.log("currentMonthStartingPoint", currentMonthStartingPoint);

  let prevMonthStartingPoint =
    moment(prevMonthLastDate).format("DD") - currentMonthStartingPoint + 1;
  // console.log("prevMonthStartingPoint", prevMonthStartingPoint);
  let currentMonthCounter = 1;
  let nextMonthCounter = 1;

  const row = 6;
  const col = 7;

  const calanderRow = {};

  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      if (!calanderRow[i]) {
        calanderRow[i] = [];
        // console.log("calanderRow", calanderRow);
      }
      if (i === 1) {
        if (j <= currentMonthStartingPoint) {
          calanderRow[i] = [
            ...calanderRow[i],
            {
              month: `${months[+moment(selectDate).format("MM") - 2]}`,
              date: prevMonthStartingPoint,
              year: +moment(selectDate).format("YYYY"),
            },
          ];
          prevMonthStartingPoint++;
          // console.log("calanderRow", calanderRow);
        } else {
          calanderRow[i] = [
            ...calanderRow[i],
            {
              month: `${months[+moment(selectDate).format("MM") - 1]}`,
              date: currentMonthCounter,
              year:
                moment(selectDate).format("MM") - 1 === 0
                  ? +moment(selectDate).format("YYYY") - 1
                  : +moment(selectDate).format("YYYY"),
            },
          ];
          currentMonthCounter++;
        }
      } else if (i > 1 && currentMonthCounter <= daysInMonth) {
        calanderRow[i] = [
          ...calanderRow[i],
          {
            month: `${months[+moment(selectDate).format("MM") - 1]}`,
            date: currentMonthCounter,
            year: +moment(selectDate).format("YYYY"),
          },
        ];
        currentMonthCounter++;
      } else {
        // console.log(
        //   "months[+moment(selectDate).format",
        //   moment(selectDate).format("MM") == 12
        // );
        calanderRow[i] = [
          ...calanderRow[i],
          {
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
          },
        ];
        nextMonthCounter++;
      }
    }
  }

  const getPrevMonth = () => {
    setSelectDate(moment(selectDate).subtract(1, "month"));
    // console.log("This is previous date", selectDate);
  };

  const getNextMonth = () => {
    setSelectDate(moment(selectDate).add(1, "month"));
    // console.log("this si next date", selectDate);
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
