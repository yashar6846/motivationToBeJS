import './App.css';
import { Route,Routes } from'react-router-dom';
import { Home } from './conmponente/page/home/Home';
import { Form } from './conmponente/page/form/Form';
import { EditToy } from './conmponente/page/home/EditToy';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/form" element={<Form/>}/>
        <Route exact path="/edit-toy/:id" element={<EditToy/>}/>
        {/* <Route exact path="/home" component={<Navbar />}/> */}
      </Routes>
     
    </div>
  );
}

export default App;
