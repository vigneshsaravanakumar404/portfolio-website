import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from "./App";
import Fourofour from "./404";
import Resume from "./Resume";
import PdfViewer from "./PdfViewer"; // Import the new component
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume/Resume.pdf" element={<PdfViewer />} />
        <Route path="*" element={<Fourofour />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);