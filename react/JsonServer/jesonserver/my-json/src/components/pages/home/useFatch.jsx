import { useEffect, useState } from "react"
import axios from "axios"

 export const useFatch=(url)=>{

    const[data,setData]=useState([])
    const[isPending,setIsPending]=useState(true)
    const[error,setError]=useState(null)
    useEffect(()=>{
        const abortCount = new AbortController()
        setTimeout(() => {
        axios.get(url,{signal: abortCount.signal})
        .then((res)=> {
           setData(res.data)
            setIsPending(false)
            // if(!res.ok){
            //     throw Error('could not fetch the data from the source')
            // }
            })
           .then(err=> {setError(err)})
           setIsPending(false)
        //    {error.name === 'AbortError'? console.log('abort fatch'):setIsPending(false)}
        }, 1000);
    },[url])
    return (
    {data,isPending,error}
    )
}

