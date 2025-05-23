import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Studentdashboard from "./components/Studentdashboard";
import Createpage from "./components/Createpage";
import Deletepage from "./components/Deletepage";
import Editpage from "./components/Editpage";
import Readpage from "./components/Readpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Studentdashboard />}></Route>
        <Route
          path="/Studentdashboard/createpage/"
          element={<Createpage />}
        ></Route>
        <Route
          path="/Studentdashboard/Deletepage/:studentid"
          element={<Deletepage />}
        ></Route>
        <Route
          path="/Studentdashboard/Editpage/:studentid"
          element={<Editpage />}
        ></Route>
        <Route
          path="/Studentdashboard/Readpage/:studentid"
          element={<Readpage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
