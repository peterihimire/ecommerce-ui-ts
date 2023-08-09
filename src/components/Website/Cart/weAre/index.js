import React from "react";
import devGuy from "../../../../assets/images/guy-coding.png";

import "./styles.scss";

const WhoWeAre = () => {
  return (
    <section className={`whoWeAre`}>
      <div className="wrapper">
        <div className={`grid-who`}>
          <div className={`left`}>
            <div className={`left-wrapper`}>
              <img src={devGuy} alt="" />
            </div>
          </div>
          <div className={`right`}>
            <div className={`right-top`}>
              <h6>Help your business reach its potential</h6>
              <h4>
                We're Building Modern <br />
                And High Software
              </h4>
              <p>
                Both rest of know draw fond post as. It agreement defective to
                excellent. Feebly do engage of narrow. Extensive repulsive
                belonging depending if promotion be zealously as. Preference
                inquietude ask now are dispatched led appearance. Small meant in
                so doubt hopes.
              </p>

              <p>
                Both rest of know draw fond post as. It agreement defective to
                excellent. Feebly do engage of narrow. Extensive repulsive
                belonging depending if promotion be zealously as. Preference
                inquietude ask now are dispatched led appearance. Small meant in
                so doubt hopes.
              </p>

              <div className={`get-started`}>
                <button className="btn-primary  btn-large">Get Started</button>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={`grid-who reverse`}>
          <div className={`left`}>
            <div className={`left-wrapper`}>
              <img src={devGuy} alt="" />
            </div>
          </div>
          <div className={`right`}>
            <div className={`right-top`}>
              <h4>
                We're Building Modern <br />
                And High Software
              </h4>
              <p>
                Both rest of know draw fond post as. It agreement defective to
                excellent. Feebly do engage of narrow. Extensive repulsive
                belonging depending if promotion be zealously as. Preference
                inquietude ask now are dispatched led appearance. Small meant in
                so doubt hopes.
              </p>
              <ul className="check-container">
                <li className="check-completed">
                  <span>
                    <Check style={{ color: "#2568ef" }} />
                  </span>
                  Answered one fat indulged margaret sir shutters together
                </li>
                <li className="check-completed">
                  <span>
                    <Check style={{ color: "#2568ef" }} />
                  </span>
                  Answered one fat indulged margaret sir shutters together
                </li>
                <li className="check-completed">
                  <span>
                    <Check style={{ color: "#2568ef" }} />
                  </span>
                  Answered one fat indulged margaret sir shutters together
                </li>
                <li className="check-completed">
                  <span>
                    <Check style={{ color: "#2568ef" }} />
                  </span>
                  Answered one fat indulged margaret sir shutters together
                </li>
                <li className="check-completed">
                  <span>
                    <Check style={{ color: "#2568ef" }} />
                  </span>
                  Answered one fat indulged margaret sir shutters together
                </li>
                <li className="check-completed">
                  <span>
                    <Check style={{ color: "#2568ef" }} />
                  </span>
                  Answered one fat indulged margaret sir shutters together
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default WhoWeAre;
