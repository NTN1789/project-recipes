import React from 'react'
import { Container, Navigation, Slogan } from "./HeaderStyle"
import Logo from "../../assets/images/RC.png"
import { GlobalStyle } from '../../style/Global'


const Header = () => {
  return (
    <>
    <GlobalStyle/>
    <Container>
        <img src={Logo} alt="" />
        <Navigation> 
        <ul>
            <li>about</li>
            <li>Recipes</li>
            <li>SUBSCRIBE</li>
            </ul>
        </Navigation>


           
        <Slogan>recipes</Slogan>

        </Container>
</>
  )
}

export default Header