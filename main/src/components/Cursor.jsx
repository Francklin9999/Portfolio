import { useEffect, useRef, useState } from "react";
import './Components.css';

const CURSOR_SPEED = 0.08;

let mouseX = -10;
let mouseY = -10;
let outlineX = 0;
let outlineY = 0;

export default function Cursor() {
  const cursorOutline = useRef();
  const [hoverButton, setHoverButton] = useState(false);

  const animate = () => {
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;

    outlineX = outlineX + distX * CURSOR_SPEED;
    outlineY = outlineY + distY * CURSOR_SPEED;

    cursorOutline.current.style.left = `${outlineX}px`;
    cursorOutline.current.style.top = `${outlineY}px`;
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const mouseEventsListener = document.addEventListener(
      "mousemove",
      function (event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
      }
    );
    const animateEvent = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", mouseEventsListener);
      cancelAnimationFrame(animateEvent);
    };
  }, []);

  useEffect(() => {
    const mouseEventListener = document.addEventListener(
      "mouseover",
      function (e) {
        if (
          e.target.tagName.toLowerCase() === "button" ||
          // check parent is button
          e.target.parentElement.tagName.toLowerCase() === "button" ||
          // check is input or textarea
          e.target.tagName.toLowerCase() === "input" ||
          e.target.tagName.toLowerCase() === "textarea"
        ) {
          setHoverButton(true);
        } else {
          setHoverButton(false);
        }
      }
    );
    return () => {
      document.removeEventListener("mouseover", mouseEventListener);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-outline ${
          hoverButton ? "cursor-outline-hover" : "cursor-outline-default"
        }`}
        ref={cursorOutline}
      ></div>
    </>
  );  
};