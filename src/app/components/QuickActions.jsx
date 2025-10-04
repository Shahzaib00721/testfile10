"use client";
import { PlusCircle, FileText, CheckSquare, Send, Calendar, Upload, Users, Video } from "lucide-react";

export default function QuickActions() {
  const actions = [
    { icon: <img src="/plus.svg" className="w-8 h-10 text-teal-500" />, label: "Add <Code>" },
    { icon: <img src="/note.svg" className="w-8 h-8 text-red-400" />, label: "Add Note" },
    { icon: <img src="/task.svg" className="w-8 h-8 text-blue-400" />, label: "Add Task" },
    { icon: <img src="/send.svg" className="w-8 h-8 text-pink-400" />, label: "Send Forms" },
    { icon: <img src="/add.svg" className="w-8 h-8 text-blue-500" />, label: "Ad Appointment" },
    { icon: <img src="/uplode.svg" className="w-8 h-8 text-sky-500" />, label: "Upload File" },
    { icon: <img src="/staff.svg" className="w-8 h-8 text-purple-500" />, label: "Add Staff" },
    { icon: <img src="/video call.svg" className="w-8 h-8 text-cyan-600" />, label: "Start Video Call" },
  ];
  
  return (
    <div className="bg-gray-100 items-center shadow rounded-[10px] p-4 border border-gray-200  md:h-100  ">
 <div className="flex justify-between  justify-items-center ">  
          <h2 className=" text-lg text-black   mb-15 ">Quick Actions </h2>
        <p className="text-gray-300  text-sm ">Add/Remove</p>
         
      
 </div>
    
     
      <div className="grid gap-x-4 gap-y-13 grid-cols-2 sm:grid-cols-4  rounded-[10px] ">
       
        {actions.map((action, i) => (
          <div
            key={i}
            className="flex flex-col  items-center justify-center p-2 bg-white  rounded-[10px] border-1 border-[rgba(217,217,217,1)]  shadow-lg  hover:bg-gray-50 cursor-pointer"
          >
            {action.icon}
            <span className="text-md mt-2 text-black font-normal text-center">{action.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

