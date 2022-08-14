import React from "react";
import "./landing.css";
import Appbar from "../../components/AppBar/Appbar";

const LandingPage = () => {
  return (
    <div className="i">
      <Appbar />
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, Awesome Shortcuts</h2>
          <h1 className="i-name">Irtaza</h1>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Less clicking</div>
              <div className="i-title-item">More creating</div>
              <div className="i-title-item">Easy Access</div>
              <div className="i-title-item">No More Headace</div>
            </div>
          </div>

          <p className="i-desc">
            Navigate to your favorite actions on the websites you love with just
            one click.
          </p>
          <div className="landing-btn">
            <button className="source-code-btn1 btn">Source Code</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
