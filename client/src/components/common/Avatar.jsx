import React, { useState } from "react";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import ContextMenu from "./ContextMenu";

function Avatar({ type, image, setImage }) {
  const [hover, setHover] = useState(false);
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuCordinates, setContextMenuCordinates] = useState({
    x: 0,
    y: 0,
  });

  // useEffect(() => {
  //   const handleClick = () => setIsContextMenuVisible(false);
  //   document.addEventListener("click", handleClick);
  //   return () => {
  //     document.removeChild("click", handleClick);
  //   };
  // }, []);

  const showContextMenu = (e) => {
    e.preventDefault();
    setContextMenuCordinates({ x: e.pageX, y: e.pageY });
    setIsContextMenuVisible(true);
    console.log("Click", e.pageX, e.pageY);
  };

  const ContextMenuOptions = [
    {
      name: "Take Photo",
      callback: () => {
        console.log("Taking a photo...");
      },
    },
    {
      name: "Take Photo",
      callback: () => {
        console.log("Taking a photo...");
      },
    },
    {
      name: "Take Photo",
      callback: () => {
        console.log("Taking a photo...");
      },
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center">
        {type === "sm" && (
          <div className="relative h-10 w-10">
            <Image src={image} alt="avatar" className="rounded-full" fill />
          </div>
        )}
        {type === "lg" && (
          <div className="relative h-14 w-14">
            <Image src={image} alt="avatar" className="rounded-full" fill />
          </div>
        )}
        {type === "xl" && (
          <div
            className="relative cursor-pointer z-0"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div
              className={`z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex items-center rounded-full justify-center flex-col text-center gap-2 ${
                hover ? "visible" : "hidden"
              }`}
              onClick={(e) => showContextMenu(e)}
              id="context-opener"
            >
              <FaCamera
                className="text-2xl"
                id="context-opener"
                onClick={(e) => showContextMenu(e)}
              />
              <span
                onClick={(e) => {
                  showContextMenu(e);
                  console.log("hey");
                }}
                id="context-opener"
              >
                Change <br /> Profile <br /> Photo
              </span>
            </div>
            <div className="flex items-center justify-center h-60 w-60">
              <Image src={image} alt="avatar" className=" rounded-full" fill />
            </div>
          </div>
        )}
      </div>
      {isContextMenuVisible && (
        <ContextMenu
          options={ContextMenuOptions}
          cordinates={contextMenuCordinates}
          ContextMenu={isContextMenuVisible}
          setContextMenu={setIsContextMenuVisible}
        />
      )}
    </>
  );
}

export default Avatar;
