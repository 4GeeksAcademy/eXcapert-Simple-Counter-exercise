//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
   
  const counter = {
    digitOne:0,
    digitTwo:0,
    digitThree:0,
    digitFour:0,
    digitFive:0,
    digitSix:0
  };

function SimpleCounter(props) {

  return (
    <div className="container">
      <div className="row row-cols-auto justify-content-center flex-nowrap m-2 p-2 bg-black">
        <div className="col bg-black text-white text-center border border-dark rounded p-3 m-2 p-2 fs-1 fw-bold timer ">
        <i className="far fa-clock"></i>
        </div>
        <div className="col bg-black text-white text-center border border-dark rounded p-3 m-2 p-2 fs-1 fw-bold digitSix">{props.digitSix}</div>
        <div className="col bg-black text-white text-center border border-dark rounded p-3 m-2 p-2 fs-1 fw-bold digitFive">{props.digitFive}</div>
        <div className="col bg-black text-white text-center border border-dark rounded p-3 m-2 p-2 fs-1 fw-bold digitFour">{props.digitFour}</div>
        <div className="col bg-black text-white text-center border border-dark rounded p-3 m-2 p-2 fs-1 fw-bold digitThree">{props.digitThree}</div>
        <div className="col bg-black text-white text-center border border-dark rounded p-3 m-2 p-2 fs-1 fw-bold digitTwo">{props.digitTwo}</div>
        <div className="col bg-black text-white text-center border border-dark rounded p-3 m-2 p-2 fs-1 fw-bold digitOne">{props.digitOne}</div>
      </div>
    </div>
  );
};


setInterval(()=>{
  counter.digitOne=(counter.digitOne+1);
  counter.digitTwo=(counter.digitOne);
  counter.digitThree=(counter.digitOne);
  counter.digitFour=(counter.digitOne);
  counter.digitFive=(counter.digitOne);
  counter.digitSix=(counter.digitOne);
  // digitTwo={Math.floor(counter.digitTwo/10)%10}

    ReactDOM.render(
      <SimpleCounter 
        digitOne={counter.digitOne%10} 
        digitTwo={Math.floor(counter.digitTwo/10)%10} 
        digitThree={Math.floor(counter.digitThree/100)%10} 
        digitFour={Math.floor(counter.digitFour/1000)%10} 
        digitFive={Math.floor(counter.digitFive/10000)%10} 
        digitSix={Math.floor(counter.digitSix/100000)%10} />, 
      document.querySelector("#app"))
    },1000);

