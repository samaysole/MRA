import { useState } from "react";
 import "./Tabs.scss";
import ListCustomerComponent from "./Customer/ListCustomerComponent";
import ListVideosComponent from "./movies/ListVideosComponent";
import ListRentalComponent from "./Rental/ListRentalComponent";



// let btnContainer = document.getElementById("nav");
// let tabs = btnContainer.getElementsByClassName("tabs")

// for(let i = 0; i < tabs.length; i++) {
//   tabs[i].addEventListener('click', function () {
//   let current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace("active");
//   this.className += " active";
// }) 
// }

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="">
      <div className="bloc-tabs">
        <button style={{margin: '0%'}}
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Movies
        </button>
        <button style={{margin: '0%',}}
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         Customer
        </button>
        <button style={{margin: '0%'}}
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        
        >
           Rental
        </button>
      </div>

      <div className="">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <ListVideosComponent />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
          >
           <ListCustomerComponent />

        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
         
         <ListRentalComponent />

        </div>
      </div>
    </div>



  );
  
}

export default Tabs;