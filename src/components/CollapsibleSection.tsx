import React, { useState } from "react";

export default function CollapsibleSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-4">
      <button
        className="font-semibold text-cyan-700 dark:text-cyan-300 underline"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Hide" : "Show"} {title}
      </button>
      {open && <div className="mt-2">{children}</div>}
    </div>
  );
}