import Phone from '../assets/phone.png'
import Mail from '../assets/mail.png';
import Position from '../assets/position.png';

// the function that handles getting the correct icon
const useFooterIconLinkImg = (iconName: "phone" | "mail" | "position") => {
    if(iconName === "phone"){
        return{
            img: Phone
        }
    } else if(iconName === "mail"){
        return{
            img: Mail
        }
    } else if(iconName === "position"){
        return{
            img: Position
        }
    }
}

export default useFooterIconLinkImg;