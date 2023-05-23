
import { useState, useRef } from "react";
import { useOnHoverOutside } from "./useOnHoverOutside";
import Menu from "../home/menu";
import '../Styles/HeaderStyle.css'

 function Footer() {
  const dropdownRef = useRef(null); // Create a reference for dropdown container
  const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);

  // Function to close dropdown
  const closeHoverMenu = () => {
    setMenuDropDownOpen(false);
  };

  useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook

  return (
    <div className=" header">
      <div className="container">
        <div className="items-center">
          
          <div ref={dropdownRef}>
            <button
              className="text"
              onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
            >
             Industries
            </button>

            {isMenuDropDownOpen && <Menu />} 
          </div>
         
        </div>
        <div className="items-center">
          
          <div ref={dropdownRef}>
            <button
              className="text"
              onMouseOver={() => setMenuDropDownOpen(true)} //use mouseover event to show dropdown
            >
             Industries
            </button>

            {isMenuDropDownOpen && <Menu />} 
          </div>
         
        </div>
        <div className="flex items">
          <a href className="cursor-pointer">
            Login
          </a>
         
        </div>
      </div>
    </div>
  );
}
export default Footer