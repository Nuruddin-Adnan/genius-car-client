import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../../assets/images/login/login.svg';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { googleSignup, signIn } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleGoogleSignup = () => {
        setError('');
        googleSignup()
            .then(result => {
                const user = result.user;
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleSubmit = event => {
        event.preventDefault();

        setError('');

        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;

        signIn(email, password)
            .then(result => {
                alert('signin successfull');
                form.reset();
            })
            .catch(error => setError(error.message))


    }

    return (
        <div className='container login py-10'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left lg:w-1/2 lg:block hidden">
                        <img src={loginImage} alt="signup demo" className='max-w-[75%] mx-auto' />
                    </div>
                    <div className="card flex-shrink-0 lg:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                {
                                    error && <div className="alert alert-error shadow-lg">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            <span>Error! {error}</span>
                                        </div>
                                    </div>
                                }
                                <h3 className="text-center font-semibold text-4xl">Login</h3>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="Your email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Enter password" className="input input-bordered" />
                                    <label className="label">
                                        <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn text-white bg-[#FF3811] border-[#FF3811]">Sign In</button>
                                </div>
                            </form>
                            <p className='text-center my-3 text-sm'>Or Sign In with</p>
                            <div className="text-center">
                                <Link className='btn text-xl btn-active btn-ghost btn-circle text-blue-600'><FaFacebookF></FaFacebookF></Link>
                                <Link className='btn text-xl btn-active btn-ghost btn-circle mx-2 text-blue-600'><FaLinkedinIn></FaLinkedinIn></Link>
                                <Link onClick={handleGoogleSignup} className='btn text-xl btn-active btn-ghost btn-circle'><FcGoogle></FcGoogle></Link>
                            </div>
                            <p className='text-center my-4'>New to Genius car <Link to='/signup' className='font-semibold text-[#FF3811]'>Sign In</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;