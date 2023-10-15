import React from 'react'

interface props {
  userRequest : string
}

const MessageDisplay = ({userRequest} : props) => {

  return (
    <div className='w-full flex flex-row items-center my-1 px-3 bg-neutral-100 rounded py-1 font-medium '>
      <div className='w-2 h-2 bg-neutral-950 mr-2 rounded-full'></div>
      <div>
        {userRequest}
      </div>
    </div>
  )
  
}

export default MessageDisplay
