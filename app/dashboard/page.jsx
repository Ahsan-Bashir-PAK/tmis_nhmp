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
                            <li className='pl-5 bg-slate-200  mb-1 mt-2 hover:bg-white cursor-pointer border-r-2 border-indigo-500'>Advance Class Course</li>
                            <li className='pl-5 bg-slate-200  mb-1 hover:bg-white cursor-pointer border-r-2 border-indigo-500'>Upper Class Course</li>
                            <li className='pl-5 bg-slate-200  mb-1 hover:bg-white cursor-pointer border-r-2 border-indigo-500'>Lower Class Course</li>
                            <li className='pl-5 bg-slate-200  mb-1 hover:bg-white cursor-pointer border-r-2 border-indigo-500'>Recruit Course</li>
                            <li className='pl-5 bg-slate-200  mb-1 hover:bg-white cursor-pointer border-r-2 border-indigo-500'>Orientation Course</li>
                      </ul>
                  </div>
                </div> 
                 <div className='bg-gradient-to-b from-slate-200  to-gray-100 w-9/12 h-full'>
                    <div className='bg-gradient-to-b from-slate-400 items-center justify-center to-slate-100 w-full h-1/6 flex flex-row p-2 '>
                    <div className='bg-orange-500 rounded-md w-2/12 h-4/6 ml-2 shadow-slate-700 shadow-md p-1'>
                        <span>Advance Course</span>
                        <h4>500</h4>
                    </div> 
                    <div className='bg-red-500  rounded-md w-2/12 h-4/6 ml-2 2 shadow-slate-700 shadow-md'>
                      <h2>Upper Class Course</h2>
                      <h2>1000</h2>
                    </div> 
                    <div className='bg-white rounded-md w-2/12 h-4/6 ml-2 2 shadow-slate-700 shadow-md'>
                    <h2>Lower Class Course</h2>
                    <h2>2500</h2>
                    </div> 
                    <div className='bg-green-600 rounded-md w-2/12 h-4/6 ml-2 2 shadow-slate-700 shadow-md'>
                    <h2>Probationer Course</h2>
                    <h2>4000</h2>
                    </div>
                    <div className='bg-black rounded-md w-2/12 h-4/6 ml-2 2 shadow-slate-700 shadow-md'>
                    <h2 className='text-white'>Recruite Course</h2>
                    <h2 className='text-white'>5000</h2>
                    </div>
                    <div className='bg-yellow-300 rounded-md w-2/12 h-4/6 ml-2 2 shadow-slate-700 shadow-md'>
                    <h2>Orientation Course</h2>
                    <h2>8000</h2>
                    </div>
                    </div> {/*end of Header Area*/}
                    {/* Container Area */}
                    <div className='bg-white w-full h-full flex flex-row'>
                        <div className='bg-blue-400 w-3/12 h-3/6 flex flex-row border-black m-1 '>
                          <div className=' w-full bg-slate-200'>
                             <h6 className='bg-orange-600 p-1 text-white text-center'>Advance Class Course</h6>
                             <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul>
                            </div>
                        </div>
                        
                        <div className='bg-blue-400 w-3/12 h-3/6 flex flex-row border-black m-1 '>
                          <div className=' w-full bg-slate-200'>
                             <h6 className='bg-red-600 p-1 text-white text-center'>Upper Class Course</h6>
                             <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul>
                            </div>
                        </div>

                        <div className='bg-blue-400 w-3/12 h-3/6 flex flex-row border-black m-1 '>
                          <div className=' w-full bg-slate-200'>
                             <h6 className='bg-green-600 p-1 text-white text-center'>Probationer Class Course</h6>
                             <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul>
                            </div>
                        </div>
                      
                        <div className='bg-blue-400 w-3/12 h-3/6 flex flex-row border-black m-1 '>
                          <div className=' w-full bg-slate-200'>
                             <h6 className='bg-black p-1 text-white text-center'>Recruite Course</h6>
                             <ul>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Nominatation: 30</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Total Arrival: 27</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Not Reported: 03</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Repatriated: 02</li>
                                <li className='pl-1 border-slate-100 border-b-2 mb-1 hover:font-bold hover:bg-slate-200  hover:rounded-md cursor-pointer'>Present: 25</li>
                             </ul>
                            </div>
                        </div>
                        {/* End Container Area */}
                    </div>
                 </div>        
              </div>     
          </div>

    </div>
  )
}

export default Dashboard