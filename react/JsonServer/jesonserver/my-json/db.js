
module.exports ={
    toy:[
         {
             "id":1,
             "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIYXtxLpZf-WNw6PYGx6JgXb0GqGweOFOuYOlftBVcj7HInCU0z6Lkvr2wWshD2vnVTvM&usqp=CAU",
             "name":"the first",
             "price": 7
         },
         
         {
             "id":2,
             "imageurl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfZCp3jdAufflppsYtZ1WVIMc1xsEhwZNKWmDSnXq7H2ArUKEqeH8m2kidaBKACze_8JY&usqp=CAU",
             "name":"The second",
             "price": 23
         },
        ]
}




   fetch(`http://localhost:2080/posts`)
   .then((res)=> {
       if(!res.ok){
           throw Error('could not fetch the data from the source')
       }
       return res.json()
       }).then(res=>{
           setCounte(res.data)
           setIsPending(false)
           setError(null)
       })
      .then(err=> {setError(err.message)})
      setIsPending(false)
      setError(false)