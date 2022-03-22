import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { EMAIL, PASSWORD_FIELD } from '../../util/formRules';
import loginService from '../../services/login';
import SnackbarPortal from '../../util/snackbarPortal';
import { useRouter } from 'next/router';
import { formErrors } from "../../utils/formErrors";

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [status , setStatus] = useState();

    const router = useRouter();

    const onSubmit = async (data) => {
        const params = {
            email: data.email,
            password: data.password,
        }
        const response = await loginService(params);

        if (response?.statusCode) {
            setStatus({
                snackBarType: 'success',
                snackBarMessage: 'The user has been created'
            })
        } else {
            router.push('/', undefined, { shallow: true })
        }
    };
    
    return (           
        <form className='w-full lg:w-1/2 flex flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
            <span className='text-3xl font-bold my-14'>Welcome to the house</span>
            <div className='w-full px-5 mx-3'>
                <label htmlFor='email' className='block text-md text-black font-bold mb-3'>Email</label>
                <input
                    type='text'
                    className='w-full px-3 py-2 focus:ring-gray-200 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:border-gray-200 focus:ring-1'
                    placeholder='Enter your email or username'
                    { ...register(
                        'email',
                        {
                            required: true,
                            pattern: { value: EMAIL, message: 'This field is required'}
                        }
                    )}
                />
                {errors.email && (
                    <span className="text-red-600 text-sm mt-2">
                        {formErrors(errors.housename)}
                    </span>
                )}
            </div>
            <div className='w-full px-5 mx-3'>
                <label htmlFor='password' className='block text-md font-bold text-black mb-3'>Password</label>
                <input
                    type='password'
                    className='w-full px-3 py-2 focus:ring-gray-200 border border-slate-300 rounded-lg text-sm shadow-sm focus:outline-none focus:border-gray-200 focus:ring-1' 
                    placeholder='Enter your password'
                    { ...register(
                        'password',
                        {
                            required: true,
                        }
                    )}
                />
                {errors.password && (
                    <span className="text-red-600 text-sm mt-2">
                        {formErrors(errors.housename)}
                    </span>
                )}
            </div>

            <div className='w-full px-5 mx-2 mb-8 mt-3'>
                <div className='inline'>
                    <input type='checkbox' name='remember' className='rounded-lg shadow-sm w-4 h-4' />
                    <label htmlFor='remember' className='ml-3 text-black font-bold'>Remember</label>
                </div>
                <div className='font-bold text-md inline float-right cursor-pointer hover:text-gray-400'>
                    Forgot password?
                </div>
            </div>

            <div className='w-full px-5 mx-3 my-3'>
                <button type='submit' className='rounded-lg bg-black text-white w-full px-3 py-2 text-3xs'>
                    Sign in
                </button>
            </div>

            <div className='w-full px-5 mx-3 my-3'>
                <button type='button' className='rounded-lg bg-white w-full px-3 py-2 border border-slate-300'>
                    <span className='mr-3 font-bold'>G</span><span className='text-gray-400'>Sign in with Google</span>
                </button>
            </div>

            <div className='w-full px-5 mx-2 my-3 '>
                <div className='col-span-1 text-gray-400 cursor-pointer hover:underline hover:text-black inline'>
                    Don&apos;t have an account?
                </div>
                <div className='font-bold text-md inline float-right cursor-pointer hover:text-gray-400'>
                    Sing up for free!
                </div>
            </div>
            {status && <SnackbarPortal {...status} />}
        </form>
    )
}

export default LoginForm;