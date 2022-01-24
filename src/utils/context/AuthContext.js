import React, { useEffect, useState } from "react";
import { app } from '../firebase/config';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loader from '../../components/Loader';

const authApp = getAuth(app);

export const Auth = React.createContext();

export const AuthContext = ({ children }) => {
    const [usuario, setUsuario] = useState(null);
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
      onAuthStateChanged(authApp, (user) => {
        setUsuario(user);
        setShowChild(true);
      });
    }, []);
    

    if (!showChild) {
        return <Loader/>;
    } else {
        return (
            <Auth.Provider
                value={{
                    usuario
                }}
            >
                {children}
            </Auth.Provider>
        );
    }
};