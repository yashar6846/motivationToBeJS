import './App.css'
import axios from "axios"
import {useState, useEffect} from "react"
import { Home } from "./component/home/Home";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import { ArticlePage } from './component/page/ArticlePage';
import { ConterPage } from './component/home/ConterPage';
function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route axact path='/articles/:id' element={<ArticlePage/>}/>
    <Route axact path='/contact' element={<ConterPage/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
