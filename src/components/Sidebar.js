import React from 'react'

export default function Sidebar() {
  return (
    <div className='flex justify-center w-screen h-[calc(100vh-96px)] bg-slate-100'>
        <div className='w-[1392px] h-[100%] flex'>
            <div className='w-[230px] bg-slate-600 h-[100%]'></div>
            <div className='w-[calc(1392px-230px)] bg-slate-300 h-[100%]'></div>
        </div>
    </div>
  )
}
