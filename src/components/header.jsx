import React from "react";
// import DownloadButton from "./download";

export const Header = (props) => {
  const { fileName, fileUrl } = props
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                {/* <p>👀 predictive model analysis, ML classifications, computer vision, microcontrollers, web dev</p><p>👨‍💻 Currently working part time @BINUS IT DIVISION with ReactJS, .NET Framework & AzureDB</p> */}
                {/* <div className="btn btn-custom btn-lg page-scroll">
                  <DownloadButton />
                </div> */}
                
                <button
                  // href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                  onClick={handleDownload}
                >
                  Download My CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
