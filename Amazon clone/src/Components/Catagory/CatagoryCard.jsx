import React from 'react'
import classes from '../Catagory/catagory.module.css'
import { Link } from 'react-router-dom'
const CatagoryCard = ({data}) => {
  return (
    <div className={classes.catagory}>
      <Link to={`/Catagory/${data.name}`}>
        <span>
            <h2>{data.title}</h2>
        </span>
        <img src={data.imageLink} alt="" />
      </Link>
      <div className={classes.shop}>
      <Link to="" >Shop now</Link>
      </div>
      
    </div>
  )
}
export default CatagoryCard
