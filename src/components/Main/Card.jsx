
import React from 'react'

export const Card = (props) => {
  return (

    <div>
        <dir key={props.id}>
            <img src={props.imagem} alt="" />
            <h2>{props.madruguinha}</h2>



        </dir>
        
        </div>
  )
}
