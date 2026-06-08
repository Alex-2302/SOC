import IncidentTable from "../../components/IncidentTable";
import IncidentStats from "../../components/IncidentStats";

export default function IncidentsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Security Incidents
      </h1>

     <IncidentStats />

     <IncidentTable />
    </main>
  );
}