# motivationtobejs
# Various exercises to learn JavaScript better /17March

# Using two different forms fetchApi /18March(
     fetch("https://restcountries.com/v3.1/all")
     .then(res=>res.json())
    .then(res=>setCountres(res))
   .....
    axios.get(`https://restcountries.com/v3.1/all`)
    .then(res=> setCountres(res.data))
    #Create a search bar form
)
# 