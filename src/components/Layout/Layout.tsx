import React from "react";

import { Navigation } from "./Navigation/Navigation";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
};
