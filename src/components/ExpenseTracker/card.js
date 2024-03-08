import React, { useState } from 'react'

function Card({ totalExpense }) {

    const [title, setTitle] = useState(totalExpense.title)

    const changeTitleHandler = () => {
        setTitle('Updated')

    }
    return (
        <div className='flex justify-between mx-10 mt-4 border border border-solid'>
            <div className='flex border border-solid p-5 m-5 w-[20%] justify-between'>
                <p>{totalExpense.date}</p>
                <h2 className='ml-4'>{title}</h2>
            </div>
            <div className='border border-solid p-5 m-5'>
                <h5>{totalExpense.price}</h5>

                <button onClick={changeTitleHandler}> Chnage Title </button>
            </div>
        </div>

    )
}
export default Card