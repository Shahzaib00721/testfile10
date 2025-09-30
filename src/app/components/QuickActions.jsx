"use client";
import { PlusCircle, FileText, CheckSquare, Send, Calendar, Upload, Users, Video } from "lucide-react";

export default function QuickActions() {
  const actions = [
    { icon: <PlusCircle className="w-8 h-8 text-teal-500" />, label: "Add <Code>" },
    { icon: <FileText className="w-8 h-8 text-red-400" />, label: "Add Note" },
    { icon: <CheckSquare className="w-8 h-8 text-blue-400" />, label: "Add Task" },
    { icon: <Send className="w-8 h-8 text-pink-400" />, label: "Send Forms" },
    { icon: <Calendar className="w-8 h-8 text-blue-500" />, label: "Add Appointment" },
    { icon: <Upload className="w-8 h-8 text-sky-500" />, label: "Upload File" },
    { icon: <Users className="w-8 h-8 text-purple-500" />, label: "Add Staff" },
    { icon: <Video className="w-8 h-8 text-cyan-600" />, label: "Start Video Call" },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-4  md:h-100 ">
      <h2 className="text-lg text-black  mb-15 ">Quick Actions</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 ">
        {actions.map((action, i) => (
          <div
            key={i}
            className="flex flex-col  items-center justify-center p-2 border rounded-md shadow-lg hover:bg-gray-50 cursor-pointer"
          >
            {action.icon}
            <span className="text-md mt-2 text-black font-normal text-center">{action.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

