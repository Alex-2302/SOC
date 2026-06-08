export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">
        Settings
      </h1>

      <div className="space-y-6 max-w-2xl">
        <div className="bg-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            User Preferences
          </h2>

          <div className="space-y-4">
            <label className="block">
              <span className="text-slate-300">
                Display Name
              </span>

              <input
                type="text"
                placeholder="SOC Analyst"
                className="w-full mt-2 bg-slate-700 rounded px-3 py-2"
              />
            </label>

            <label className="block">
              <span className="text-slate-300">
                Email
              </span>

              <input
                type="email"
                placeholder="analyst@company.com"
                className="w-full mt-2 bg-slate-700 rounded px-3 py-2"
              />
            </label>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Notifications
          </h2>

          <div className="space-y-3">
            <label className="flex gap-2">
              <input type="checkbox" />
              Email Alerts
            </label>

            <label className="flex gap-2">
              <input type="checkbox" />
              Incident Notifications
            </label>

            <label className="flex gap-2">
              <input type="checkbox" />
              Weekly Reports
            </label>
          </div>
        </div>

        <button className="bg-blue-600 px-6 py-3 rounded-lg">
          Save Settings
        </button>
      </div>
    </main>
  );
}