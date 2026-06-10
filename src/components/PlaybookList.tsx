"use client";

import { useState } from "react";
import playbooks from "@/data/playbooks.json";
import PlaybookCard from "@/components/PlaybookCard";

export default function PlaybookList() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("severity");
  const filteredPlaybooks = playbooks.filter((playbook) =>
    playbook.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search playbooks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-slate-700 border border-slate-600 rounded-lg p-3 text-white"
        />
      </div>

      <div className="space-y-4">
        {filteredPlaybooks.map((playbook) => (
          <PlaybookCard
            key={playbook.id}
            title={playbook.title}
            description={playbook.description}
          />
        ))}
      </div>
    </>
  );
}