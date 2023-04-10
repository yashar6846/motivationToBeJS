export const ModaleDelete=({closeModal})=>{
    return (
        <>
        <div className="title">
          <p>Are you sure you want to continur?</p>
        </div>
        <div className="body">
            <p>The next page is awesom! you should move forward</p>
        </div>
        <div className="">
            <button onClick={()=> closeModal(false)}>Cancel</button>
            <button onClick={()=> closeModal(true)}>Continue</button>
        </div>
        </>
    )
}