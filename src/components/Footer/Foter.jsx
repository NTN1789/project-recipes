
import Instagram from"../../assets/images/insta.png"
import Facebook from"../../assets/images/Facebook.png"
import Pinterest from"../../assets/images/pinterest.png"
import Twitter from"../../assets/images/Twitter.png"

import* as S from "./FooterStyles"
import { GlobalStyle } from "../../style/Global"

const Foter = () => {
  return (
    <div>
        <GlobalStyle/>
        <S.Footer>
                <S.IconsBox>
                 <S.Icones src={Instagram}/>   
                 <S.Icones src={Facebook}/>   
                 <S.Icones src={Pinterest}/>   
                 <S.Icones src={Twitter}/>
                
                </S.IconsBox>
                <S.Navigation>
                    <ul>
                        <li>ABOUT</li>
                        <li>RECIPES</li>
                        <li>SUBSCRIBE</li>
                    </ul>
                </S.Navigation>
            </S.Footer>


    
      
      </div>
  )
}

export default Foter