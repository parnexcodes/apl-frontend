import React from 'react'
import Slider from '../components/Slider'

function mytest() {
  return (
    <>
    <div className='grid grid-cols-2'>
    <div>
    <Slider />
    </div>
    <div className='mt-32'>
    <div className="container bg-gray-700/40 w-[450px] h-96 rounded-md mt-4 shadow-md shadow-current">
            <div className="grid grid-cols-3 p-4">
              <div>
                <img
                  className="mt-6 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                  src={`teamlogos/Arsenic.png`}
                  alt=""
                />
                <p className="text-center m-2 text-slate-50 font-bold text-2xl">
                  A
                </p>
                <p className="text-center text-slate-50 text-xl">23</p>
              </div>
              <div className="flex justify-center mt-10">
                <h1 className="mt-5 text-4xl text-white font-bold">V/S</h1>
              </div>
              <div>
                <img
                  className="mt-6 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                  src={`teamlogos/Vertex.png`}
                  alt=""
                />
                <p className="text-center m-2 text-slate-50 font-bold text-2xl">
                  B
                </p>
                <p className="text-center text-slate-50 text-xl">47</p>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <p className="text-center text-slate-50 font-semibold text-xl">
                asdad
              </p>
            </div>
          </div>        
    </div>
    </div>
    </>
  )
}

export default mytest