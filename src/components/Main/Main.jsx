import React from 'react'
import { ContainerMain, Latest } from "./MainStyles"
import { Card } from './Card'
import Data from "./data"


const Main = () => {
  return (
    <ContainerMain>
        <Latest>LATEST RECIPES  </Latest>
      {Data.map(item => (
        <Card
          key={item.id} 
          imagem={item.image} 
          madruguinha={item.name }
        
      
      
      
        />


      ))}
       
      
      
    

    </ContainerMain>
    
  )
}

export default Main