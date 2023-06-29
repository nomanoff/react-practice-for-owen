import React from "react";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App_router = () =>{
    return(
    <Router>
    <Routes>
        <Route path="/" exact={true} element={<MainPage />} />
        <Route path="/detail/:title" element={<DetailPage />} />
    </Routes>
    </Router>
    )
}

export default App_router;