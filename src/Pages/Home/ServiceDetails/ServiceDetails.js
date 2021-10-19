import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import Services from '../../../data/data';
import useDoctors from '../../../hooks/useDoctors';
import useServices from '../../../hooks/useServices';

const ServiceDetails = () => {
    const { serviceCategory, serviceId } = useParams();
    const [doctors, setDoctors] = useDoctors();
    const matchedDoctor = doctors.find(service => service.id === +serviceId);
    console.log(doctors)
    const [services, setServices] = useServices();
    console.log(services)
    const matchedService = services.find(service => service.id === +serviceId);
    console.log(matchedService)
    const backgroundImg = {
        backgroundImage: `url(${matchedService?.img})`,
        minHeight: '70vh'
    }
    return (
        <div className="max-w-6xl mx-auto py-8">
            <div className="flex">
                <div className="w-1/2 bg-cover rounded" style={backgroundImg}>
                </div>
                <div className="w-full p-8 lg:w-1/2 text-left">
                    <h2 className="text-4xl mb-4">{matchedService?.name}</h2>
                    <p>{matchedService?.description}</p>
                    <div className="flex mt-8">
                        <img className="w-40 h-40 rounded-full object-cover" src={matchedDoctor?.img} alt="" />
                        <div className="text-left ml-4">
                            <h2 className="text-2xl mb-4">{matchedDoctor?.name}</h2>
                            <p className="text-md text-green-500 font-semibold">{matchedDoctor?.specialist}</p>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;