"use client";

import { NextUIProvider } from "@nextui-org/react";

type ProvidersProps = {
  children: React.ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
