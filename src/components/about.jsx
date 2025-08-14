import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>သဲအင်းဂူတိုက်ခွဲ (၃၂) အောင်လံဆရာတော်ဘုရားကြီး၏ သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက်</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              
              <div className="list-style">
                <a
                  href="#about"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Read More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
