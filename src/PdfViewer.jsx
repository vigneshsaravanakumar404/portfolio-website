import React, { useEffect } from 'react';
import resumePDF from './assets/[Vignesh] Resume.pdf'; // Adjust the path as needed


const PdfViewer = () => {
  
  useEffect(() => {
    document.title = "Vignesh | PDF Viewer";
  }, []);
  
  return (

    <div style={{ height: '100vh', width: '100vw' }}>
      <object
        data={resumePDF}
        type="application/pdf"
        style={{ width: '100%', height: '100%' }}
        aria-label="PDF Resume"
      >
        <embed src={resumePDF} type="application/pdf" />
      </object>
    </div>
  );
};

export default PdfViewer;
