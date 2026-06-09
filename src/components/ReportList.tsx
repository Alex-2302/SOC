"use client";

import { useState } from "react";
import Report from "@/data/reports.json";
import ReportCard from "@/components/ReportCard";

export default function PlaybookList() {
  const [search, setSearch] = useState("");

  const filteredReport = Report.filter((playbook) =>
    playbook.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Report..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white"
        />
      </div>

      <div className="space-y-4">
        {filteredReport.map((playbook) => (
          <ReportCard
            key={playbook.id}
            title={playbook.title}
            description={playbook.description}
          />
        ))}
      </div>
    </>
  );
}