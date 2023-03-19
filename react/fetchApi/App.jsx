import React,{useState} from 'react';
import './App.css';
import Fetcingapi from './commponents/Fetcingapi';
import SearchForm from './commponents/SearchForm';

function App() {
  const[search, setSearch] = useState("")

  const handleChange= e =>setSearch(e.target.value);
  return (
 <div className='App'> 
 <h1> i start proctice </h1>
 <SearchForm search={search} onChangeSearch={handleChange}/>
 <Fetcingapi  search={search}/>
 </div>
    )
}

export default App;
