import React from 'react';

const Appointment = ({ appointment, user }) => {
    const { name, img, specialist, time } = appointment;
    const { displayName, photoURL, email } = user;
    return (
        <div className="border-2 border-green-600 p-4 bg-gray-200">
            <h2 className="text-2xl text-red-800 font-semibold">Visiting Time: {time} </h2>
            <div className="md:flex">
                <div className="sm:2/2 md:w-1/2 border-r-2 md:border-gray-500">
                    <h2 className="text-4xl text-green-500 pb-2 text-left">
                        Doctor
                    </h2>
                    <div className="w-20 h-0.5 bg-gray-500"></div>
                    <div className="flex mt-4 items-center">
                        <div className="mr-8">
                            <img className="w-40 h-40 rounded-full object-cover" src={img} alt="" />
                        </div>
                        <div className="text-left">
                            <h2 className="text-2xl font-semibold text-gray-500">{name}</h2>
                            <h2 className=" text-green-800 font-semibold">Specialist: {specialist}</h2>
                        </div>
                    </div>
                </div>
                <div className="sm:2/2 md:w-1/2 pl-4">
                    <h2 className="text-4xl text-green-500 pb-2 text-right">
                        Paitetnt
                    </h2>
                    <div className="w-20 h-0.5 bg-gray-500 ml-auto"></div>
                    <div className="flex mt-4 items-center">
                        <div className="text-left">
                            <h2 className="text-2xl font-semibold text-gray-500">{displayName}</h2>
                            <h2 className="text-green-800 font-semibold">Email: {email}</h2>
                        </div>
                        <div className="ml-auto">
                            <img className="w-40 h-40 rounded-full object-cover" src={photoURL} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;