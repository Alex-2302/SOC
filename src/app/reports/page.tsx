import ReportCard from "../../components/ReportCard";

export default function ReportsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Security Reports
      </h1>

      <div className="space-y-4">
        <ReportCard
          title="Weekly Threat Summary"
          description="Summary of threats detected this week."
        />

        <ReportCard
          title="Incident Analysis Report"
          description="Detailed incident investigation report."
        />

        <ReportCard
          title="Compliance Report"
          description="Compliance status and audit findings."
        />

        <ReportCard
          title="Executive Security Report"
          description="High-level security metrics for management."
        />
      </div>
    </main>
  );
}