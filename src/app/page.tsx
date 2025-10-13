// app/page.js
import Dashboard from "./components/Dashboard";
import QuickActions from "./components/QuickActions";
import Insights from "./components/Insights";
import "./globals.css";


export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-5">Main Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-5">
        <Dashboard />
        <div className="md:col-span-2">
          <QuickActions />
        </div>
      </div>

      <Insights />
    </div>
  );
}
