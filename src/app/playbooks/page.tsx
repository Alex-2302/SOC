import PlaybookCard from "../../components/PlaybookCard";

export default function PlaybooksPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Security Playbooks
      </h1>

      <div className="mb-6">
          <input
              type="text"
              placeholder="Search playbooks..."
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2"
          />
      </div>

      <div className="space-y-4">
        <PlaybookCard
          title="Malware Response"
          description="Procedure for handling malware infections."
        />

        <PlaybookCard
          title="Phishing Investigation"
          description="Steps to investigate phishing incidents."
        />

        <PlaybookCard
          title="Ransomware Containment"
          description="Containment and recovery workflow."
        />

        <PlaybookCard
          title="Data Exfiltration Response"
          description="Investigation process for data theft."
        />
      </div>
    </main>
  );
}