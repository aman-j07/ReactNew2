import React from "react";

const Support = () => {
  return (
    <div id="support">
      <div className="blueHeadDiv"></div>
      <h2>Exceptional Support</h2>
      <div id="supportCards">
        <div className="supportCard">
          <img src="https://www.greythr.com/home/ghr_implementation.svg" />
          <div>
            <h2>PROFESSIONAL IMPLEMENTATION</h2>
            <p>Expert implementation engineers drive your complete end-to-end account setup along with two-month on-boarding support.</p>
          </div>
        </div>
        <div className="supportCard">
          <img src="https://www.greythr.com/home/ghr_customer-care.svg" />
          <div>
            <h2>COMPLETE CUSTOMER CARE</h2>
            <p>With a first response time lesser than 2 hours and a resolution time lesser than 6 hours for 85% of customer queries, you’ll love our Customer Care.</p>
          </div>
        </div>
        <div className="supportCard">
          <img src="https://www.greythr.com/home/ghr_guidance.svg" />
          <div>
            <h2>GUIDANCE FOR HR AND PAYROLL EXECS</h2>
            <p>Join our growing list of 3000+ webinar participants to learn the latest HR and payroll best practices. Our free Expert Series Webinars host industry experts, who'll guide you on the latest learning requirements.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
