import React, { useEffect, useState } from 'react'
import LayOut from '../../Components/Layout/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productUrl } from '../../Api/endPoints'
import classes from '../Results/Results.module.css'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'
const Results = () => {
  const [results, setResults] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const { CatagoryName } = useParams()

  useEffect(() => {
    setIsloading(true)
    axios.get(`${productUrl}/products/Category/${CatagoryName}`)
      .then((res) => {
        setResults(res.data)
setIsloading(false)

      })
      .catch((error) => {
        console.log(error)
setIsloading(false)

      })
  }, [CatagoryName])

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/ {CatagoryName}</p>
        <hr />
        {isLoading?(<Loader/>):( <div className={classes.product_container}>
          {results?.map((product) => (
            <ProductCard key={product.id} product={product} renderAdd={true} renderDesc={false}/>
          ))}
        </div>)}
       
      </section>
    </LayOut>
  )
}

export default Results
