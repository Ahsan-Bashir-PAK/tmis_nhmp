import React from 'react'

const Dashboard = () => {
  return (
    <div>
          <div className='border w-screen h-screen'> {/* bg screen */}
              <div className='border  w-11/12 h-full m-auto flex fex-row'>
                <div className='  border-r-2 bg-slate-700 w-3/12 h-full bg-gradient-to-b from-slate-600  to-blue-300 '>
                <div className='border rounded-full w-3/12 h-20 m-auto mt-4 bg-white '>
                     <h2>Name</h2>
                  </div>
                  <div className=' w-10/12 m-auto'>
                      <ul>
                            <li className='pl-5 bg-slate-200  mb-1 mt-2 hover:bg-white cursor-pointer border-r-2 border-indigo-500'>A</li>
                            <li className='pl-5 bg-slate-200  mb-1 hover:bg-white cursor-pointer border-r-2 border-indigo-500'>C</li>
                            <li className='pl-5 bg-slate-200  mb-1 hover:bg-white cursor-pointer border-r-2 border-indigo-500'>D</li>
                            <li className='pl-5 bg-slate-200  mb-1 hover:bg-white cursor-pointer border-r-2 border-indigo-500'>D</li>
                            <li className='pl-5 bg-slate-200  mb-1 hover:bg-white cursor-pointer border-r-2 border-indigo-500'>D</li>
                      </ul>
                  </div>
                </div> 
                 <div className='bg-gradient-to-b from-slate-300  to-gray-100 w-9/12 h-full'>
                    <h1>body </h1>
                 </div>       
              </div>     
          </div>

    </div>
  )
}

export default Dashboard