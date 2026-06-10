"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  
  
  if (pathname === "/login" || pathname === "/welcome") {
    return null;
  }
  return (
    <div className="w-64 min-h-screen bg-slate-900 p-4">
      <h1 className="text-white text-xl font-bold mb-8">
        SOC Dashboard
      </h1>

      <nav className="flex flex-col gap-3">
        <Link
  href="/"
  className={`block p-3 rounded ${
    pathname === "/"
      ? "bg-blue-600 text-white"
      : "hover:bg-slate-700"
  }`}
>
  Dashboard
</Link>

        <Link
  href="/alerts"
  className={`block p-3 rounded ${
    pathname === "/alerts"
      ? "bg-blue-600 text-white"
      : "hover:bg-slate-700"
  }`}
>
  Alerts
</Link>
        <Link
  href="/incidents"
  className={`block p-3 rounded ${
    pathname === "/incidents"
      ? "bg-blue-600 text-white"
      : "hover:bg-slate-700"
  }`}
>
  Incidents
</Link>

        <Link
  href="/playbooks"
  className={`block p-3 rounded ${
    pathname === "/playbooks"
      ? "bg-blue-600 text-white"
      : "hover:bg-slate-700"
  }`}
>
  Playbooks
</Link>

        <Link
  href="/reports"
  className={`block p-3 rounded ${
    pathname === "/reports"
      ? "bg-blue-600 text-white"
      : "hover:bg-slate-700"
  }`}
>
  Reports
</Link>

        <Link
  href="/settings"
  className={`block p-3 rounded ${
    pathname === "/settings"
      ? "bg-blue-600 text-white"
      : "hover:bg-slate-700"
  }`}
>
  Settings
</Link>
      </nav>
    </div>
  );
}