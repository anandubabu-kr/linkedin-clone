import { useRef, useEffect } from "react";

/**
 * Custome Hook that alerts clicks outside of the passed ref
 */

const useClickOutSide = (handler) => {
  let componentRef = useRef();
  useEffect(() => {
      let clickHandler = (e) => {
          if (!componentRef.current.contains(e.target)) {
              console.log(componentRef.current.contains(e.target))
              handler()
          }
      }
      document.addEventListener('mousedown', clickHandler)

      return () => {
          document.removeEventListener("mousedown", clickHandler)
      }
  })
  return componentRef
}

export default useClickOutSide;