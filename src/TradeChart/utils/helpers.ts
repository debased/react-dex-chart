import { useEffect } from "react";

export const useHandleClickOutside = (ref: any, fnc: any) => {
    useEffect(() => {
        if(ref === null) throw new TypeError("Reference not set");
        const mouseAway = (e: Event) => {
            
            if(ref.current && !ref.current.contains(e.target)){
                fnc();
            }
        }

        document.addEventListener('mousedown', mouseAway)
        return () => {
            document.removeEventListener('mousedown', mouseAway);
        }
    }, [ref]);
}