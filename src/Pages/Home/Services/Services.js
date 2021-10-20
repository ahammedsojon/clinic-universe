import React from 'react';
import useServices from '../../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div id="services" className="pt-20 px-16">
            < div >
                <h2 className="pb-4 border-b-4 border-green-500 inline-block text-4xl">Our Services</h2>
                <p className="text-lg w-3/5 py-4 text-gray-400 mx-auto">It is our pride to mention that our consultants have authority on their respective area of expertise with European and North American degrees.</p>
            </div >
            {
                services.length === 0 ? <div className=" flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div> :
                    <div className="">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4">
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