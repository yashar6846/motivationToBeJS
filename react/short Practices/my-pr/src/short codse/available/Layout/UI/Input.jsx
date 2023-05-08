export const Input=(props)=>{
 return (
    <div className="">
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}/>
    </div>
 )
}