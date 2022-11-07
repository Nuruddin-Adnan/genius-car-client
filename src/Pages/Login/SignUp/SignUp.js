import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginImage from '../../../assets/images/login/login.svg';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        setError('');

        const form = event.target;
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        createUser(email, password)
            .then(result => {
                alert('signup successfull');
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
                            {
                                error && <div className="alert alert-error shadow-lg">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span>Error! {error}</span>
                                    </div>
                                </div>
                            }
                            <form onSubmit={handleSubmit}>
                                <h3 className="text-center font-semibold text-4xl">Sing Up</h3>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Your email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Enter password" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" name='confirmPassword' placeholder="Enter password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn text-white bg-[#FF3811] border-[#FF3811]">Sign Up</button>
                                </div>
                            </form>
                            <p className='text-center my-4'>Already have an account ? <Link to='/login' className='font-semibold text-[#FF3811]'>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;