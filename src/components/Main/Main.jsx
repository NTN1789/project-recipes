import React from 'react'
import { ContainerMain, Latest } from "./MainStyles"
import { Card } from './Card'
import Data from "./data"


const Main = () => {
  return (
    <ContainerMain>
        <Latest>LATEST RECIPES  </Latest>
  
      {Data.map(datas => (
        <Card 
          key={datas.id} 
          imagem={datas.image} 
          madruguinha={datas.name }
        
        />
      ))}
   
      
    

    </ContainerMain>
    
  )
}

export default Main