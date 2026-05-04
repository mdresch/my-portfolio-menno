import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Higgs Field Journey — Friends Contact",
  description:
    "Follow your cosmic profile through the field: particles converge on the personal details you maintain with Menno.",
  openGraph: {
    title: "Higgs Field Journey — Friends Contact",
    description: "Particle journey toward your maintained personal details.",
    type: "website",
  },
};

export default function JourneyLayout({ children }: { children: ReactNode }) {
  return children;
}
