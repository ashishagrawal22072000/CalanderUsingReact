import React, { useEffect } from "react";
import GetCalander from "./Moment";
import "bootstrap/dist/css/bootstrap.css";
import moment from "moment";
import { GrPrevious, GrNext } from "react-icons/gr";
export default function Calander() {
  const {
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
  } = GetCalander();

  console.log(
    "cbejbce3be3knkrenfk jhb3iuf3f",
    months[+moment(selectDate).format("MM")]
  );
  console.log("cbejbce3be3knkrenf", +moment(selectDate).format("MM"));

  return (
    <>
      <div className="container-fluid">
        <div className="header d-flex justify-content-between align-items-center p-3">
          <div>
            <span className="fw-bold mx-2" style={{ fontSize: "50px" }}>
              {months[+moment(selectDate).format("MM")-1]}
            </span>{" "}
            <span className="h1 fw-normal" style={{ fontSize: "50px" }}>
              {moment(selectDate).format("YYYY")}
            </span>
          </div>
          <div>
            <span>
              <button onClick={getPrevMonth} className="btn  border border-2">
                <GrPrevious />
              </button>
              <button className="btn border border-2 mx-2" onClick={getToday}>
                Today
              </button>
              <button onClick={getNextMonth} className="btn border border-2">
                <GrNext />
              </button>
            </span>
          </div>
        </div>
        <div className="h-100 w-100  text-end">
          <div className="row">
            {days.map((val) => {
              return (
                <>
                  <div className="col" key={val}>
                    <h3 className="fw-normal">{val}</h3>
                  </div>
                </>
              );
            })}
          </div>

          {Object.values(calanderRow).map((val) => {
            return (
              <div className="row" style={{ height: "135px" }}>
                {val.map((value, i) => {
                  return (
                    <>
                      {value.date === 1 ? (
                        <>
                          <div
                            className="col border"
                            style={{
                              background: `${i === 0 ? "#f0f0f2" : ""}`,
                            }}
                          >
                            <h2
                              className={`${
                                value.month !==
                                months[+moment(selectDate).format("MM")]
                                  ? "text-secondary"
                                  : ""
                              } mt-3`}
                            >
                              <span
                                className={`${
                                  value.month ===
                                  +moment(selectDate).format("MM") + 1
                                    ? "text-danger"
                                    : ""
                                }`}
                              >
                                {value.date}
                              </span>
                              <span>{value.month.slice(0, 3)}</span>
                            </h2>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className="col border"
                            style={{
                              backgroundColor: `${i === 0 ? "#f0f0f2" : ""}`,
                            }}
                          >
                            <h2
                              className={`${
                                value.month !==
                                months[+moment(selectDate).format("MM")]
                                  ? "text-secondary"
                                  : ""
                              } mt-3`}
                            >
                              <span
                                className={`${
                                  value.month === months[currentMonth] &&
                                  value.date === currentDate &&
                                  value.year === currentYear
                                    ? "text-light bg-danger rounded-circle p-2"
                                    : ""
                                }`}
                              >
                                {value.date}
                              </span>
                            </h2>
                          </div>
                        </>
                      )}
                    </>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
