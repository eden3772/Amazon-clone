import  {React,useEffect,useState} from 'react'
import ProductCard from '../Product/ProductCard'
import classes from './product.module.css'
import axios from "axios"
import Loader from "../Loader/Loader"
const Product = () => {
    const [products , setproducts] = useState()
  const [isLoading, setIsloading] = useState(false)
    
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then ((res)=>{
            setproducts(res.data)
            setIsloading(false)
        }).catch ((error)=>{
            console.log(error)
            setIsloading(false)
        })
    },[])
  return (
   <>
    {isLoading?(<Loader/>):( <section className={classes.products_container}>
      {
        products?.map((singleProduct)=>{
            return < ProductCard renderAdd={true} product={singleProduct} key ={singleProduct.id} />
        })
      }
     
    </section>)}
   
   </>
  )
}

export default Product
