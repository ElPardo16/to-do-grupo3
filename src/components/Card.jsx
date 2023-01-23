import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import {
  MdOutlineDelete,
  MdCropSquare,
  MdOutlineDoneOutline,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { setTask } from "../utils/taskSlice";
import { getData } from "../utils/tools";

//dispatch allows us to execute functions that change the global status 

const Card = ({ task, type = 1 }) => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);

  // With the check status we know if the function is checked 
  // or not to run the animation, we have a reference which is the 
  // paragraph, pRef is the reference of the paragraph to be 
  // able to edit it by double clicking 

  const pRef = useRef(null);
  let { _id, title } = task;
  const checkHandler = async _ => {
    setCheck(!check);
    gsap.to(pRef.current.parentElement, {
      /* scaleX: 0, */
      scale: 0,
      duration: .4,
    });
    
    // after checking it makes a request to update data with the fetch and 
    // changes the status of the task, and updates the status of the list to update the list again 

    const json = await updateData();
    console.log(json);
    const newList = await getData()

    setTimeout(_ => {
      dispatch(setTask(newList))
    }, 400)
  };

  // deletehanlder makes a request to update data but not to
  //  delete, changing the status to place in the deleted list. 

  const deleteHandler = async () => {
    const json = await updateData(2);
    console.log(json);

    const newList = await getData()
    dispatch(setTask(newList))
  };

  // enterHandler captures when enter is given which detects the code of the 
  // letter enter, where we prevent the default behavior, then we take in title
  // and assign it what is in the paragraph to update the data. 

  const enterHandler = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("enter")
      title = pRef.current.textContent
      updateData()
    }
    // saves the data and passes it to the database by detecting the onBlur event 
  };
  const editHandler = e => {
    title = pRef.current.textContent
    updateData()

    // double-click, make the paragraph editable, telling it which one is selected 
    // and moving the cursor to the end of the text, then focus it. 

  };
  const dcHandler = _ => {
    pRef.current.contentEditable = true;
    window.getSelection().selectAllChildren(pRef.current);
    window.getSelection().collapseToEnd();
    pRef.current.focus();
  };

  // deactivate that the paragraph is editable and make the request to the appi from 
  // the front, we pass the cut path, we send a json and the body is the json that is 
  // sent, which has to be a string to be able to send it. then the response is saved, 
  // which is what the server sends back to us. 

  const updateData = async (status = 1) => {
    pRef.current.contentEditable = false;
    const res = await fetch(`/api/task/${_id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        status,
      }),
    });

    return await res.json();
  }

  // is only executed when rendering the first time and the paragraph is assigned the value of the prop since it is editable. 

  useEffect((_) => {
    pRef.current.textContent = title;
  }, []);

  return (
    <div className={`card ${type === 1 && "check"}`} onDoubleClick={dcHandler}>
      <p ref={pRef} onBlur={editHandler} onKeyDown={enterHandler}></p>
      {type === 0 &&
        (check ? (
          <MdOutlineDoneOutline size={40} />
        ) : (
          <MdCropSquare onClick={checkHandler} size={40} />
        ))}
      {type === 0 && <MdOutlineDelete onClick={deleteHandler} size={40} />}
    </div>
  );
};

export default Card;