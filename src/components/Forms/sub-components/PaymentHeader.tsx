import React from "react";
import logoIcon from "../../../images/logo_scroll.png";
import logoText from "../../../images/logo_stay.png";
import securePay from "../../../images/secure-payment.png";

const PaymentHeader = () => {
  return (
    <React.Fragment>
      <div className="payments-header">
        <img src={logoIcon} alt="" className="logo-icon" />
        <img src={logoText} alt="" className="logo-text" />
        <img src={securePay} alt="" className="secure-pay" />
      </div>
    </React.Fragment>
  );
};

export default PaymentHeader;
