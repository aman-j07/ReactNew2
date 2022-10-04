import React from "react";

const Features = () => {
  return (
    <div id="features">
      <div id="Payroll">
        <img height="180px" width="535px" src="https://www.greythr.com/home/ghr_payroll.svg" />
        <div>
            <div className="blueHeadDiv"></div>
          <h2 className="featuresHeading">PAYROLL PROCESSING + STATUTORY COMPLIANCE</h2>
          <p>Process payroll accurately</p>
          <p>Disburse payslips with one click</p>
          <p>100% statutory compliance with PF/ESI/PT/TDS etc</p>
          <a className="aLearnMore">LEARN MORE ➝</a>
        </div>
      </div>
      <div id="leave">
      <div>
            <div className="blueHeadDiv"></div>
          <h2 className="featuresHeading">LEAVE MANAGEMENT</h2>
          <p>Define your company leave policy</p>
          <p>Leave tracking and complete leave accounting</p>
          <p>Access accurate leave balance and transactions, anytime</p>
          <a className="aLearnMore">LEARN MORE ➝</a>
        </div>
      <img height="245px" width="535px" src="https://www.greythr.com/home/ghr_leave_management.svg" />
      </div>
      <div id="attendance">
      <img height="180px" width="535px" src="https://www.greythr.com/home/ghr_attendance_management.svg" />
        <div>
            <div className="blueHeadDiv"></div>
          <h2 className="featuresHeading">ATTENDANCE MANAGEMENT</h2>
          <p>Capture real-time attendance from Access control / biometric machines</p>
          <p>Define your company attendance policy</p>
          <p>Daily accurate attendance status with email and SMS alerts</p>
          <a className="aLearnMore">LEARN MORE ➝</a>
        </div>
      </div>
      <div id="employee"> <div>
            <div className="blueHeadDiv"></div>
          <h2 className="featuresHeading">EMPLOYEE LIFECYCLE MANAGEMENT</h2>
          <p>Manage employee records digitally</p>
          <p>Generate HR letters</p>
          <p>Track all company assets given to employees</p>
          <a className="aLearnMore">LEARN MORE ➝</a>
        </div>
      <img height="195px" width="535px" src="https://www.greythr.com/home/ghr_leave_management.svg" /></div>
      <div id="mobApp">
      <img height="255px" width="535px" src="https://www.greythr.com/home/ghr_mobile.svg" />
        <div>
            <div className="blueHeadDiv"></div>
          <h2 className="featuresHeading">MOBILE APP FOR EMPLOYEES</h2>
          <p>Access payslips, reimbursements and tax info - anytime, anywhere</p>
          <p>Raise trouble tickets via mobile Help Desk</p>
          <p>Apply for Leave and get approvals online</p>
          <a className="aLearnMore">LEARN MORE ➝</a>
        </div>
      </div>
    </div>
  );
};

export default Features;
