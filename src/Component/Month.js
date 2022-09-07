import React, { useEffect } from "react";
import Getcalander from "./Cal";
import "bootstrap/dist/css/bootstrap.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import { Link } from "react-router-dom";
export default function Month() {
  const {
    days,
    months,
    calanderRow,
    selectDate,
    getPrevMonth,
    getNextMonth,
    getToday,
  } = Getcalander();

  return (
    <>
      <div className="container-fluid">
        <div className="header d-flex justify-content-between align-items-center p-3">
          <div>
            <span className="fw-bold mx-2" style={{ fontSize: "50px" }}>
              {months[selectDate.getMonth()]}
            </span>{" "}
            <span className="h1 fw-normal" style={{ fontSize: "50px" }}>
              {selectDate.getFullYear()}
            </span>
          </div>
          <div>
            <button className="btn border border-2">
              <Link to="/month">Month</Link>
            </button>
            <button className="btn border border-2">
              <Link to="/year">Year</Link>
            </button>
          </div>
          <div>
            <span>
              <button onClick={getPrevMonth} className="btn  border border-2">
                <GrPrevious />
              </button>
              <button className="btn border border-2" onClick={getToday}>
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
                  <div className="col">
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
                  console.log(
                    months[selectDate.getMonth() + 1],
                    selectDate.getDate()
                  );
                  return (
                    <>
                      {value.date === 1 ? (
                        <>
                          <div
                            className="col border"
                            style={{
                              background: `${i === 0 ? "#f3e9d2" : ""}`,
                            }}
                          >
                            <h2
                              className={`${
                                value.month !== months[selectDate.getMonth()]
                                  ? "text-secondary"
                                  : ""
                              } mt-3`}
                            >
                              <span
                                className={`${
                                  value.month === selectDate.getMonth() + 1
                                    ? "text-danger"
                                    : ""
                                }`}
                              >
                                {value.date}
                              </span>
                              <span>{value.month}</span>
                            </h2>
                          </div>
                        </>
                      ) : (
                        <>
                          <div
                            className="col border"
                            // style={`${
                            //   i === 0 ? { color: "green" } : { color: "red" }
                            // }`}
                            style={{
                              backgroundColor: `${i === 0 ? "#f3e9d2" : ""}`,
                            }}
                          >
                            <h2
                              className={`${
                                value.month !== months[selectDate.getMonth()]
                                  ? "text-secondary"
                                  : ""
                              } mt-3`}
                            >
                              <span
                                className={`${
                                  value.month ===
                                    months[selectDate.getMonth()] &&
                                  value.date === selectDate.getDate()
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
