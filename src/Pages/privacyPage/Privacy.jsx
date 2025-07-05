import React from "react";
import PageMenu from "../../components/pageMenu/PageMenu";

const PrivacyPolicy = () => {
  const policy = [
    
    {
      title: "3. Sharing Your Information",
      description:
        "We only share necessary data with third-party recyclers when you choose to sell a device. We never sell your data to anyone.",
    },
    {
      title: "4. Cookies",
      description:
        "We use cookies for analytics and to improve your browsing experience. You can disable cookies via your browser settings.",
    },
    {
      title: "5. Your Rights",
      description:
        "You can request access, update, or deletion of your personal data by contacting us at [email address].",
    },
    {
      title: "6. Data Security",
      description:
        "We use SSL encryption and secure servers to protect your data.",
    },
  ];

  return (
    <div className="generalmain-page">
      <PageMenu />
      <div className="page-content">
        <h1 className="generalPage-heading">Privacy Policy</h1>
        <div className="page-desc">
          <p className="page-desc-normal-text">
            Your privacy matters to us. This policy outlines how we collect,
            use, and protect your personal information.
          </p>

          <div>
            <p className="page-desc-bold-text">
              <b>1. What We Collect</b>
            </p>
            <p className="page-desc-normal-text">
              <ul className="page-desc-list">
                <li>
                  Name, email, and contact number (when you submit a form or
                  place an order)
                </li>
                <li>
                  Device and location information (for service personalization)
                </li>
              </ul>
            </p>
          </div>
          <div>
            <p className="page-desc-bold-text">
              <b>2. How We Use Your Data</b>
            </p>
            <p className="page-desc-normal-text">
              <ul className="page-desc-list">
                <li>To process your order and send confirmation emails</li>
                <li>To show relevant offers and improve your experience</li>
                <li>For customer support and follow-up communication</li>
              </ul>
            </p>
          </div>

          {policy.map((item, index) => (
            <div key={index}>
              <p className="page-desc-bold-text">
                <b>{item.title}</b>
              </p>
              {typeof item.description === "string" ? (
                <p className="page-desc-normal-text">{item.description}</p>
              ) : (
                <div className="page-desc-normal-text">{item.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
