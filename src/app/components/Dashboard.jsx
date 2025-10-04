"use client";
export default function Dashboard() {
  return (
    <div className="flex items-center justify-center  ">
      {/* outer container center کرے گا */}

      <div className="bg-white-50 shadow rounded-lg h-auto w-full max-w-md md:h-100 ">
        <h2 className="text-lg mb-6 text-black leading-[20px] pl-4 mt-6">
          Hello, Alberta
        </h2>
        <p className="text-gray-600 text-md mb-5 leading-[20px] pl-4">
          Nice work! Let’s keep going.<br />
          <br />
          One down, two to go!
          <br />
          <br />
        </p>
        <ul className="list-disc list-inside text-sm space-y-1 pl-4">
          <li className="mb-4">Add your first &lt;code&gt;</li>
          <li className="mb-4 text-[rgb(40,159,192,1)]">Create a program</li>
          <li className="text-[rgb(40,159,192,1)]">Add a staff member</li>
        </ul>

        <img
          src="/imgg.png"
          alt=""
          className="bg-fixed bg-cover bg-center w-full rounded-b-lg"
        />
           <p className="text-end pr-4 pb-2">Mark all Done </p>
      </div>
   
    </div>
  );
} 
