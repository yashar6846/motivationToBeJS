import { useNavigate } from "react-router-dom"

export const Modale=({closeModal})=>{
 const naviget=   useNavigate()
    return (
        <>
         <div className="title">
          <p>Are you sure you want to continur?</p>
        </div>
        <div className="body">
            <p>The next page is awesom! you should move forward</p>
        </div>
        <div className="">
            <button onClick={()=> naviget('/')}>Cancel</button>
            <button onClick={()=> closeModal(false)}>Yese</button>
        </div>
        </>
    )
}