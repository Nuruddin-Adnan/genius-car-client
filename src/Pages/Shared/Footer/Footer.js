import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg'
import { AiFillLinkedin, AiOutlineGoogle, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='bg-[#151515] text-[#fff]'>
            <footer className="footer p-10 container">
                <div>
                    <img src={logo} alt="logo" />
                    <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
                    <div className='flex'>
                        <Link className='w-9 h-9 text-sm bg-[#2C2C2C] hover:bg-orange-600 rounded-full m-1 grid place-content-center' to='/'><AiOutlineGoogle></AiOutlineGoogle></Link>
                        <Link className='w-9 h-9 text-sm bg-[#2C2C2C] hover:bg-orange-600 rounded-full m-1 grid place-content-center' to='/'><AiOutlineTwitter></AiOutlineTwitter></Link>
                        <Link className='w-9 h-9 text-sm bg-[#2C2C2C] hover:bg-orange-600 rounded-full m-1 grid place-content-center' to='/'><AiOutlineInstagram></AiOutlineInstagram></Link>
                        <Link className='w-9 h-9 text-sm bg-[#2C2C2C] hover:bg-orange-600 rounded-full m-1 grid place-content-center' to='/'><AiFillLinkedin></AiFillLinkedin></Link>
                    </div>
                </div>
                <div>
                    <span className="footer-title">About</span>
                    <Link to='/' className="link link-hover">Home</Link>
                    <Link to='/' className="link link-hover">Service</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">Why Car Doctor</Link>
                    <Link to='/' className="link link-hover">About</Link>
                </div>
                <div>
                    <span className="footer-title">Support</span>
                    <Link to='/' className="link link-hover">Support Center</Link>
                    <Link to='/' className="link link-hover">Feedback</Link>
                    <Link to='/' className="link link-hover">Accesbility</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;