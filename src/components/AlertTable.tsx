export default function AlertTable() {
  const alerts = [
    {
      id: "A-101",
      severity: "Critical",
      source: "Windows Server",
      status: "Open",
    },
    {
      id: "A-102",
      severity: "High",
      source: "Firewall",
      status: "Investigating",
    },
    {
      id: "A-103",
      severity: "Medium",
      source: "Wazuh Agent",
      status: "Closed",
    },
  ];

  return (

    <div className="bg-slate-800 rounded-xl p-6">
        <div className="mb-4">
         <input
              type="text"
              placeholder="Search alerts..."
              className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white"
           />
        </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="text-left py-3">Alert ID</th>
            <th className="text-left py-3">Severity</th>
            <th className="text-left py-3">Source</th>
            <th className="text-left py-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {alerts.map((alert) => (
            <tr
              key={alert.id}
              className="border-b border-slate-700"
            >
              <td className="py-3">{alert.id}</td>
              <td>
                  <span
                      className={
                      alert.severity === "Critical"
                      ? "bg-red-600 px-3 py-1 rounded-md text-sm font-medium"
                      : alert.severity === "High"
                      ? "bg-orange-500 px-3 py-1 rounded-md text-sm font-medium"
                      : "bg-yellow-500 text-black px-3 py-1 rounded-md text-sm font-medium"
                    }
                >
                      {alert.severity}
                  </span>
              </td>
              <td>{alert.source}</td>
              <td>
                  <span
                      className={
                      alert.status === "Open"
                      ? "bg-red-700 px-3 py-1 rounded-md text-sm"
                      : alert.status === "Investigating"
                      ? "bg-blue-600 px-3 py-1 rounded-md text-sm"
                      : "bg-green-600 px-3 py-1 rounded-md text-sm"
                    }
                >
                      {alert.status}
                  </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}