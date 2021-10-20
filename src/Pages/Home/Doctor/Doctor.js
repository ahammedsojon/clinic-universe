import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({ doctor }) => {
    const { id, name, img, specialist } = doctor;
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto cursor-pointer transform scale-90 hover:scale-100 transition duration-500">
            <img className="w-full" src={img} alt="Sunset in the mountains" />
            <div className="px-6 py-4 font-semibold">
                <div className="text-xl mb-2 text-gray-700">{name}</div>
                <p className="text-green-900">
                    {specialist}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <div className="flex justify-between bg-gray-200 p-3 text-2xl  text-gray-600 rounded">
                    <span>
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                    </span>
                    <span>
                        <i className="fab fa-facebook" aria-hidden="true"></i>
                    </span>
                    <span>
                        <i className="fab fa-linkedin" aria-hidden="true"></i>
                    </span>
                    <span>
                        <i className="fab fa-skype" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Doctor;