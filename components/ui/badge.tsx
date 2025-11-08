import * as React from "react";
export function Badge({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return <span className={`badge ${className}`}>{children}</span>;
}
