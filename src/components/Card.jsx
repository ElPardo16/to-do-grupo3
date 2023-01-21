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

const Card = ({ task, type = 1 }) => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const pRef = useRef(null);
  let { _id, title } = task;
  const checkHandler = async _ => {
    setCheck(!check);
    gsap.to(pRef.current.parentElement, {
      /* scaleX: 0, */
      scale: 0,
      duration: .4,
    });

    const json = await updateData();
    console.log(json);
    const newList = await getData()

    setTimeout(_ => {
      dispatch(setTask(newList))
    }, 400)
  };
  const deleteHandler = async () => {
    const json = await updateData(2);
    console.log(json);

    const newList = await getData()
    dispatch(setTask(newList))
  };

  const enterHandler = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("enter")
      title = pRef.current.textContent
      updateData()
    }

  };
  const editHandler = e => {
    title = pRef.current.textContent
    updateData()

  };
  const dcHandler = _ => {
    pRef.current.contentEditable = true;
    window.getSelection().selectAllChildren(pRef.current);
    window.getSelection().collapseToEnd();
    pRef.current.focus();
  };
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