
import React from 'react'
import { Images, Product, ProductCard } from "./CardStyles"
export const Card = (props) => {
  return (

    <Product>
        <ProductCard key={props.id}>
            <Images src={props.imagem} alt=""  />
            <span></span>
             <p>{props.madruguinha}</p>

       



        </ProductCard>
        
        </Product>
  )
}
