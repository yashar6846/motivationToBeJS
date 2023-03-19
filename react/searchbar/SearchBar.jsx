import React,{useState} from "react";
import './SearchBar.css'

export const SearchBar =({setResults})=>{
    const[input, setInput]=useState('')

    const fetchData = (value) => {
        fetch("https://jsonplaceholder.typicode.com/users")
          .then(res => res.json())
          .then(json => {
            const results = json.filter((user) => {
              return (
                value &&
                user &&
                user.name &&
                user.name.toLowerCase().includes(value)
              );
            });
            setResults(results);
          });
      };
    const handleChange=(value)=>{
        setInput(value)
        fetchData(value)
    }
    return(
        <div className="input-wrapper">
            <input placeholder="search.." 
            value={input} 
            onChange={(e)=> handleChange(e.target.value)} />
        </div>
    )
}



