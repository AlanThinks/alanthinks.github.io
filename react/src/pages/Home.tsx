import React from "react";
import Hero from "@src/components/Hero";
import ResumeModal from "@src/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = React.useState(false);

  return (
    <>
      <Hero onResumeClick={() => setIsResumeOpen(true)} />
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </>
  );
}
