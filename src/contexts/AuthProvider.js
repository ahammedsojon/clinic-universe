import React, { createContext } from 'react';
import { useState } from 'react/cjs/react.development';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    const [appointments, setAppointments] = useState([]);
    const handleAppointment = doctor => {
        const newAppointment = [...appointments, doctor];
        setAppointments(newAppointment);
    }
    allContext.handleAppointment = handleAppointment;
    allContext.appointments = appointments;
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;