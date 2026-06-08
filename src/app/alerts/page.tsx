import AlertTable from "../../components/AlertTable";

export default function AlertsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Security Alerts
      </h1>

      <AlertTable />
    </main>
  );
}