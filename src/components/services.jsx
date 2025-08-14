import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h3
            style={{
              textAlign: "center",
              color: "#FFCC00",
            }}
          >
            သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက် တည်ထောင်ခြင်းရည်ရွယ်ချက်
          </h3>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
