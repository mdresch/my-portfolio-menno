import { Suspense } from "react";
import ProjectsBrowserTour from "./ProjectsBrowserTour";

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-[40vh]">
      <Suspense fallback={null}>
        <ProjectsBrowserTour />
      </Suspense>
      {children}
    </div>
  );
}
