import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import './Banner.css'

import img1 from '../../../assets/images/homeCarousel/1.jpg';
import img2 from '../../../assets/images/homeCarousel/2.jpg';
import img3 from '../../../assets/images/homeCarousel/3.jpg';
import img4 from '../../../assets/images/homeCarousel/4.jpg';

const Banner = () => {
    useEffect(() => {
        const prev = document.querySelector('.swiper-button-prev');
        const next = document.querySelector('.swiper-button-next');
        prev.innerHTML = `❮`;
        next.innerHTML = `❯`;
        prev.classList.add('btn', 'btn-circle', 'bg-[#FF3811]', 'border-[#FF3811]', 'absolute', 'md:bottom-16', 'bottom-4', 'right-24', 'z-10');
        next.classList.add('btn', 'btn-circle', 'bg-[#FF3811]', 'border-[#FF3811]', 'absolute', 'md:bottom-16', 'bottom-4', 'right-8', 'z-10');
    }, [])
    return (
        <div className='container'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="slider-item relative">
                        <img src={img1} alt="slider img" className='w-full h-full object-cover' />
                        <div className="text-content absolute top-0 left-0 w-full h-full flex items-center p-12 md:p-24 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                            <div className="lg:w-1/2">
                                <h2 className='md:text-6xl text-3xl text-white font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                                <p className='text-lg text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <Link to='/' className='btn text-white bg-[#FF3811] border-[#FF3811] m-3 ml-0'>Discover More</Link>
                                <Link to='/' className='btn btn-outline text-[#fff] border-[#fff]'>Latest Project</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item relative">
                        <img src={img2} alt="slider img" className='w-full h-full object-cover' />
                        <div className="text-content absolute top-0 left-0 w-full h-full flex items-center p-12 md:p-24 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                            <div className="lg:w-1/2">
                                <h2 className='md:text-6xl text-3xl text-white font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                                <p className='text-lg text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <Link to='/' className='btn text-white bg-[#FF3811] border-[#FF3811] m-3 ml-0'>Discover More</Link>
                                <Link to='/' className='btn btn-outline text-[#fff] border-[#fff]'>Latest Project</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item relative">
                        <img src={img3} alt="slider img" className='w-full h-full object-cover' />
                        <div className="text-content absolute top-0 left-0 w-full h-full flex items-center p-12 md:p-24 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                            <div className="lg:w-1/2">
                                <h2 className='md:text-6xl text-3xl text-white font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                                <p className='text-lg text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <Link to='/' className='btn text-white bg-[#FF3811] border-[#FF3811] m-3 ml-0'>Discover More</Link>
                                <Link to='/' className='btn btn-outline text-[#fff] border-[#fff]'>Latest Project</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item relative">
                        <img src={img4} alt="slider img" className='w-full h-full object-cover' />
                        <div className="text-content absolute top-0 left-0 w-full h-full flex items-center p-12 md:p-24 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                            <div className="lg:w-1/2">
                                <h2 className='md:text-6xl text-3xl text-white font-bold'>Affordable <br /> Price For Car <br /> Servicing</h2>
                                <p className='text-lg text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                <Link to='/' className='btn text-white bg-[#FF3811] border-[#FF3811] m-3 ml-0'>Discover More</Link>
                                <Link to='/' className='btn btn-outline text-[#fff] border-[#fff]'>Latest Project</Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;