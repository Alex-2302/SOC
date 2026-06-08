import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 p-4">
      <h1 className="text-white text-xl font-bold mb-8">
        SOC Dashboard
      </h1>

      <nav className="flex flex-col gap-3">
        <Link
          href="/"
          className="text-slate-300 hover:text-white"
        >
          Dashboard
        </Link>

        <Link
          href="/alerts"
          className="text-slate-300 hover:text-white"
        >
          Alerts
        </Link>

        <Link
          href="/incidents"
          className="text-slate-300 hover:text-white"
        >
          Incidents
        </Link>

        <Link
          href="/playbooks"
          className="text-slate-300 hover:text-white"
        >
          Playbooks
        </Link>

        <Link
          href="/reports"
          className="text-slate-300 hover:text-white"
        >
          Reports
        </Link>

        <Link
          href="/settings"
          className="text-slate-300 hover:text-white"
>
          Settings
        </Link>
      </nav>
    </div>
  );
}