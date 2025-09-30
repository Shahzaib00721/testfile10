"use client";
import { CalendarIcon } from "@heroicons/react/24/outline";

export default function InsightsCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden max-w-5xl mx-auto my-6">
      {/* Header */}
      <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
        <h2 className="text-gray-800 font-semibold text-sm md:text-base">
          Key Insights for Today
        </h2>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left Content */}
        <div className="space-y-2 text-sm leading-relaxed text-gray-700">
          <p>
            You have <span className="font-medium">6 assessments</span> due today.{" "}
            <a href="#" className="text-sky-600 hover:underline">
              Click here to start
            </a>
          </p>
          <p>
            You have <span className="font-medium">10 meetings</span> today.{" "}
            <a href="#" className="text-[rgb(40,159,192,1)] hover:underline">
              Click here to view
            </a>
          </p>
          <p>
            There is one <span className="font-medium ">Red Flag</span> alert issued today.{" "}
            <a href="#" className="text-[rgb(40,159,192,1)] hover:underline">
              Click here to view
            </a>
          </p>
          <p>
            You have <span className="font-medium">2 tasks</span> coming due today.{" "}
            <a href="#" className="text-[rgb(40,159,192,1)] hover:underline">
              Click here to view
            </a>
          </p>
          <p>
            You’ve received a <span className="font-mono">&lt;ccode&gt;</span> Progress Report that shows a downward trend.{" "}
            <a href="#" className="text-[rgb(40,159,192,1)] hover:underline">
              Click here to view
            </a>
          </p>
        </div>

        {/* Right Icon */}
        <div className="flex justify-center md:justify-end md:pr-15">
          <div className="bg-sky-100 p-4 rounded-lg">
            <CalendarIcon className="w-10 h-10 text-sky-500" />
            <div className="absolute text-sky-500 text-xl -mt-7 ml-2">❤️</div>
          </div>
        </div>
      </div>
    </div>
  );
}
