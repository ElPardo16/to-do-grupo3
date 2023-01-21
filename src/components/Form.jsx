import gsap, { Expo } from "gsap";
import React, { useRef, useState } from "react";
import { MdAdd } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setTask } from "../utils/taskSlice";
import { getData } from "../utils/tools";

function Form({ funModal }) {
  const [title, setTitle] = useState("");
  const inputRef = useRef(null)
  const dispatch = useDispatch();
  const clickHandler = async e => {
    e.preventDefault();
    if (inputRef.current.value !== "") {
      const res = await fetch("/api/task", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
        }),
      });
      const json = await res.json();
      console.log(json);
      const newList = await getData();
      dispatch(setTask(newList));
      inputRef.current.value = ""
    }else{
      const tl = gsap.timeline({
        duration: .05,
        yoyo: true,
        repeat: 1,
      })
      tl.to(inputRef.current,{
        borderColor: "red",
        borderWidth: 3,
        ease: Expo.easeOut
      })
      console.log("No hay datos")
    }
  };
  return (
    <form action="">
      <p className="delete" onClick={(_) => void funModal(true)}>
        Eliminadas
      </p>
      <label htmlFor="title">Crear Tarea</label>
      <div>
        <input
          ref={inputRef}
          type="text"
          name="title"
          placeholder="Tarea"
          onChange={(e) => void setTitle(e.target.value)}
        />
        <button onClick={clickHandler}>
          <MdAdd size={40} />
        </button>
      </div>
    </form>
  );
}

export default Form;
