 "use client";
 export default function Dashboard() {
  return (
    <div className=" shadow rounded-lg h-100   w-70  ">
      <h2 className="text-lg  mb-6 text-black leading-[20px] pl-10 mt-10 ">Hello, Alberta</h2>
      <p className="text-gray-600 text-md mb-5  leading-[20px] pl-10 ">
        Nice work! Let’s keep going.<br />
        <br/> 
        
        One down, two to go!
        <br/>
        <br/>
        

      </p>
      <ul className="list-disc list-inside 
 text-sm space-y-1">
        <li className="mb-4 pl-10">Add your first &lt;code&gt;</li>
        <li className="mb-4 text-[rgb(40,159,192,1)] pl-10">Create a program</li>
        <li className=" text-[rgb(40,159,192,1)] pl-10">Add a staff member</li>
      </ul>
     

  <img src="imgg.png" alt="" className=" bg-fixed bg-cover bg-center  " />


    </div>
    
  );
}
