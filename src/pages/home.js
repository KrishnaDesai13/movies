import React from "react";
import sunset from "../assets/images/sunset.jpg";

const HomePage = () => {
  return (
    <>
      <div
        className="bkkg"
        style={{
          backgroundImage: `url(${sunset})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center", 
        }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-6 leftcol">
              <h2
                style={{
                  color: "white",
                  textAlign: "bottom-right",
                }}
              >
                Welcome to our upcoming website!
              </h2>
              <p style={{ color: "white", textAlign: "bottom-right" }}>
                We are thrilled to announce that our new site is under
                construction and will be launching soon. <br />
                As we work diligently to create the best possible experience for
                our visitors. <br />
                We invite you to join us on this journey.
              </p>

              <div className="boxes d-flex">
                <input type="text" placeholder="Enter your Email" />
                <button className="button" type="text">
                  NOTIFY ME
                </button>
                <div />
              </div>
            </div>

            <div className="col-6 d-flex">
              <div className="box">33 </div>

              <div className="box">17</div>
              <div className="box">39</div>
              <div className="box">23</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
