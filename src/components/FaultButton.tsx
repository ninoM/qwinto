"use client";

import React from "react";

export const FaultButton = ({
  onClick,
  activated,
}: {
  onClick?: (newState: boolean) => void;
  activated: boolean;
}) => {
  return (
    <button
      onClick={() => onClick?.(!activated)}
      className={`h-8 w-8 rounded-full ring-1 ring-slate-700 ${
        activated ? "bg-red-800" : "bg-slate-900"
      }`}
    >
      X
    </button>
  );
};
