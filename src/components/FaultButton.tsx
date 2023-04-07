"use client";

import React from "react";

export const FaultButton = () => {
  const [activated, setActivated] = React.useState(false);
  return (
    <button
      onClick={() => setActivated((currState) => !currState)}
      className={`rounded-full w-8 h-8 ring-1 ring-slate-700 ${
        activated ? "bg-red-800" : "bg-slate-900"
      }`}
    >
      X
    </button>
  );
};
