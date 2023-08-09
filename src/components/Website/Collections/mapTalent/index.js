import React from "react";
import "./styles.scss";
import TeamCollaborate from "../../../../assets/images/software-landing-2.png";
// import Video from "../../../components/ui/customVideo";

const mapTalent = () => {
  return (
    <div className={`mapTalent`}>
      <div className={`lead`}>
        <h6>GROW YOUR COMPANY BY GROWING YOUR ASSETS</h6>
        <h4>Quickly and Simply Map your Company's Cloud Talent.</h4>
      </div>

      <div className={`wrapper`}>
        <div className={`left`}>
          {/* <Video wrapperClass={styles.video} /> */}
          <img src={TeamCollaborate} alt="" className={`team-collaborate`} />
        </div>

        <div className={`right`}>
          <ul>
            <li data-step="1">
              <div className={`step`}>
                <h3>Choose Your Platform</h3>
                <p>We offer competency analysis for both AWS and Azure</p>
              </div>
            </li>

            <li data-step="2">
              <div className={`step`}>
                <h3>Invite Participants</h3>
                <p>
                  You can add anyone you like (not just people with an A
                  Cloudticians license). <br /> <br /> Add emails individually
                  by uploading a CSV file.
                </p>
              </div>
            </li>

            <li data-step="3">
              <div className={`step`}>
                <h3>Await Result</h3>
                <p>
                  All is set, result will arrive in your dashboard on end 10
                  minutes after assessment ends.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default mapTalent;
