import React from 'react';

const About = () => {
    return (
        <div className="about lg:container mx-auto p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                <div>
                    <img className="max-w-full h-full object-cover" src="https://i.ibb.co/WFKVbp2/about.jpg" alt="" />
                </div>
                <div className="text-left">
                    <div>
                        <h1 className="text-2xl text-gray-500 py-8">About us</h1>
                        <h1 className="text-6xl text-gray-700 leading-snug font-black">
                            Short Story About Clinic Universe.
                        </h1>
                        <p className="text-gray-500 py-10 w-4/5">
                            It is easy for you to make a complaint or raise a concern. If you do, the hospital takes it seriously, responds quickly and makes any necessary improvements. Providing safe, high-quality, compassionate care is important to the people in charge at every level of the hospital.
                        </p>
                    </div>
                    <div>
                        <div className="flex">
                            <div className="text-red-700 text-4xl mr-8">
                                <i class="fas fa-user-md"></i>
                            </div>
                            <div>
                                <h1 className="text-2xl">Our Mission</h1>
                                <p className="text-gray-500 w-4/5">
                                    You are treated with dignity, kindness and respect and you feel that staff support and care about you. You are involved in decisions about your care and staff spend time talking with you.
                                </p>
                            </div>
                        </div>
                        <div className="flex mt-8">
                            <div className="text-green-700 text-4xl mr-8">
                                <i class="fas fa-stethoscope"></i>
                            </div>
                            <div>
                                <h1 className="text-2xl">Our Vision</h1>
                                <p className="text-gray-500 w-4/5">
                                    Your care, treatment and health condition are explained to you in a way that you can understand.Staff are compassionate when you need help and think ahead to plan what you might need.
                                </p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;