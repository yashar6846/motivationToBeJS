// import "./App.css";
import Home from "./component/pages/home/Home";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./component/pages/aboutUs/AboutUs";
import ArticlePage from "./component/pages/articlePage/ArticlePage";
import CreateArticle from "./component/pages/createArticle/CreateArticle";
import NotFound from "./component/pages/notFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/create-article" element={<CreateArticle />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
