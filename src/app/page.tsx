import StatCard from "@/components/StatCard";
import ThreatChart from "@/components/ThreatChart";
import dashboardData from "@/data/dashboard.json";
import alerts from "@/data/alerts.json";
import incidents from "@/data/incidents.json";
import Link from "next/link";

export default function Home() {

  const totalAlerts = alerts.length;

  const criticalAlerts = alerts.filter(
    (alert) => alert.severity === "critical"
  ).length;

  const totalIncidents = incidents.length;

  return (

    <main className="flex-1 min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Security Operations Center
      </h1>

       <div className="grid grid-cols-4 gap-4">
          <StatCard
            title="Total Alerts"
            value={totalAlerts.toString()}
         />

          <StatCard
            title="Critical Alerts"
            value={criticalAlerts.toString()}
          />

          <StatCard
            title="Incidents"
            value={totalIncidents.toString()}
          />

          <StatCard
            title="Threat Score"
            value={dashboardData.threatScore.toString()}
          />
       </div>
      
      <div className="grid grid-cols-2 gap-6 mt-8">

  <div className="bg-slate-800 rounded-xl p-6">
    <h2 className="text-xl font-semibold mb-4">
      Recent Alerts
    </h2>

    <div className="space-y-2">
      {alerts.slice(0, 3).map((alert, index) => (
  <p key={`${alert.source_ip}-${index}`}>
    {alert.rule_name} | {alert.severity}
  </p>
))}
    </div>
  </div>

  <div>
    <ThreatChart />
  </div>

  <div className="bg-slate-800 rounded-xl p-6">
    <h2 className="text-xl font-semibold mb-4">
      Recent Incidents
    </h2>

    <div className="space-y-2">
      {incidents.slice(0, 3).map((incident) => (
        <p key={incident.incident_id}>
          {incident.incident_id} | {incident.status}
        </p>
      ))}
    </div>
  </div>

</div>
  
   </main>
);
}