import React from 'react'
import WeekSpends from './WeekSpends'

const SpendingSheet = () => {
    return (
        <section className='bg-white mt-4 p-8 rounded-lg shadow-md shadow-gray-300'>
            <h2 className='font-bold text-2xl'>Spending - Last 7 Days</h2>

            <WeekSpends />
            <hr />


            <h3 className='text-medium-brown text-[14px] mt-6'>Total this month</h3>

            <section className='flex justify-between items-center mt-1'>
                <h2 className='font-bold text-4xl'>$478.33</h2>
                <div className='text-right text-sm'>
                    <h4 className='font-bold'>+2.4%</h4>
                    <h5 className='text-medium-brown'>from last month</h5></div>
            </section>

        </section>

    )
}

export default SpendingSheet