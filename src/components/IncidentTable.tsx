"use client";

import { useState } from "react";
import incidents from "@/data/incidents.json";

export default function IncidentTable() {
  
  const [showExport, setShowExport] = useState(false);
  const [exportType, setExportType] = useState("csv");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("severity");
  const filteredIncidents = incidents
  .filter(
    (incident) =>
      incident.title.toLowerCase().includes(search.toLowerCase()) ||
      incident.type.toLowerCase().includes(search.toLowerCase())||
      incident.incident_id.toLowerCase().includes(search.toLowerCase()) ||
      incident.severity.toLowerCase().includes(search.toLowerCase()) ||
      incident.status.toLowerCase().includes(search.toLowerCase()) 
      
  )
  .sort((a, b) => {
    if (sortBy === "severity") {
      return a.severity.localeCompare(b.severity);
    }

    if (sortBy === "status") {
      return a.status.localeCompare(b.status);
    }

    if (sortBy === "id") {
      return a.incident_id.localeCompare(b.incident_id);
    }

    return 0;
  });
  return (
    <div className="bg-slate-800 rounded-xl p-6">

      <div className="flex gap-4 mb-4">
  <input
    type="text"
    placeholder="Search incidents..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-2"
  />

  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2"
  >
    <option value="severity">Severity</option>
    <option value="status">Status</option>
    <option value="id">Incident ID</option>
    <option value="type">Type</option>
  </select>
</div>

{showExport && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
    <div className="bg-slate-800 p-6 rounded-xl w-80">
      <h2 className="text-xl font-semibold mb-4">
        Export Alerts
      </h2>

      <select
        value={exportType}
        onChange={(e) => setExportType(e.target.value)}
        className="w-full bg-slate-700 p-2 rounded mb-4"
      >
        <option value="pdf">PDF</option>
        <option value="csv">CSV</option>
        <option value="txt">TXT</option>
        <option value="DOCX">DOCX</option>
      </select>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => setShowExport(false)}
          className="bg-slate-600 px-4 py-2 rounded"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            alert(`Exporting as ${exportType}`);
            setShowExport(false);
          }}
          className="bg-green-600 px-4 py-2 rounded"
        >
          Download
        </button>
      </div>
    </div>
  </div>
)}

      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="text-left py-3">Incident ID</th>
            <th className="text-left py-3">Severity</th>
            <th className="text-left py-3">Title</th>
            <th className="text-left py-3">Type</th>
            <th className="text-left py-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredIncidents.map((incident) => (
            <tr
              key={incident.incident_id}
              className="border-b border-slate-700"
            >
              <td className="py-3">{incident.incident_id}</td>

              <td>
                <span
                  className={
                    incident.severity === "critical"
                      ? "bg-red-600 px-2 py-1 rounded"
                      : incident.severity === "high"
                      ? "bg-orange-500 px-2 py-1 rounded"
                      : "bg-yellow-500 text-black px-2 py-1 rounded"
                  }
                >
                  {incident.severity}
                </span>
              </td>

              <td>{incident.title}</td>
              <td>{incident.type}</td>
              <td>
                  <span
                      className={
                      incident.status === "open"
                      ? "bg-red-700 px-3 py-1 rounded-md text-sm"
                      : incident.status === "in_progress"
                      ? "bg-blue-600 px-3 py-1 rounded-md text-sm"
                      : "bg-green-600 px-3 py-1 rounded-md text-sm"
                    }
                >
                      {incident.status}
                  </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
  <button
    onClick={() => setShowExport(true)}
    className="bg-green-600 px-4 py-2 rounded-lg"
  >
    Export
  </button>
</div>
    </div>
  );
}