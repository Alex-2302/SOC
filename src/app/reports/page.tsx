import ReportList from "../../components/ReportList";

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Security Reports
      </h1>

      <ReportList />
    </main>
  );
}