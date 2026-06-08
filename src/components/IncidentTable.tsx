export default function IncidentTable() {
  const incidents = [
    {
      id: "INC-001",
      severity: "Critical",
      assignee: "SOC Analyst",
      status: "Open",
    },
    {
      id: "INC-002",
      severity: "High",
      assignee: "L1 Analyst",
      status: "Investigating",
    },
    {
      id: "INC-003",
      severity: "Medium",
      assignee: "L2 Analyst",
      status: "Closed",
    },
  ];

  return (
    <div className="bg-slate-800 rounded-xl p-6">

      <div className="mb-4">
          <input
              type="text"
              placeholder="Search incidents..."
              className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2"
          />
      </div>

      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="text-left py-3">Incident ID</th>
            <th className="text-left py-3">Severity</th>
            <th className="text-left py-3">Assignee</th>
            <th className="text-left py-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {incidents.map((incident) => (
            <tr
              key={incident.id}
              className="border-b border-slate-700"
            >
              <td className="py-3">{incident.id}</td>

              <td>
                <span
                  className={
                    incident.severity === "Critical"
                      ? "bg-red-600 px-2 py-1 rounded"
                      : incident.severity === "High"
                      ? "bg-orange-500 px-2 py-1 rounded"
                      : "bg-yellow-500 text-black px-2 py-1 rounded"
                  }
                >
                  {incident.severity}
                </span>
              </td>

              <td>{incident.assignee}</td>
              <td>
                  <span
                      className={
                      incident.status === "Open"
                      ? "bg-red-700 px-3 py-1 rounded-md text-sm"
                      : incident.status === "Investigating"
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