import React from 'react'

const MyBalance = () => {
    return (
        <header className='flex justify-between py-3 px-4 bg-soft-red text-white rounded-lg items-center shadow-md shadow-gray-300'>
            <div>
                <h6 className='text-[]'>My balance</h6>
                <h3 className='text-lg'>$921.48</h3>
            </div>
            <div className='h-8 w-8 rounded-full bg-dark-brown '>
                <div className='border-2 border-white h-8 w-8 rounded-full relative -left-1/2 '></div>
            </div>
        </header>
    )
}

export default MyBalance