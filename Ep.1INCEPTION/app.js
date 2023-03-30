// to  bind this to HMTL File = <script src="./index.js"> </script> 
import React from "../node_modules/react";
import ReactDOM from "../node_modules/react-dom/client";

const heading = React.createElement(
    "h1" ,
    { id: "heading" , xyz :"abc" },
        "hellow yyoyoyo" // here hwllo yyoyoy is children going inside to h1 parent and then id , xyz are attr both attr and childs togetherly reprsent the PROPS
);

 
console.log(heading);   // retruns obj as our React.craeteele will create Obj and not Ele
console.log("");

// root.render(heading);

const parent = React.createElement("h1" ,{ id: "1"} ,
      React.createElement("h4" ,{ id: "3"} , 
     " and yeass these are crated by looping off the elemss NKn..aste"
));


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);