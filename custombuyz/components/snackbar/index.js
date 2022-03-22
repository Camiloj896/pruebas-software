import React, { useState } from 'react';

const SnackBar = ({type, msj}) => {

    const [show, setShow] = useState(true);
    console.log();
    const styleColor = type === 'success' ? 'bg-green-100 border-green-400 text-black-700' : 'bg-red-100 border-red-400 text-red-700';
    const styleButton = type === 'success' ? 'text-green-700' : 'text-red-500';
    const showSnack = show ? 'block' : 'hidden';

    const handleShow = () => {
        setShow(!show)
    }
    
    return (
        <div className={`${showSnack}`}>
            <div className={`flex flex-wrap border ${styleColor} px-4 py-3 rounded relative`} role="alert">
                <strong className="block sm:inline">{msj}</strong>
                <span className="">
                    <svg 
                        className={`fill-current h-6 w-6 ${styleButton}`}
                        role="button"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        onClick={handleShow}
                    >
                        <title>Close</title>
                        <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </span>
            </div>
        </div>
    )
}

export default SnackBar;