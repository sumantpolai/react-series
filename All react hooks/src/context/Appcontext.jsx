// first step
import { createContext } from "react";

export const AppContext = createContext();   // when we create then write createContext

const CotextProvider = (props) =>{

    const phone = "6370006029"

    return(
        <AppContext.Provider value={phone}>
            {props.children}
        </AppContext.Provider>
    )
}
export default CotextProvider