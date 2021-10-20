import React from 'react';

const Contact = () => {
    const handleFormSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className="contact py-8 max-w-6xl mx-auto px-4">
            <h2 className="text-4xl inline-block font-bold text-gray-500 py-3 border-b-4 border-green-500 mb-8">Get in touch with us</h2>
            <div className="lg:flex content-center">
                <div className="lg:w-2/3 sm:3/3 bg-gray-100 px-6 py-2 border-b-2 border-green-500">
                    <div className="text-left mb-4">
                        <h1 className="text-3xl py-3  text-green-500"> Leave a Message</h1>
                        <div className="w-20 h-0.5 bg-gray-500"></div>
                    </div>
                    <form onSubmit={handleFormSubmit}>
                        <div className="md:flex justify-between gap-6">
                            <p className="sm:w-2/2 md:w-1/2">
                                <span className="w-1/6 inline-block bg-green-500 text-center text-white rounded-t-md rounded-r-none rounded-b-none rounded-l-md border-2 border-transparent p-3">
                                    <i className="far fa-user"></i>
                                </span>
                                <input id="fullname" type="text" name="fullname" placeholder="Full Name" autoComplete="given-name" className="inline-block w-5/6 p-3 mt-2 text-gray-700 border-2 border-gray-300 appearance-none focus:outline-none focus:shadow-inner" required />
                            </p>
                            <p className="sm:w-2/2 md:w-1/2">
                                <span className="w-1/6 inline-block bg-green-500 text-center text-white rounded-t-md rounded-r-none rounded-b-none rounded-l-md border-2 border-transparent p-3">
                                    <i className="far fa-envelope"></i>
                                </span>
                                <input id="email" type="email" name="email" placeholder="Email" autoComplete="email" className="inline-block w-5/6 p-3 mt-2 text-gray-700 border-2 border-gray-300 appearance-none focus:outline-none focus:shadow-inner" required />
                            </p>
                        </div>
                        <textarea className="inline-block w-full p-3 my-4 text-gray-700 border-2 border-gray-300 appearance-none focus:outline-none focus:shadow-inner" name="" id="" placeholder="Message" cols="30" rows="6"></textarea>
                        <div className="text-right">
                            <button className="py-2 px-4 text-xl font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Send</button>
                        </div>
                    </form>
                </div>

                <div className="lg:1/3 sm:3/3 pl-5 text-left px-6 py-2">
                    <div className="text-left mb-6">
                        <h1 className="text-3xl py-3  text-green-500">Contact</h1>
                        <div className="w-20 h-0.5 bg-gray-500"></div>
                    </div>
                    <div className="flex border-b-2 border-gray-200 pb-5 mb-5">
                        <span className="inline-block bg-green-500 text-center text-white rounded mr-3 text-xl py-3 px-4">
                            <i className="fas fa-map-marker-alt"></i>
                        </span>
                        <div>
                            <p className="text-gray-600 text-lg">IT Park Jashore</p>
                            <p className="text-gray-600 text-lg">Jashore Khulna Bangladesh</p>
                        </div>
                    </div>
                    <div className="flex border-b-2 border-gray-200 pb-5 mb-5">
                        <span className="inline-block bg-green-500 text-center text-white rounded mr-3 text-xl py-3 px-4">
                            <i className="fas fa-phone-alt"></i>
                        </span>
                        <div>
                            <p className="text-gray-600 text-lg">+88 01956 437242</p>
                            <p className="text-gray-600 text-lg">+88 01731379718</p>
                        </div>
                    </div>
                    <div className="flex border-b-2 border-gray-200 pb-5 mb-5">
                        <span className="inline-block bg-green-500 text-center text-white rounded mr-3 text-xl py-3 px-4">
                            <i className="far fa-envelope"></i>
                        </span>
                        <div>
                            <p className="text-gray-600 text-lg">ahammedsojon000@gmail.com</p>
                            <p className="text-gray-600 text-lg">sajonahmed477@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex justify-between bg-gray-200 p-3 text-2xl  text-gray-600  border-b-2 border-green-500">
                        <span>
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </span>
                        <span>
                            <i className="fab fa-instagram" aria-hidden="true"></i>
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

        </div>
    );
};

export default Contact;