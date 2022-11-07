import React, { useEffect, useState } from 'react';
import { HiArrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services/')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='container services pt-10 pb-20 px-3'>
            <div className="text-center">
                <h5 className='text-[#FF3811] font-bold text-xl mb-3'>Service</h5>
                <h2 className="md:text-5xl text-4xl font-bold text-[#151515]">Our Service Area</h2>
                <p className="py-6 text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6">
                {
                    services.map(service =>
                        <div key={service._id} className="card w-full border">
                            <figure className="px-6 pt-6">
                                <img src={service.img} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body pb-4">
                                <h2 className="card-title text-2xl font-bold text-[#151515]">{service.title}</h2>

                                <div className="card-actions justify-between">
                                    <p className='text-[#FF3811] font-semibold text-xl'>Price: ${service.price}</p>
                                    <Link to={`/checkout/${service._id}`} className="text-[#FF3811] font-semibold text-xl"><HiArrowRight></HiArrowRight></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;