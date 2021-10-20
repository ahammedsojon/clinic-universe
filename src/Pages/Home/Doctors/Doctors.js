import React from 'react';
import useDoctors from '../../../hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useDoctors();
    return (
        <div id="doctors" className="lg:pt-20 px-16 pb-8">
            < div >
                <h2 className="pb-4 border-b-4 border-green-500 inline-block text-4xl">Our Specialists</h2>
                <p className="text-lg w-3/5 py-4 text-gray-400 mx-auto">You are always asked to give your consent (permission) to your care or treatment. Staff will support you to make decisions if you need them to.</p>
            </div >
            {
                doctors.length === 0 ? <div className=" flex justify-center items-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
                </div> :
                    <div className="">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4">
                            {doctors.map(doctor => <Doctor
                                key={doctor.id}
                                doctor={doctor}
                            ></Doctor>)}
                        </div>
                    </div>
            }
        </div >
    );
};

export default Doctors;