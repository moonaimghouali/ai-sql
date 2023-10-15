import React from 'react'

const CodeDisplay = () => {
  return (
    <div className='w-1/2 h-full rounded bg-neutral-50 border border-neutral-100'>

          <div className='w-full flex flex-row items-center gap-3 p-2 bg-white border-b border-neutral-100'>
            <div className='flex felx-row gap-2'>
              <div className='w-3 h-3 rounded-full bg-red-500'></div>
              <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
              <div className='w-3 h-3 rounded-full bg-green-500'></div>
            </div>
            <div className='text-xl font-semibold'>SQL</div>
          </div>

          <div className='w-full h-max p-2'>
            sql code
          </div>

        </div>
  )
}

export default CodeDisplay
