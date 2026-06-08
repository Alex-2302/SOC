import StatCard from "@/components/StatCard";
import Link from "next/link";

export default function Home() {
 return (
  

    <main className="flex-1 min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Security Operations Center
      </h1>

       <div className="grid grid-cols-4 gap-4">
         <StatCard title="Total Alerts" value="124" />
         <StatCard title="Critical Alerts" value="12" />
         <StatCard title="Incidents" value="8" />
         <StatCard title="Threat Score" value="8.7" />
       </div>
      
      <div className="grid grid-cols-2 gap-6 mt-8">
  <div className="bg-slate-800 rounded-xl p-6">
    <h2 className="text-xl font-semibold mb-4">
      Recent Alerts
    </h2>

    <div className="space-y-2">
      <p>A-101 | Critical</p>
      <p>A-102 | High</p>
      <p>A-103 | Medium</p>
    </div>
  </div>

  <div className="bg-slate-800 rounded-xl p-6">
    <h2 className="text-xl font-semibold mb-4">
      Recent Incidents
    </h2>

    <div className="space-y-2">
      <p>INC-001 | Active</p>
      <p>INC-002 | Closed</p>
      <p>INC-003 | Active</p>
    </div>
  </div>
</div>
   </main>
);
}