import React, { useEffect } from "react";
import "./index.css";
import { Footer, Navbar } from "./components";

const Resume = () => {
    const resumePath = "/assets/[Vignesh] Resume.pdf";

    useEffect(() => {
        document.title = "Vignesh | Resume";
    }, []);

    return (
        <div className='relative z-0 bg-primary'>
            <div className='bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <div className='flex flex-col items-center justify-center' style={{ paddingTop: '75px' }}>
                    <h1 className='text-5xl font-bold text-white' style={{ color: '#02D260' }}>Resume</h1>
                </div>
                <section className={`relative w-full h-screen mx-auto flex flex-col items-center justify-center`}>
                    <div className="flex mb-4">
                        <div title="Open" className="h-14 w-14 bg-dark-gray rounded-md flex justify-center items-center hover:bg-slate-600">
                            <a href="/resume/Resume.pdf" target="_blank">
                                <div className="relative h-10 w-10">
                                    <div>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ color: 'white' }}>
                                            <path d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"></path>
                                            <path d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div title="Download" className="h-14 w-14 bg-dark-gray rounded-md flex justify-center items-center hover:bg-slate-600">
                            <a href={resumePath} download="">
                                <div className="relative h-10 w-10">
                                    <div>
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" style={{ color: 'white' }}>
                                            <path d="m12 16 4-5h-3V4h-2v7H8z"></path>
                                            <path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <object
                        data={resumePath}
                        type="application/pdf"
                        style={{ width: '55%', height: '100%' }}
                        aria-label="PDF Resume"
                    >
                        <embed src={resumePath} type="application/pdf" />
                    </object>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Resume;
