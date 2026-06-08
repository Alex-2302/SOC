import StatCard from "./StatCard";

export default function IncidentStats() {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      <StatCard title="Total Incidents" value="24" />
      <StatCard title="Open Incidents" value="8" />
      <StatCard title="Critical Incidents" value="3" />
      <StatCard title="Closed Incidents" value="13" />
    </div>
  );
}