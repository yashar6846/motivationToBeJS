import React,{useState} from 'react';
import './App.css';
import { SearchBar } from './commponents/SearchBar';
import { SearchResultsList } from './commponents/SearchResultsList';

function App() {
  const [resultes, setResults]=useState([])
  return (
 <div className='App'> 
  <div className='search-bar-container'>
    <SearchBar setResults={setResults}/>
    <SearchResultsList resultes={resultes}/>
  </div>
 </div>
    )
}

export default App;
