import React from 'react'
import SettingsIcon from '../icons/SettingsIcon.jsx'


const ForYou = () => {
  return (
  
    
    <div className="flex flex-row border border-y-black/15">
      <div>
        <button className=" h-[53px] w-[274px] mx-auto hover:bg-gray-200">
          For you
        </button>
        <button className=" h-[53px] w-[292px] mx-auto hover:bg-gray-200">
          Following
        </button>
        <button className='h-[53px] w-[54px] mx-auto m'><SettingsIcon/></button>
   
      </div>
    </div>

  
  )
}

export default ForYou
