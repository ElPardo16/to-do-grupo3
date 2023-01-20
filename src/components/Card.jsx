import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import {MdOutlineDelete, MdCropSquare, MdOutlineDoneOutline} from 'react-icons/md'

const Card = ({title, type = 1}) => {
  const [check, setCheck] = useState(false)
  const pRef = useRef(null)
  const checkHandler = _ => {
    setCheck(!check)
    gsap.to(pRef.current.parentElement, {
      scaleX: 0,
      duration: .6
    })
  }
  const saveData = async _ => {
    pRef.current.contentEditable = false
    const res = await fetch('/api/task', {
      method:"POST",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      body: JSON.stringify( {
          title,
          status: 1
      })
  })
  const json = await res.json()
  console.log(json)
  }
  const enterHandler = e => {
    if(e.key === "Enter"){
      e.preventDefault()
      saveData()
    }
  }
  const dcHandler = _ => {
    pRef.current.contentEditable = true
    window.getSelection().selectAllChildren(pRef.current)
    window.getSelection().collapseToEnd()
    pRef.current.focus()
  }
  useEffect(_ => {
    pRef.current.textContent = title
  },[])

  return (
    <div className='card' onDoubleClick={dcHandler}>
        {type===0 && ( check ? <MdOutlineDoneOutline size={40}/> : <MdCropSquare onClick={checkHandler} size={40}/> )}
        <p ref={pRef} onBlur={saveData} onKeyDown={enterHandler}></p>
        {type===0 && <MdOutlineDelete size={40}/>}
    </div>
  )
}

export default Card


{/* <MdOutlineDoneOutline size={40}/> */}

