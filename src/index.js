import React from "react";
import ReactDOM from "react-dom";
import {MyBooksList} from "./data";
import Book from "./components/Book";






const SingleBook=MyBooksList.map((OneItem)=>{return (<Book key={OneItem.id} {...OneItem}></Book>)});



function OnScreenRender(){
    return (<div>
        {SingleBook}
    </div>)
}

ReactDOM.render(<OnScreenRender/>,document.getElementById("root"));