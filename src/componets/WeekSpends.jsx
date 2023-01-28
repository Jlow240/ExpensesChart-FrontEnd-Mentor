import React from 'react'

const WeekSpends = () => {
    return (
        <div className='h-48 flex gap-3 justify-center items-end'>

        <div className='w-[40px] text-center'>
            <div className='bg-soft-red h-10 group barProgress'>
                <h4 className='barAmount'>$14.20</h4>
            </div>
            <h6 className='text-medium-brown text-[12px]'>mon</h6>
        </div>

        <div className='w-[40px] text-center'>
            <div className='bg-soft-red h-20 group barProgress'>
                <h4 className='barAmount'>$32.84</h4>
            </div>
            <h6 className='text-medium-brown text-[12px]'>tue</h6>
        </div>

        <div className='w-[40px] text-center'>
            <div className='bg-cyan h-28 group barProgress'>
                <h4 className='barAmount'>$52.36</h4>
            </div>
            <h6 className='text-medium-brown text-[12px]'>wed</h6>
        </div>

        <div className='w-[40px] text-center'>
            <div className='bg-soft-red h-20 group barProgress'>
                <h4 className='barAmount'>$32.84</h4>
            </div>
            <h6 className='text-medium-brown text-[12px]'>thu</h6>
        </div>

        <div className='w-[40px] text-center'>
            <div className='bg-soft-red h-12 group barProgress'>
                <h4 className='barAmount'>$17.77</h4>
            </div>
            <h6 className='text-medium-brown text-[12px]'>fri</h6>
        </div>

        <div className='w-[40px] text-center'>
            <div className='bg-soft-red h-24 group barProgress'>
                <h4 className='barAmount'>$42.69</h4>
            </div>
            <h6 className='text-medium-brown text-[12px]'>sat</h6>
        </div>

        <div className='w-[40px] text-center'>
            <div className='bg-soft-red h-14 group barProgress'>
                <h4 className='barAmount'>$19.11</h4>
            </div>
            <h6 className='text-medium-brown text-[12px]'>sun</h6>
        </div>


    </div>
    )
}

export default WeekSpends