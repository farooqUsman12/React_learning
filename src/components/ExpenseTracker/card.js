import React from 'react'

function Card({ totalExpense }) {
    return (
        <div className='flex justify-between mx-10 mt-4 border border border-solid'>
            <div className='flex border border-solid p-5 m-5 w-[20%] justify-between'>
                <p>{totalExpense.date}</p>
                <h2 className='ml-4'>{totalExpense.title}</h2>
            </div>
            <div className='border border-solid p-5 m-5'>
                <h5>{totalExpense.price}</h5>
            </div>
        </div>

    )
}

export default Card