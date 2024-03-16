import React from 'react'
import ForYou from './ForYou'
import AddTweet from './AddTweet'


const Feed = () => {
  return (
    <div className='flex flex-col'>
      <ForYou/>
      <AddTweet/>
      <div></div>
    </div>
  )
}

export default Feed
