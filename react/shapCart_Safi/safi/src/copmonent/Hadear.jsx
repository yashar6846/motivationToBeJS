export const Hadear = (props) => {
   
  return (
    <div className="flex shoping-cart">
    <div onClick={()=>props.handleShow(false)}>Shoping Cart</div>
    <div onClick={()=> props.handleShow(true)}>
      Cart
      <sup>{props.count}</sup></div>
    </div> 
  )
}
