import React from 'react'

export default function Navbar() {
  return (
        <div className='w-[1392px] m-auto h-24'>
          <div className=' bg-white h-12 flex flex-row items-center justify-center pt-3'>
            <div className='flex flex-row items-center w-[992px]'>
              <div className=''><h3>ICON HERE</h3></div>
                <div className='w-[700px] flex justify-between px-6 gap-1'>
                  <input className='w-[580px] my-1 border border-gray-500 focus:bg-white focus:outline-none rounded-[4px] px-3' type="text" name="" id="" placeholder='Bạn tìm gì hôm nay'/>
                  <button className='text-[#0a68ff] p-2 hover:bg-[#CEE1FF] rounded-[4px] w-[100px]'>Tìm kiếm</button>
                </div>
            </div>
            <ul className='flex flex-row items-center justify-between flex-wrap w-[400px] gap-2'>
              <li>Trang chủ</li>
              <li>Astra</li>
              <li>Tui</li>
              <li>Giỏ hàng</li>
            </ul>
          </div>

          <div className='w-[1392px] h-12 flex flex-row items-center justify-between'>
            <div>Lịch sử tìm kiếm</div>
            <div>Địa điểm giao hàng</div>
          </div>
        </div>
  )
}
