import React from "react";

import ChatBot from "../components/Widgets/Chatbot";



import {SideMenu,TopMenu} from "../components/DashBoard/Menu"
import Home from "../components/DashBoard/Home"
import Design from "../components/DashBoard/Design"
import Test from "../components/DashBoard/Test"
import Integrate from "../components/DashBoard/Integrate"







export default function DashBoard(){


    return <div className="h-screen">
        
        
    <TopMenu/>
    <div className="flex  w-screen  items-center ">
    <SideMenu />
    <Home/>
    
    </div>

    </div> 
}