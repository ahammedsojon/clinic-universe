import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="py-16">
            <div>
                <img className="max-w-full w-2/5 mx-auto" src="https://i.ibb.co/YRY23nR/404.jpg" alt="" />
            </div>
            <div>
                <Link to="/">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;