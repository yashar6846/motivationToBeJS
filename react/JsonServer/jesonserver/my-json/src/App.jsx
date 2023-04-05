import './App.css';
import { Home } from './components/pages/home/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar';
import { Contact } from './components/pages/contact/Contact';
import { About } from './components/pages/about/About';
import { Artikl } from './components/pages/home/Artikle';
 import { UpdatePost } from './components/pages/home/UpdatePost';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar />
     <Routes>
      <Route  path='/' element={<Home/>} />
      <Route exact path='/contact' element={<Contact/>} />
      <Route  exact path="/about" element={<About/>} />
      <Route  exact path="/article/:id" element={<Artikl/>} />
      {/* <Route  exact path="/update/:id" element={<UpdatePost />} /> */}
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
