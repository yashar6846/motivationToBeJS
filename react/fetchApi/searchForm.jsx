const SearchForm=({search,onChangeSearch})=>{
  console.log(search);
    return (
       <div className="App">
         <form >            
            <input 
            name="search"
            placeholder="search"
             value={search} 
            onChange={onChangeSearch} 
            />
        </form>
       </div>
    )
}

export default SearchForm;