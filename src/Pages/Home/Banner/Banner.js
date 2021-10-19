import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner text-left pl-16">
            <h2 className="text-6xl font-bold text-gray-700">Health & Doctor</h2>
            <p className="text-xl w-3/5 py-8 text-gray-500">
                Finding out what good hospital care looks like can help you to make choices about your care. It can also help you understand what you should be able to expect from a service you already use.
            </p>
            <div>
                <HashLink to="/home#services">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
                        <i className="fas fa-hand-holding-medical mr-3"></i> Our Services
                    </button>
                </HashLink>
            </div>
        </div>
    );
};

export default Banner;