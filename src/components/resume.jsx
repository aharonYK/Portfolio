import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import '../style/resume.css';

import WhatsAppButton from './whatsapp';


pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/CV-Aharon Karsenti.pdf';
    link.download = 'CV-Aharon Karsenti.pdf';
    link.click();
  };


  

  return (
    <div className="resume-container">
      <h1>My Resume</h1>
      <button className="download-button" onClick={downloadResume}>
        Download Resume
      </button>

      <div className="pdf-preview">
        <Document file="/CV-Aharon Karsenti.pdf">
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
