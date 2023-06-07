import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCocktails } from '../redux/features/cocktilSlice'
import { Link } from 'react-router-dom'

const CocktailList = () => {
    const {cocktails, loading} = useSelector((state)=> ({...state.app}))
    const [modifiedCocktail, setModifiedCocktail] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchCocktails())
    },[])

    useEffect(()=>{
        if (cocktails){
            const newCocktails = cocktails.map((item)=>{
                const {idDrink, strDrink, strDrinkThumb, strGlass ,strAlcoholis} =item;
                return{
                    id: idDrink,
                    name: strDrink,
                    important: strAlcoholis,
                    // info: strDrinkThumb,
                    glass: strGlass,
                    image: strDrinkThumb
                }
            })
            setModifiedCocktail(newCocktails)
        }else{
            setModifiedCocktail([])
        }
    },[cocktails])
    if(loading){
        return(
            <div>
                <span>Loading ...</span>
            </div>
        )
    }
   
  return (
    <div className='styles.container'>
        <div className='row'>
            {modifiedCocktail.map((item)=>{
                const {id, name, image, glass, info}=item 
                return(
                    <div className='styles.col' key={id}>
                        <div className='Styles.card'>
                            <img src={image} alt={name} className='styles.card_imag' />
                            <div className=''>
                                <h5>name</h5>
                                <h4>glass</h4>
                                <p>info</p>
                                <Link to={`/cocktail/${id}`}>
                                    <button>Detail</button>
                                </Link>
                            </div>
                        </div>
                     </div>
                )
            })}
        </div>
    </div>
  )
}

export default CocktailList