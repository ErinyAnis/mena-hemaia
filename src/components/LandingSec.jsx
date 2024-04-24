import React from "react";
import PlayIcon from "./PlayIcon";

function LandingSec() {
  return (
    <>
      <section className="contianer-fluid p-0" id="landing-sec">
        <div className="landing-sec">
          <div className="container">
            <div className="landing-content">
              <div className="d-flex align-items-center gap-2 gap-lg-3 flex-wrap">
                <h1>Mena Hemaia</h1>
                <span>(CPA - CIA)</span>
              </div>
              <p>
                Finance, tax and accounting Expert, CEO of Accountack, Founder
                of MenaTCP, Audit Committee Member I am licensed as a CPA and
                CIA.
              </p>
              <div className="video mt-4">
                <PlayIcon videoId="XxXyfkrP298" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingSec;
