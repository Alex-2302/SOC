"use client";

import { useState } from "react";

export default function PlaybookCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {

  const [showDownload, setShowDownload] = useState(false);
  const [format, setFormat] = useState("pdf");

  return (
    <div className="bg-slate-800 rounded-xl p-6 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-slate-400 mt-2">
          {description}
        </p>
      </div>

     <button
  onClick={() => setShowDownload(true)}
  className="bg-green-600 px-4 py-2 rounded"
>
  Download
</button>
{showDownload && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
    <div className="bg-slate-800 p-6 rounded-xl w-80">
      <h2 className="text-xl font-semibold mb-4">
        Download Report As
      </h2>

      <select
        value={format}
        onChange={(e) => setFormat(e.target.value)}
        className="w-full bg-slate-700 p-2 rounded mb-4"
      >
        <option value="pdf">PDF</option>
        <option value="docx">DOCX</option>
        <option value="txt">TXT</option>
        <option value="csv">CSV</option>
      </select>

      <div className="flex justify-end gap-2">
        <button
          onClick={() => setShowDownload(false)}
          className="bg-slate-600 px-4 py-2 rounded"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            alert(`Downloading ${title} as ${format.toUpperCase()}`);
            setShowDownload(false);
          }}
          className="bg-green-600 px-4 py-2 rounded"
        >
          Download
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}