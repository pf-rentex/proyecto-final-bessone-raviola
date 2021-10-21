import React from "react";

interface IBadgeProps {
  color?: string;
  children: React.ReactNode;
}

export const Badge = ({ color = "red", children = <></> }: IBadgeProps) => {
  return (
    <span
      className={`inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none bg-${color}-500 rounded-full`}
    >
      {children}
    </span>
  );
};
