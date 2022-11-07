import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const { _id, title, price } = useLoaderData();


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = form.email.value;
        const phone = form.phone.value;
        const address = form.address.value;

        console.log(name, email, phone, address);

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            address
        }
    }

    return (
        <div className='container'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center w-full">
                    <div className='md:w-3/4'>
                        <div className="card border bg-white w-full mb-5">
                            <div className="card-body">
                                <h2 className='text-3xl font-bold'>Order service: {title}</h2>
                                <h3 className='text-2xl font-semibold text-orange-600'>Price: ${price}</h3>
                            </div>
                        </div>
                        <div className="card border bg-white">
                            <form className="card-body" onSubmit={handleSubmit}>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="form-control">
                                        <input type="text" name='firstName' defaultValue={user.displayName} className='input input-bordered' placeholder='First Name' />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name='lastName' className='input input-bordered' placeholder='Last Name' />
                                    </div>
                                    <div className="form-control">
                                        <input type="email" name='email' defaultValue={user.email} className='input input-bordered' placeholder='Email' readOnly />
                                    </div>
                                    <div className="form-control">
                                        <input type="text" name='phone' className='input input-bordered' placeholder='Phone' />
                                    </div>
                                </div>
                                <div className="form-control my-4">
                                    <textarea name="address" className='textarea textarea-bordered' placeholder='address' rows="10"></textarea>
                                </div>
                                <button className='btn btn-lg'>Order Confirm</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;