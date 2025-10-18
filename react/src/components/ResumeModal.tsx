import React from "react";
import { resolveLegacyAsset } from "@src/utils/asset";

type ResumeModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const RESUME_PDF = resolveLegacyAsset("resume/AlanGuevara-FullStackDeveloper.pdf");

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const backdropRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!isOpen) {
      document.body.classList.remove("modal-open");
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("modal-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={backdropRef}
      className="modal fade in"
      style={{ display: "block" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      onClick={handleBackdropClick}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" aria-label="Close" onClick={onClose}>
              <span aria-hidden="true">{"\u00d7"}</span>
            </button>
            <h4 className="modal-title" id="resume-modal-title">
              Resume Preview (Phase 3 coming soon)
            </h4>
          </div>
          <div className="modal-body">
            <p className="my-story">
              A fully interactive resume experience is scheduled for Phase 3. Until then, you can download
              the current PDF resume or reach out for a tailored portfolio walkthrough.
            </p>
            <a
              className="site-btn btn-theme-blue"
              href={RESUME_PDF}
              target="_blank"
              rel="noreferrer"
            >
              Download Resume (PDF)
            </a>
          </div>
          <div className="modal-footer">
            <button type="button" className="site-btn btn-theme-white-tr" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
