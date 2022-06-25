import { useState } from "react";

const Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const Months = [
  "Janurary",
  "Feburary",
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

const Getcalander = (days = Days, months = Months) => {
  const today = new Date();
  console.log("today", today);
  const currentDate = today.getDate();
  console.log("currentdate", currentDate);
  let currentMonth = today.getMonth();
  console.log("currentmonth", currentMonth);
  let currentYear = today.getFullYear();
  console.log("currentyear", currentYear);
  const dayInWeek = [0, 1, 2, 3, 4, 5, 6];
  const [selectDate, setSelectDate] = useState(today);
  console.log("selectDate", selectDate);
  const monthLastDate = new Date(
    selectDate.getFullYear(),
    selectDate.getMonth() + 1,
    0
  );
  console.log("monthLastdate", monthLastDate);
  const daysInMonth = monthLastDate.getDate();
  console.log("daysInMontth", daysInMonth);
  const prevMonthLastDate = new Date(
    selectDate.getFullYear(),
    selectDate.getMonth(),
    0
  );
  console.log("prevmonthlastdate", prevMonthLastDate);
  const firstDayInMonth = new Date(
    selectDate.getFullYear(),
    selectDate.getMonth(),
    1
  ).getDay();
  console.log("firstdayinmonth", firstDayInMonth);
  let currentMonthStartingPoint = dayInWeek.indexOf(firstDayInMonth) + 1;
  console.log("currentMonthStartingPoint", currentMonthStartingPoint);
  let prevMonthStartingPoint =
    prevMonthLastDate.getDate() - dayInWeek.indexOf(firstDayInMonth) + 1;
  console.log("prevMonthStartingPoint", prevMonthStartingPoint);
  let currentMonthCounter = 1;
  let nextMonthCounter = 1;

  const row = 6;
  const col = 7;

  const calanderRow = {};

  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      if (!calanderRow[i]) {
        calanderRow[i] = [];
      }
      if (i === 1) {
        if (j < currentMonthStartingPoint) {
          calanderRow[i] = [
            ...calanderRow[i],
            {
              month: `${months[selectDate.getMonth() - 1]}`,
              date: prevMonthStartingPoint,
              year: selectDate.getFullYear() - 1,
            },
          ];
          prevMonthStartingPoint++;
        } else {
          calanderRow[i] = [
            ...calanderRow[i],
            {
              month: `${months[selectDate.getMonth()]}`,
              date: currentMonthCounter,
              year:
                selectDate.getMonth() === 0
                  ? selectDate.getFullYear() - 1
                  : selectDate.getFullYear(),
            },
          ];
          currentMonthCounter++;
        }
      } else if (i > 1 && currentMonthCounter < daysInMonth + 1) {
        calanderRow[i] = [
          ...calanderRow[i],
          {
            month: `${months[selectDate.getMonth()]}`,
            date: currentMonthCounter,
            year: selectDate.getFullYear(),
          },
        ];
        currentMonthCounter++;
      } else {
        calanderRow[i] = [
          ...calanderRow[i],
          {
            month: `${
              selectDate.getMonth() === 11
                ? months[selectDate.getMonth() - 11]
                : months[selectDate.getMonth() + 1]
            }`,

            date: nextMonthCounter,
            year:
              selectDate.getMonth() === 11
                ? selectDate.getFullYear() + 1
                : selectDate.getFullYear(),
          },
        ];
        nextMonthCounter++;
      }
    }
  }

  const getPrevMonth = () => {
    setSelectDate((val) => new Date(val.getFullYear(), val.getMonth() - 1, 1));
  };

  const getNextMonth = () => {
    setSelectDate((val) => new Date(val.getFullYear(), val.getMonth() + 1, 1));
  };

  const getToday = () => {
    setSelectDate(
      () => new Date(today.getFullYear(), today.getMonth(), today.getDate())
    );
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

export default Getcalander;
