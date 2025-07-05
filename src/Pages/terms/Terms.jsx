import React from 'react'
import PageMenu from '../../components/pageMenu/PageMenu';

const Terms = () => {

  const terms = [
    {
      title: "1. Use of the Site",
      description:
        "You agree to use the site only for lawful purposes and in accordance with these terms.",
    },
    {
      title: "2. Service Overview",
      description:
        "Price First provides a price comparison service for selling used mobile phones and gadgets. We do not buy devices directly. Offers are made by third-party recyclers.",
    },
    {
      title: "3. Accuracy of Information",
      description:
        "We strive to keep all prices and information accurate, but we do not guarantee their completeness or correctness. Final quotes are provided by the individual buyers.",
    },
    {
      title: "4. User Responsibilities",
      description:
        "You are responsible for ensuring the device you send matches the condition selected. Misrepresentation may result in reduced or canceled offers.",
    },
    {
      title: "5. Intellectual Property",
      description:
        "All website content including logos, graphics, and text belongs to Price First and may not be copied or reused without permission.",
    },
    {
      title: "6. Limitation of Liability",
      description:
        "We are not liable for any loss or damage resulting from your use of third-party services linked through our site.",
    },
    {
      title: "7. Changes to Terms",
      description:
        "We may update these terms from time to time. Continued use of the site constitutes your agreement to any changes.",
    },
  ];


  return (
    <div className="generalmain-page">
      <PageMenu />
      <div className="page-content">
        <h1 className="generalPage-heading">Terms & Conditions</h1>
        <div className="page-desc">
          <div>
            <p className="page-desc-normal-text">
              Welcome to Price First. By accessing and using our website, you
              agree to the following terms:
            </p>
          </div>
          {
            terms.map((value, index) => {
              return (
                <div key={index}>
                  <p className="page-desc-bold-text">
                    <b>{value.title}</b>
                  </p>
                  <p className="page-desc-normal-text">{value.description}</p>
                </div>
              );
            }
            )
          }
        </div>
      </div>
    </div>
  );
}

export default Terms