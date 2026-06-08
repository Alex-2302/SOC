export default function ThreatChart() {
  return (
    <div className="bg-slate-800 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-4">
        Threat Trend
      </h2>

      <div className="flex items-end gap-4 h-48">
        <div className="bg-red-500 w-12 h-20 rounded-t"></div>
        <div className="bg-red-500 w-12 h-32 rounded-t"></div>
        <div className="bg-red-500 w-12 h-24 rounded-t"></div>
        <div className="bg-red-500 w-12 h-40 rounded-t"></div>
        <div className="bg-red-500 w-12 h-28 rounded-t"></div>
        <div className="bg-red-500 w-12 h-36 rounded-t"></div>
      </div>

      <div className="flex gap-6 mt-2 text-sm text-slate-400">
        <span>Mon</span>
        <span>Tue</span>
        <span>Wed</span>
        <span>Thu</span>
        <span>Fri</span>
        <span>Sat</span>
      </div>
    </div>
  );
}