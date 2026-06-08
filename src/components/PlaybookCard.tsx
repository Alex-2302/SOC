export default function PlaybookCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-slate-400 mt-2">
          {description}
        </p>
      </div>

      <div className="flex gap-3">
        <button className="bg-slate-700 px-4 py-2 rounded">
          View
        </button>

        <button className="bg-blue-600 px-4 py-2 rounded">
          Run
        </button>
      </div>
    </div>
  );
}