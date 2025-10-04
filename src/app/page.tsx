
import Slider from "./components/Slider";
import Dashboard from "./components/Dashboard";
import QuickActions from "./components/QuickActions";
import Insights from "./components/Insights";
import Navbar from "./components/Navbar";


export default function Home() {
  return (   
    <>
   <div>
     <Navbar/>
   </div>
    <div className="flex min-h-screen    bg-white">
     
      {/* Sidebar */}
      <Slider/>

      {/* Main Content */}
      <main className="flex-1 p-4 md:pl-15 space-y-3">
        <h1 className="text-2xl text-black text-center font-bold my-7">Main Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-13">
          <Dashboard />
          <div className="md:col-span-2">
            <QuickActions />
          </div>
        </div>

        <Insights />
      </main>
    </div>
</>
    
  );
}
