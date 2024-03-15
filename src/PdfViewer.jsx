import React, { useEffect } from "react";
import { resumePath } from "./constants";

/**
 * Renders a PDF viewer component.
 *
 * @component
 * @returns {JSX.Element} The PDF viewer component.
 */
const PdfViewer = () => {
  useEffect(() => {
    document.title = "Vignesh | PDF Viewer";
  }, []);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <object
        data={resumePath}
        type="application/pdf"
        style={{ width: "100%", height: "100%" }}
        aria-label="PDF Resume"
      >
        <embed src={resumePath} type="application/pdf" />
      </object>
    </div>
  );
};

export default PdfViewer;
