
import React from 'react'
import { Product, ProductCard } from "./CardStyles"
export const Card = (props) => {
  return (

    <Product>
        <ProductCard key={props.id}>
            <img src={props.imagem} alt="" className='image' />
             <h2>{props.madruguinha}</h2>

       



        </ProductCard>
        
        </Product>
  )
}
