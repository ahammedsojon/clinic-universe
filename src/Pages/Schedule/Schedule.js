import React from 'react';
import useAuth from '../../hooks/useAuth';
import Appointment from '../Appointment/Appointment';

const Schedule = () => {
    const { appointments, user } = useAuth();
    return (
        <div className="min-h-screen max-w-5xl mx-auto px-8 py-8 lg:px-0">
            <h2 className="text-4xl text-gray-500 pb-3 border-b-2 border-green-600 inline-block mb-8 font-semibold">Appointement Schedule</h2>
            <div className="">
                {
                    appointments.map(appointment => <Appointment
                        key={appointment.id}
                        appointment={appointment}
                        user={user}
                    >
                    </Appointment>)
                }
            </div>
        </div>
    );
};

export default Schedule;