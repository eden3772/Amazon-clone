import React from 'react';
import { catagoryInfo } from "./Catagoryinfo";
import CatagoryCard from './CatagoryCard';
import classes from '../Catagory/catagory.module.css'
const Catagory = () => {
  return (
    <section className={classes.catagory_container}>
      {
        catagoryInfo.map((info, index) => (
          <CatagoryCard key={index} data={info} />
        ))
      }
    </section>
  );
}

export default Catagory;
