import React,{createContext,useContext} from 'react';

const countcontext=createContext();

export default function CountContext({children}){
    const[count,setCount]=React.useState(0);

    return(
        <countcontext.Provider value={{count,setCount}}>
            {children}
        </countcontext.Provider>
    );
}

export function useCountContext() {
    return(
        useContext(countcontext)
    );
}