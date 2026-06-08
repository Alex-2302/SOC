export default function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-slate-800 p-6 rounded-xl">
      <h2 className="text-slate-400">{title}</h2>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}