import styled from "styled-components";



export const Product = styled.section `
     position: relative;
    top: 28vh;
    display: flex;
    justify-content: space-evenly;
    padding:10px 10px;
    overflow:hidden;
    width: 100%;
    height: 100vh;

 



`


export const ProductCard = styled.figure `
display: flex;
flex-direction: column;
align-items: center;
overflow: hidden;
width: 28.5vw;
height: 75vh;
background-color: #ffff;
box-shadow:  0px  4px  5px   grey;


p{
  display: flex;
  justify-content:center;
  align-items: center;
  height:22vh;
 
  text-align: center;
  font-size:2.5rem
}

`

export const Images = styled.img`
height: 40vh;


`







