import styled from "styled-components";


export const BoxSection = styled.section`
position: relative;
top: 35vh;
display: flex;
align-items: center;
justify-content: center;
background-color: #ffff;
height: 100vh;
div{
    display: flex;
    justify-content:space-around;
    top: 2vh;
    height: 60vh;
}
div span{
    position: relative;
    top: -1vh;
    background-color: #373737;
    width: 55px;
    height: 5px;
}

p{
    width: 55%;
}
`
export const Image= styled.img`
position: relative;

height: 98vh;
`



export const Sobre = styled.h3 `
position: relative;
display:flex;
justify-content:flex-end;
align-items:center;
top: -82vh;
left:15vh;


`




export const FormBox = styled.form`
position: relative;
top: 35vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 60vh;
background-color:#DFE4DE ;

gap: 10px;
`

export const Subscribe = styled.p`
font-weight: bold;
font-family: "Reem Kufi Ink", sans-serif;
letter-spacing: 3px;
font-size: 30px;
`
export const Newsletter = styled.p`
font-weight: normal;
font-size: 22px;
letter-spacing: 2px;
font-family: "Reem Kufi Ink", sans-serif;
`
export const Input = styled.input`
font-size: 18px;
padding-left: 20px;
border: none;
height: 11vh;
width: 35vw;
background-color:#EFF1EE;
&:focus{
outline: none;
border: none;
}
&::placeholder{
    font-size: 18px;
}
`
export const Botao = styled.button`
font-family: "Reem Kufi Ink", sans-serif;
font-size: 18px;
font-weight: 900;
letter-spacing: 3px;
position: relative;
top: 14px;
width: 12vw;
height: 8vh;
background-color:transparent;
border: solid;
cursor: pointer;


`