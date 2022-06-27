  const row = 6;
//   const col = 7;

//   const calanderRow = {};

//   for (let i = 1; i <= row; i++) {
//     for (let j = 1; j <= col; j++) {
//       if (!calanderRow[i]) {
//         calanderRow[i] = [];
//       }
//       if (i === 1) {
//         if (j < currentMonthStartingPoint) {
//           calanderRow[i] = [
//             ...calanderRow[i],
//             {
//               month: `${months[selectDate.getMonth() - 1]}`,
//               date: prevMonthStartingPoint,
//               year: selectDate.getFullYear() - 1,
//             },
//           ];
//           prevMonthStartingPoint++;
//         } else {
//           calanderRow[i] = [
//             ...calanderRow[i],
//             {
//               month: `${months[selectDate.getMonth()]}`,
//               date: currentMonthCounter,
//               year:
//                 selectDate.getMonth() === 0
//                   ? selectDate.getFullYear() - 1
//                   : selectDate.getFullYear(),
//             },
//           ];
//           currentMonthCounter++;
//         }
//       } else if (i > 1 && currentMonthCounter < daysInMonth + 1) {
//         calanderRow[i] = [
//           ...calanderRow[i],
//           {
//             month: `${months[selectDate.getMonth()]}`,
//             date: currentMonthCounter,
//             year: selectDate.getFullYear(),
//           },
//         ];
//         currentMonthCounter++;
//       } else {
//         calanderRow[i] = [
//           ...calanderRow[i],
//           {
//             month: `${
//               selectDate.getMonth() === 11
//                 ? months[selectDate.getMonth() - 11]
//                 : months[selectDate.getMonth() + 1]
//             }`,

//             date: nextMonthCounter,
//             year:
//               selectDate.getMonth() === 11
//                 ? selectDate.getFullYear() + 1
//                 : selectDate.getFullYear(),
//           },
//         ];
//         nextMonthCounter++;
//       }
//     }
//   }

//   const getPrevMonth = () => {
//     setSelectDate((val) => new Date(val.getFullYear(), val.getMonth() - 1, 1));
//   };

//   const getNextMonth = () => {
//     setSelectDate((val) => new Date(val.getFullYear(), val.getMonth() + 1, 1));
//   };

//   const getToday = () => {
//     setSelectDate(
//       () => new Date(today.getFullYear(), today.getMonth(), today.getDate())
//     );
//   };

//   return {
//     days,
//     months,
//     currentDate,
//     currentMonth,
//     currentYear,
//     calanderRow,
//     selectDate,
//     getPrevMonth,
//     getNextMonth,
//     getToday,
//   };
  
// };
