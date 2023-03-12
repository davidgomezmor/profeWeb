import {createContext, useState, useContext} from 'react';

export const AppContext = createContext();
export const useMyContext = () => useContext(AppContext);

export const Provider = ({ children }) =>{
    const [name, setName] = useContext("");
    const [surname, setSurname] = useContext("");
    const [email, setEmail] = useContext("");
    const [password, setPassword] = useContext("");
    const [users, setUsers] = useContext([]);
    return (            
            <AppContext.Provider value={[name, setName, surname, setSurname, email, setEmail, password, setPassword, users, setUsers ]}>
                {children}
            </AppContext.Provider>  
    );
}

