import CodeDisplay from '@/components/CodeDisplay'
import MessagesDisplay from '@/components/MessagesDisplay'

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center bg-white justify-center py-8 ">

      <div className='w-10/12 h-full flex flex-row gap-3'>

        {/* Commands */}
        <div className='w-1/2 h-full rounded flex flex-col gap-3'>
          <MessagesDisplay />
          
          <div className='w-full h-1/2 flex flex-col gap-3 '>
            <textarea className='w-full h-full border border-neutral-200 rounded-md p-3' name="user-request" id="user-request" cols={30} rows={10} placeholder='Ask the AI assistant to help you with your SQL problem.'></textarea>
            <div className='w-full flex gap-3 '>
              <button className='w-full rounded-md py-2 borde border-red-500  bg-red-50  hover:bg-red-100 text-red-500 font-semibold text-base transition-all duration-150 ease-out'>Clear Chat</button>
              <button className='w-full rounded-md py-2 borde border-amber-500 bg-amber-50 hover:bg-amber-100 text-amber-500  font-semibold text-base transition-all duration-150 ease-out'>Get Query</button>
            </div>
          </div>

        </div>
        
        {/* Code */}
        <CodeDisplay />

      </div>  

    </main>
  )
}
