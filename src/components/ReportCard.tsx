export default function ReportCard({
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

      <button className="bg-green-600 px-4 py-2 rounded"
      onClick={() => alert(`Downloading ${title}`)}>
        Download
      </button>
    </div>
  );
}