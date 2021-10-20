import React, { createContext } from 'react';
import { useState } from 'react/cjs/react.development';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const [appointments, setAppointments] = useState([]);
    console.log(allContext)
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;