import { useMutation, useQuery } from "@apollo/client"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Navbar } from "../../navbar/Navbar"
import { DELETE_NowAll } from "../form/allMutation"
import { GET_AllData } from "./dataQuery"

export const Home=()=>{
    const naviagate = useNavigate()
    const[allDatas, setAllDatas]=useState([])
    const[itemDelete,setItemDelete] = useState(0)
    const{data}=useQuery(GET_AllData,{
        fetchPolicy: "no-cache"
    })
   const[deleteAll]= useMutation(DELETE_NowAll)

    useEffect(()=>{
        if(data?.allData){
            setAllDatas(data.allData)
        }
    },[data])

    const DeleteHandler=(id)=>{
     setItemDelete(id)
    deleteAll({
        variables:{
            id: itemDelete
        }
    }).then(()=>{
        setAllDatas((existingData)=>{
            return existingData.filter((_)=>_.id !== itemDelete)
        }) 
    })
    }

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
                            <button varianet="danger" type="button" onClick={()=> DeleteHandler(data.id)}>Delete</button>
                        </div>
                    )
                })
               }
            </div>
        </>
       
    )
}