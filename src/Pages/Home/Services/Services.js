import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div id="services" className="sm:py-64 services container mx-auto lg:py-20">
            < div >
                <h2 className="pb-4 border-b-4 border-green-500 inline-block text-4xl">Our Services</h2>
                <p className="text-lg w-3/5 py-4 text-gray-400 mx-auto">You are always asked to give your consent (permission) to your care or treatment. Staff will support you to make decisions if you need them to.</p>
            </div >
            {
                services.length === 0 ? <div className=" flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div> :
                    <div className="">
                        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 mx-auto">
                            {services.map(service => <Service
                                key={service.id}
                                service={service}
                            ></Service>)}
                        </div>
                    </div>
            }
        </div >
    );
};

export default Services;