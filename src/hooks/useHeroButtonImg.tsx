import Learning from '../assets/Learning.png';
import Management from '../assets/Management.png';
import Marketing from '../assets/Marketing.png';
import Programming from '../assets/Programming.png';

// the function that gets the particular img of the inserted props
const useHeroButtonImg = (imgName: "Management" | "Learning" | "Marketing" | "Programming") => {
    if(imgName === "Learning"){
        return{
            img: Learning
        }
    } else if(imgName === "Management"){
        return{
            img: Management
        }
    } else if(imgName === "Marketing"){
        return{
            img: Marketing
        }
    } else if(imgName === "Programming"){
        return{
            img: Programming
        }
    }
}

export default useHeroButtonImg;