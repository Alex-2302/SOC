import incidents from "@/data/incidents.json";
import StatCard from "./StatCard";

export default function IncidentStats() {

const totalIncidents = incidents.length;

const openIncidents = incidents.filter(
  (incident) => incident.status === "open"
).length;

const criticalIncidents = incidents.filter(
  (incident) => incident.severity === "critical"
).length;

const closedIncidents = incidents.filter(
  (incident) => incident.status === "closed"
).length;

  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
     <StatCard
  title="Total Incidents"
  value={totalIncidents.toString()}
/>

<StatCard
  title="Open Incidents"
  value={openIncidents.toString()}
/>

<StatCard
  title="Critical Incidents"
  value={criticalIncidents.toString()}
/>

<StatCard
  title="Closed Incidents"
  value={closedIncidents.toString()}
/>
    </div>
  );
}