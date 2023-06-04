import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../style/resume.css';

import WhatsAppButton from './whatsapp';
import EmailButton from './email';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/CV-aharon k.pdf';
    link.download = 'Your_Name_Resume.pdf';
    link.click();
  };


  

  return (
    <div className="resume-container">
      <h1>My Resume</h1>
      <button className="download-button" onClick={downloadResume}>
        Download Resume
      </button>

      <div className="pdf-preview">
        <Document file="/CV-aharon k.pdf">
          <Page
            pageNumber={1}
            width={400}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </div>
      
      <button className="download-button" onClick={downloadResume}>
        Download Resume
      </button>

<WhatsAppButton className="hey"/>
      
    </div>
  );
};

export default Resume;