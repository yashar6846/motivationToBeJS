export const SearchResultsList=({resultes})=>{
    return(
       <div className="results-list">
        {resultes.map((result,id)=>{
            return <div key={id}>{result.name}</div>
        })}
       </div>
          
    )
}