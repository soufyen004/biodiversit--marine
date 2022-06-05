import React from 'react'
import { Player } from "react-tuby";
import "react-tuby/css/main.css";
import video from '../media/video1.mp4'


function VideoPlayer() {
  return (
    <div className="flex w-100 justify-content-center">
    
    <div className='rounded m-auto w-50 shadow bg-black p-2'>
        <Player src={video} autoplay>
        </Player>
    </div>
        
    </div>
  )
}

export default VideoPlayer