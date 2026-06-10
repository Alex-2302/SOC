"use client";

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="bg-slate-800 p-10 rounded-xl w-[500px] text-center shadow-lg">
        
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to SOC Dashboard
        </h1>

        <p className="text-slate-300 mb-8">
          Login successful.
          <br />
          Click Next to continue to the dashboard.
        </p>

        <button
          onClick={() => (window.location.href = "/")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium"
        >
          Next
        </button>

      </div>
    </main>
  );
}