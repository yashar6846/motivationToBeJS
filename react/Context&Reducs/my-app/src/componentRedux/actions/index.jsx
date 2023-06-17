export const sepetEkle = book =>{
    return {type: "SEPETE_EKLE", payload: book}
}

export const deleteCart = book =>{
    return {type: "DELETE_EKLE", payload: book}
}

export const increment = book =>{
    return {type: "INCRES_CART", payload: book}
}