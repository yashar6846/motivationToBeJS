import {useState, useEffect} from "react"
import axios from "axios"
import { Home } from "./component/home/Home";
import { FatchApi } from "./component/home/FatchApi";
import { BrowserRouter,Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
