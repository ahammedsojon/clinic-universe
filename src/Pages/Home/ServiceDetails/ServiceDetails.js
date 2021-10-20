import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useDoctors from '../../../hooks/useDoctors';
import useServices from '../../../hooks/useServices';
import NotFound from '../../NotFound/NotFound';

const ServiceDetails = () => {
    const { serviceCategory, serviceId } = useParams();
    const { handleAppointment } = useAuth();
    const [doctors, setDoctors] = useDoctors();
    const matchedDoctor = doctors.find(service => service.id === +serviceId);
    const [services, setServices] = useServices();
    const matchedService = services.find(service => service.id === +serviceId);
    const backgroundImg = {
        backgroundImage: `url(${matchedService?.img})`,
        minHeight: '70vh'
    }
    return (
        <>
            {
                serviceId <= 6 ? <div className="max-w-6xl mx-auto py-8">
                    <div className="lg:flex">
                        <div className="lg:w-1/2 bg-cover rounded w-2/2 px-8">
                            <img className="max-w-100 w-full" src={matchedService?.img} alt="" />
                        </div>
                        <div className="w-full p-8 lg:w-1/2 w-2/2 text-left">
                            <h2 className="text-4xl mb-4">{matchedService?.name}</h2>
                            <p>{matchedService?.description}</p>
                            <div className="flex items-center mt-8">
                                <div className="mr-4">
                                    <img className="w-40 h-40 rounded-full object-cover" src={matchedDoctor?.img} alt="" />
                                </div>

                                <div>
                                    <table className="table-fixed">
                                        <tbody>
                                            <tr className="flex justify-between space-x-6">
                                                <td className="font-semibold text-red-800 text-xl">Name:</td>
                                                <td className="text-green-800 text-xl font-semibold">{matchedDoctor?.name}</td>
                                            </tr>
                                            <tr className="flex justify-between space-x-6">
                                                <td className="font-semibold text-red-800 text-xl">speciality:</td>
                                                <td className="text-green-800 text-xl font-semibold">{matchedDoctor?.specialist}</td>
                                            </tr>
                                            <tr className="flex justify-between space-x-6">
                                                <td className="font-semibold text-red-800 text-xl">Fees:</td>
                                                <td className="text-green-800 text-xl font-semibold">${matchedDoctor?.fees}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="text-center">
                                <Link to="/schedule">
                                    <button onClick={() => handleAppointment(matchedDoctor)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Appointment</button></Link>
                            </div>
                        </div>
                    </div >
                </div > : <NotFound></NotFound>
            }
        </>
    );
};

export default ServiceDetails;