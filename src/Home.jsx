import React, { useReducer, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "./Components/Toast";
const toastReducer = (state, action) => {
  switch (action) {
    case "Show":
      return {
        visibility: true,
        toastTitle: "Please enter name or email id to Join Meeting.",
      };

    case "Hide":
      return {
        visibility: false,
        toastTitle: "",
      };
  }
};
const ToastInit = { visibility: false, toastTitle: "" };

function Home() {
  const [roomId, setRoomId] = useState("");
  const inputElement = useRef();
  const [toast, toastDispatch] = useReducer(toastReducer, ToastInit);
  const navigate = useNavigate();

  const handleJoin = () => {
    if (roomId != "") navigate(`/room/${roomId}`);
    else {
      toastDispatch("Show");
      console.log(inputElement);
      inputElement.current.className += " border-red-600";
    }
  };
  const hideToast = () => {
    toastDispatch("Hide");
  };
  setTimeout(() => {
    toastDispatch("Hide");
  }, 8000);
  return (
    <>
      <Toast {...toast} hideToast={hideToast} />
      <div className="mx-auto my-5  flex justify-center">
        <input
          ref={inputElement}
          value={roomId}
          type="text"
          onChange={(e) => {
            setRoomId(e.target.value);
          }}
          className="border   w-1/3 rounded p-2 bg-white dark:bg-gray-900 dark:text-white"
          placeholder="Enter Name or Email to Join Meeting"
        />
        <button
          onClick={handleJoin}
          className="border rounded p-2 bg-sky-600 dark:bg-white  text-gray-900 px-5 ml-2"
        >
          Join Meeting
        </button>
      </div>
    </>
  );
}

export default Home;
