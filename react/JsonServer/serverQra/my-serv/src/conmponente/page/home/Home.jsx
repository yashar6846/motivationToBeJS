import { useQuery } from "@apollo/client"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Navbar } from "../../navbar/Navbar"
import { GET_AllData } from "./dataQuery"

export const Home=()=>{
    const naviagate = useNavigate()
    const[allDatas, setAllDatas]=useState([])
    const{data}=useQuery(GET_AllData,{
        fetchPolicy: "no-cache"
    })
    useEffect(()=>{
        if(data?.allData){
            setAllDatas(data.allData)
        }
    },[data])
    return(
        <>
            <h1>Home</h1>
            <Navbar />
            <div>
               {
                allDatas.map((data,index)=>{
                    return(
                        <div key={index}>
                            <h2>{data.name}</h2>
                            <img src={data.imageurl} />
                            <p>{data.price}</p>
                            <button varianet="primary" type="button" onClick={()=> naviagate(`/edit-toy/${data.id}`)}>Edite</button>
                        </div>
                    )
                })
               }
            </div>
        </>
       
    )
}