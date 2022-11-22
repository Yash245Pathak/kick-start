import React from 'react'
import './Brands.css';
import { brand } from '../../data/brands';

const Brands = () => {
  return (
    <div className='brand-box'>
        <h1>Popular Brands</h1>
        <div className="brand-card">
            {brand.map((b)=>{
                return (
                    <div className="brand" key={b.id}>
                        <img src={b.image} alt="" />
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default Brands