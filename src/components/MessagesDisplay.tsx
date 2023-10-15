import React from 'react'
import MessageDisplay from '@/components/MessageDisplay'

const MessagesDisplay = () => {
  return (
    <div className=' w-full h-1/2 overflow-y-auto'>
      <MessageDisplay userRequest={'Create A table of users'} />     
    </div>
  )
}

export default MessagesDisplay
