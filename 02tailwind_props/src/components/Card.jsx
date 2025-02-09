import React from 'react'

function Card({cardName,btnName}) {
  return (
    <>
        <div className='bg-auto bg-green-100 p-4 h-50 mb-2'>
            <h1 className='text-red'>
                {cardName}
            </h1>
            <button className='mt-10'>{btnName}</button>
        </div>
        
    </>


  )
}

export default Card