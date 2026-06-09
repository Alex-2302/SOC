"use client";

import { useState } from "react";
import incidents from "@/data/incidents.json";
export default function IncidentTable() {
  const [search, setSearch] = useState("");
  const filteredIncidents = incidents.filter(
  (incident) =>
    incident.title.toLowerCase().includes(search.toLowerCase()) ||
    incident.type.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className="bg-slate-800 rounded-xl p-6">

      <div className="mb-4">
          <input
            type="text"
            placeholder="Search incidents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2"
          />
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="text-left py-3">Incident ID</th>
            <th className="text-left py-3">Title</th>
            <th className="text-left py-3">Type</th>
            <th className="text-left py-3">Severity</th>
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
    </div>
  );
}