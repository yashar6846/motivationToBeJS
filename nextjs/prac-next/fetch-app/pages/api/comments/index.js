import products from '../../../data.json'
// import {comments} from '../../../data/commentes'
    // const products = ("http://localhost:2000/products")
export default async function handler (req, res) {

    res.status(200).json(products)
}



