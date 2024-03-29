import React from "react";
import Chats from "../components/chat";
import Sidebar from "../components/sidebar";
import './../app.scss'
const home =()=>{
    return(
        <div className="home">
            <div className="container">
            <Sidebar/>
            <Chats/>
            </div>
            
        
        </div>
            
    );
}
export default home;