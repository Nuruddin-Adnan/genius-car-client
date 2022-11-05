import React from 'react';
import aboutImg from '../../../assets/images/about_us/about.png'

const About = () => {
    return (
        <div className='container about py-16'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row xl:px-0">
                    <img src={aboutImg} alt='about us' className="max-w-full lg:w-1/2 lg:pr-14" />
                    <div className='lg:w-1/2'>
                        <h5 className='text-[#FF3811] font-bold text-xl mb-3'>About Us</h5>
                        <h2 className="md:text-5xl text-4xl font-bold text-[#151515]">We are qualified & of experience in this field</h2>
                        <p className="py-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            <br />  <br />  the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                        <button className="btn text-white bg-[#FF3811] border-[#FF3811]">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;