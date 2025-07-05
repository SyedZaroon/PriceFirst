import React from "react";
import PageMenu from "../../components/pageMenu/PageMenu";

const AboutPage = () => {
  return (
    <div className="generalmain-page">
      <PageMenu />
      <div className="page-content">
        <h1 className="generalPage-heading">About Us</h1>
        <div className="page-desc">
          <div>
            <p className="page-desc-blod">
              Price First is built with a simple goal in mind: to help people
              get the highest possible offer for their old mobile phones and
              gadgets—quickly, safely, and transparently. In a digital world
              full of options, we make it easy to compare verified buyers, lock
              in the best price, and get paid fast.
            </p>
            <p className="page-desc-blod">
              We’re proud to be a UK-based price comparison platform designed
              specifically for tech resale. Our mission is to empower users with
              real-time data, trusted recyclers, and a hassle-free process so
              they can make smart, confident decisions.
            </p>
          </div>
          <ul className="page-desc-list">
            <li>Get top offers from reliable buyers, updated in real-time</li>
            <li>Compare prices across certified recyclers in seconds</li>
            <li>Free postage & fast payments—always</li>
            <li>No hidden fees and no obligations</li>
            <li>
              Device condition guarantees so you know exactly what to expect
            </li>
            <li>100% free to use</li>
          </ul>
          <div>
            <p className="page-desc-bold-text">
              <b>Our Promise</b>
            </p>
            <p className="page-desc-normal-text">
              We stand with the consumer. Whether you're upgrading,
              decluttering, or recycling responsibly, Price First makes the
              process effortless and rewarding. We never favor one buyer over
              another—we simply show you the best deal, transparently and
              independently.
            </p>
          </div>
          <div>
            <p className="page-desc-bold-text">
              <b>Our Vision</b>
            </p>
            <p className="page-desc-normal-text">
              To become the UK’s most trusted tech resale comparison
              platform—where every user feels confident they’re getting the
              fairest price, with zero stress. We love what we do. And we’re
              proud to help thousands of people every month turn their old
              gadgets into instant cash.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
