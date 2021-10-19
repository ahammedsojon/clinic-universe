import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, description, category } = service;
    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto cursor-pointer transform scale-90 hover:scale-100 transition duration-500">
            <img className="w-full" src={img} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base">
                    {description.slice(0, 150)}...
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link to={`/${category}/${id}`}>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Get details</button>
                </Link>
            </div>
        </div>
    );
};

export default Service;