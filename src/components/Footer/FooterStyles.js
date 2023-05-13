import styled from "styled-components"
export const Footer = styled.footer`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
top: 29vh;
height: 35vh;
width: 100%;
background-color: #F2F4F1;
`
export const Navigation = styled.nav`
ul{
    display: flex;
    justify-content: space-evenly;
    width: 36vw;
    list-style: none;
}
li{
    cursor: pointer;
    font-weight: 500;
    font-size: 17px;
    letter-spacing: 2px;
    font-family: "Questrial", sans-serif;
}
`
export const Icons = styled.div`

display: flex;
justify-content: flex-end;
gap: 10px;
width: 20vw;
`
export const Icones = styled.img`
height: 6vh;
cursor: pointer;
`