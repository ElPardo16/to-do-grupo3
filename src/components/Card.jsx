import React from 'react'
import {MdOutlineDelete, MdCropSquare, MdOutlineDoneOutline} from 'react-icons/md'

const Card = ({title, type=1}) => {



  return (
    <div className='card'>
        {type===0 && ( <MdCropSquare size={40}/> )}
        <p>{title}</p>
        {type===0 && <MdOutlineDelete size={40}/>}
    </div>
  )
}

export default Card


{/* <MdOutlineDoneOutline size={40}/> */}