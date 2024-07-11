import { PropsWithChildren } from "react";

export function Heading({ children }: PropsWithChildren) {
  return (
    <h1 className="text-7xl font-bold text-yellow-300 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
      {children}
    </h1>
  );
}
