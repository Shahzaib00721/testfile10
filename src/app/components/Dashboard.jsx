 "use client";
 export default function Dashboard() {
  return (
    <div className="bg-gray-50 shadow rounded-lg p-8 w-70 ">
      <h2 className="text-lg  mb-6 text-black leading-[20px]">Hello, Alberta</h2>
      <p className="text-gray-600 text-md mb-15 mt-10 leading-[20px]">
        Nice work! Let’s keep going.<br />
        <br/>
        <br/>
        One down, two to go!
      </p>
      <ul className="list-disc list-inside 
 text-sm space-y-1">
        <li className="mb-6">Add your first &lt;code&gt;</li>
        <li className="mb-6 text-[rgb(40,159,192,1)]">Create a program</li>
        <li className="mb-6 text-[rgb(40,159,192,1)]">Add a staff member</li>
      </ul>
    </div>
  );
}
