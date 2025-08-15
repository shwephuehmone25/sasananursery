import React from "react";

export const Aim = (props) => {
  const aimData = props.data?.Aim || props.data;

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက် တည်ထောင်ခြင်းရည်ရွယ်ချက်</h2>
              <p>{aimData?.paragraph || "loading..."}</p>
              <div className="list-style row">
                {/* Column 1: Why */}
                <div className="col-sm-6">
                  <ul>
                    {aimData?.Why
                      ? aimData.Why.map((d, i) => <li key={`why-${i}`}>{d}</li>)
                      : "loading"}
                  </ul>
                </div>
                {/* Column 2: Why2 */}
                <div className="col-sm-6">
                  <ul>
                    {aimData?.Why2
                      ? aimData.Why2.map((d, i) => (
                          <li key={`why2-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
              <a
                href="#about"
                className="btn btn-custom btn-lg page-scroll"
                style={{ marginTop: "1rem" }}
              >
                Read More
              </a>
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
