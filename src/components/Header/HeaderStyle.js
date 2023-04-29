import styled from "styled-components";
import Fundo from  "../../assets//fundo.png"




export const Container = styled.header`


background-image:url(${Fundo});
height:120vh;
background-size:100%;
background-repeat:no-repeat;




ul{
    display:flex;
    align-items:center;
   
    justify-content:space-evenly;
    width:40vw;
    
  

}

li{
    text-transform:uppercase;
    font-size:1.5em;
    list-style:none;
    
}
`

export const Image = styled.img`
width:100%

`

export const Navigation = styled.nav`
height:2vh;
display:flex;
 justify-content:flex-end;
align-items:center;


`



export const Slogan = styled.h1`
  position:absolute;  
  text-align:center;
  margin:auto 0;
  left:35%;
  top:65%;
  font-size:6.5rem;
  text-transform:uppercase;
  letter-spacing:10px ;

`