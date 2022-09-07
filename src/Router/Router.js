import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Month from "../Component/Month";
import Year from "../Component/Year";
export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path="/month" element={<Month />} />
          <Route path="/year" element={<Year />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
