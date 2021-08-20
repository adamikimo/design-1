import { useState, useRef } from 'react';
const useScrollAnimation = () => {// componentRef: React.MutableRefObject<HTMLDivElement | undefined>, setAnimate: React.Dispatch<React.SetStateAction<boolean>>) => {
    const [animate, setAnimate] = useState<boolean>(false);
    const componentRef = useRef<HTMLDivElement>();
    window.addEventListener('scroll', () => {
        const top = componentRef.current?.getBoundingClientRect().top;
        if(top! < window.innerHeight){
            setAnimate(true);
        }
    });
    return {
        animate,
        componentRef    
    }
}

export default useScrollAnimation;