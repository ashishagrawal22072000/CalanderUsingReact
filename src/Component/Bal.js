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
  
  if (selectDate.getMonth() <= 11) {


    const d = new Date();
  const today = new Date(d.getFullYear(), 0, 1);
  console.log(today.getDay());
  console.log(today.getFullYear());
  const currentDate = today.getDate();
  console.log(currentDate);

  //   let currentMonth = today.getMonth();
  //   let [currMonth, setCurrMonth] = useState(months[today.getMonth()]);
  //   console.log("currentMonth", currMonth);

  //   const currentYear = today.getFullYear();

  console.log("current date", currentDate);
  const dayInWeek = [0, 1, 2, 3, 4, 5, 6];
  const [selectDate, setSelectDate] = useState(today);
  console.log("selectDate", selectDate);
  const monthLastDate = new Date(
    selectDate.getFullYear(),
    selectDate.getMonth() + 1,
    0
  );
  console.log("monthlastDate", monthLastDate);

  const daysInMonth = monthLastDate.getDate();
  console.log("daysInMonth", daysInMonth);
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

  console.log("firstDayInMonth", firstDayInMonth);

  let currentMonthStartingPoint = dayInWeek.indexOf(firstDayInMonth) + 1;
  console.log("currentmonthstartingPoint", currentMonthStartingPoint);

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
          console.log("calanderrow", calanderRow);
        }
        if (i === 1) {
          if (j < currentMonthStartingPoint) {
            calanderRow[i] = [
              ...calanderRow[i],
              {
                month: `${months[selectDate.getMonth() - 1]}`,

                date: "",
              },
            ];
            prevMonthStartingPoint++;
            console.log(calanderRow);
          } else {
            calanderRow[i] = [
              ...calanderRow[i],
              {
                month: `${months[selectDate.getMonth()]}`,

                date: currentMonthCounter,
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
            },
          ];
          currentMonthCounter++;
        } else {
          setSelectDate(
            (val) => new Date(val.getFullYear(), val.getMonth() + 1, 1)
          );
        }
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
    console.log("This Is The Current Date", selectDate);
  };

  return {
    days,
    months,
    currentDate,
    calanderRow,
    selectDate,
    getPrevMonth,
    getNextMonth,
    getToday,
  };
};

export default Getcalander;
