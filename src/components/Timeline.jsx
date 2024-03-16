import React from 'react'
import Search from './Search'
import SubscribeToPremium from './SubscribeToPremium.jsx'
import Trends from './Trends.jsx'


const Timeline = () => {
  return (
    <div>
         <Search/> 
       <SubscribeToPremium/>
        <Trends/>
        <div></div>
   
    </div>
  )
}

export default Timeline
