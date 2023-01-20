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
  const { _id, title } = task;
  const checkHandler = (_) => {
    setCheck(!check);
    gsap.to(pRef.current.parentElement, {
      scaleX: 0,
      duration: 0.6,
    });
  };
  const saveData = async (_) => {
    pRef.current.contentEditable = false;
    const res = await fetch("/api/task", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        status: 1,
      }),
    });
    const json = await res.json();
    console.log(json);
  };
  const deleteHandler = async () => {
    const res = await fetch(`/api/task/${_id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        status: 2,
      }),
    });

    const json = await res.json();
    console.log(json);
    
    const newList = await getData()
    dispatch(setTask(newList))
  };

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      saveData();
    }
  };
  const dcHandler = (_) => {
    pRef.current.contentEditable = true;
    window.getSelection().selectAllChildren(pRef.current);
    window.getSelection().collapseToEnd();
    pRef.current.focus();
  };

  useEffect((_) => {
    pRef.current.textContent = title;
  }, []);

  return (
    <div className="card" onDoubleClick={dcHandler}>
      <p ref={pRef} onBlur={saveData} onKeyDown={enterHandler}></p>
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

{
  /* <MdOutlineDoneOutline size={40}/> */
}
