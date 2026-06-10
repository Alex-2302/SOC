"use client";

import { useState } from "react";
import alerts from "@/data/alerts.json";

export default function AlertTable() {

  const [showExport, setShowExport] = useState(false);
  const [exportType, setExportType] = useState("csv");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("severity");
  const filteredAlerts = alerts
 .filter((alert) => {
  const searchTerm = search.toLowerCase();

  if (sortBy === "severity") {
    return alert.severity.toLowerCase().includes(searchTerm);
  }

  if (sortBy === "source") {
    return alert.source.toLowerCase().includes(searchTerm);
  }

  if (sortBy === "source_ip") {
    return alert.source_ip.includes(search);
  }

  if (sortBy === "dest_ip") {
    return alert.dest_ip.includes(search);
  }

  if (sortBy === "timestamp") {
    return alert.timestamp.includes(search);
  }

  return true;
})
  .sort((a, b) => {
  const severityOrder = {
    critical: 4,
    high: 3,
    medium: 2,
    low: 1,
  };

  if (sortBy === "severity") {
    return (
      severityOrder[b.severity as keyof typeof severityOrder] -
      severityOrder[a.severity as keyof typeof severityOrder]
    );
  }

  if (sortBy === "source") {
    return a.source.localeCompare(b.source);
  }

  if (sortBy === "source_ip") {
    return a.source_ip.localeCompare(b.source_ip);
  }

  if (sortBy === "dest_ip") {
    return a.dest_ip.localeCompare(b.dest_ip);
  }

  if (sortBy === "timestamp") {
    return b.timestamp.localeCompare(a.timestamp);
  }

  return 0;
})
    return (
  <div className="bg-slate-800 rounded-xl p-6">

    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Search alerts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 bg-slate-700 border border-slate-600 rounded-lg p-3 text-white"
      />

      <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2"
      >
        <option value="severity">Severity</option>
        <option value="source">Source</option>
        <option value="source_ip">Source IP</option>
        <option value="dest_ip">Destination IP</option>
        <option value="timestamp">Timestamp</option>
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
        <option value="docx">DOCX</option>
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
          <tr className="border-b border-slate-700 h-15">
            <th>Source</th>

            <th>Source IP</th>

            <th>Destination IP</th>

            <th>Rule Name</th>

            <th>Severity</th>

            <th>Timestamp</th>

          </tr>
        </thead>

        <tbody>
          {filteredAlerts.map((alert) => (
           <tr
              key={`${alert.source_ip}-${alert.timestamp}`}
             >
              <td className="px-4 py-3">{alert.source}</td>

              <td className="px-4 py-3 font-mono">{alert.source_ip}</td>

              <td className="px-4 py-3 font-mono">{alert.dest_ip}</td>

              <td className="px-4 py-3">{alert.rule_name}</td>

              <td className="px-4 py-3">
                <span
                  className={
                    alert.severity === "critical"
                      ? "bg-red-600 px-2 py-1 rounded"
                      : alert.severity === "high"
                      ? "bg-orange-500 px-2 py-1 rounded"
                      : "bg-yellow-500 text-black px-2 py-1 rounded"
                  }
                >
                  {alert.severity}
                </span>
              </td>

              <td className="px-4 py-3">{alert.timestamp}</td>
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