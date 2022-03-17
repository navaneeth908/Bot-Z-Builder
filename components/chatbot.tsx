import React, { useState } from "react"

export default function Chatbot(){


        const[showBot,setShowBot]=useState(false)


    return <div className=" flex flex-col fixed p-5 right-5 bottom-5 ">

            {showBot&&<div className="flex flex-col   bg-white drop-shadow  border-gray-100">               
                <div className="my-2 flex px-5 py-4">BOTZ</div>



                
                </div>}


                <button className="w-15 items-center bg-blue-700 rounded-full px-4 py-2 " onClick={()=>{
                    setShowBot(!showBot)
            }}>

            {showBot?<h1 className="text-2xl font-bold text-white">
                
                    X
                
                </h1>:
                <h1 className="text-2xl font-bold text-white ">
                
                    Z
                
                </h1>}

            </button>


    </div>
}