"use client";

import { useState } from "react";
import alerts from "@/data/alerts.json";

export default function AlertTable() {

  const [search, setSearch] = useState("");

  const filteredAlerts = alerts.filter((alert) =>
  alert.rule_name.toLowerCase().includes(search.toLowerCase())
);
  
  return (

    <div className="bg-slate-800 rounded-xl p-6">
        <div className="mb-4">
         <input
              type="text"
              placeholder="Search alerts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white"
           />
        </div>
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
            <tr key={alert.rule_name}>
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
    </div>
  );
}