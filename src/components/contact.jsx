import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

export const Contact = (props) => {
  // Scroll to top handler
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div id="contact" style={{ backgroundImage: "url('path/to/background-image.jpg')", backgroundSize: "cover", padding: "50px 0" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div style={{ backgroundColor: "#5472D2", padding: "30px", borderRadius: "15px", color: "#fff", textAlign: "start", position: "relative" }}>
                <p style={{ marginBottom: "20px" }}>
                  သာသနာတည်တံ့နိုင်ရေးနှင့် သဲအင်းဂူဝိပဿနာဓမ္မရိပ်သာ၏ အထွေထွေပြုပြင်ထိန်းသိမ်းရေးလုပ်ငန်းများတွင်  <br /> သုံးစွဲရန်ရည်ရွယ်၍ “သာသနာ့ပျိုးဥယျာဉ် Android Application” ဖြင့် လစဉ်လှူဒါန်းနိုင်ပါသည်။
                </p>
                <a
                  href="#features"
                  className="btn btn-light btn-lg"
                  style={{ borderRadius: "20px", padding: "10px 30px" }}
                >
                  လှူဒါန်းရန်
                </a>
                <div style={{ position: "absolute", right: "20px", top: "30%", transform: "translateY(-50%)" }}>
                  <img src="img/kbz.png" alt="Kpay QR" style={{ maxWidth: "200px", borderRadius: "10px" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info Section Above Footer */}
      <div className="container" style={{ padding: "20px 0", marginTop: "40px", borderRadius: "8px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: 2, minWidth: "220px", color: "#2D3194", fontSize: "1.1em" }}>
            သဲအင်းဂူတိုက်ခွဲ (၃၂) အောင်လံဆရာတော်ဘုရားကြီး၏သာသနာ့ပျိုးဥယျာဉ်ကျောင်းတိုက်
          </div>
          <div style={{ flex: 1, minWidth: "220px", color: "#1877f3", fontSize: "1em" }}>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li>
                <span style={{ color: "#2D3194" }}>•</span> 09-765003300, 09-795003300
              </li>
              <li style={{ marginTop: "8px" }}>
                <span style={{ color: "#2D3194" }}>•</span>{" "}
                <a
                  href="https://www.facebook.com/SarsanaNurseryMonastery"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#1877f3", textDecoration: "none", fontWeight: "bold" }}
                >
                  <FontAwesomeIcon icon={faFacebook} style={{ marginRight: "6px" }} />
                  www.facebook.com/SarsanaNurseryMonastery
                </a>
              </li>
            </ul>
          </div>
          <div style={{ marginLeft: "auto" }}>
            <button
              onClick={handleScrollTop}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#FFCC00",
                fontSize: "3em",
                outline: "none",
              }}
              title="Scroll to top"
            >
              <FontAwesomeIcon icon={faArrowCircleUp} />
            </button>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2025 All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};