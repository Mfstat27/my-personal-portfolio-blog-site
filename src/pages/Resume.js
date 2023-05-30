import React, { useState } from "react";
import resume from "../utils/Tracey_Thomas_Resume_v20.pdf";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import PageTitleBanner from "../components/PageTitleBanner";

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [renderNavButtons, setRenderNavButtons] = useState(false);

  const onSuccess = () => {
    setPageNumber(1);
    setRenderNavButtons(true);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };
  const previousPage = () => {
    changePage(-1);
  };
  const nextPage = () => {
    changePage(+1);
  };

  return (
    <section className="website-pages-look-resume ">
      <div className=" resume-overlay">
        <PageTitleBanner titleName="My Resume" />
        <div className="resume-center">
          {renderNavButtons && (
            <button
              disabled={pageNumber <= 1}
              onClick={previousPage}
              className="resume-arrow-left"
            >
              <FiArrowLeft />
            </button>
          )}

          <Document
            file={resume}
            onLoadSuccess={({ numPages }) => {
              setNumPages(numPages);
              setRenderNavButtons(true);
              onSuccess();
            }}
            style={{
              "@media max-width: 500": {
                width: 100,
              },
            }}
          >
            <Page pageNumber={pageNumber} />
          </Document>

          {renderNavButtons && (
            <button
              disabled={pageNumber === numPages}
              onClick={nextPage}
              className="resume-arrow-right"
            >
              <FiArrowRight />
            </button>
          )}
        </div>
        <p className="page-num-notif">
          {" "}
          Page {pageNumber} of {numPages}{" "}
        </p>
      </div>
    </section>
  );
};

export default Resume;
