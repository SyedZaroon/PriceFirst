import React, { useState } from 'react'
import styles from './frequentlyQuestion.module.css'
import Button from '../button/Button'
import Faqs from '../faqs/Faqs'


const FrequentlyQuestion = () => {

  const [openIndex, setOpenIndex] = useState(null);



    const faqs = [
      {
        title: "Popular Devices Right Now",
        desc: "Yes, your price is locked in for 14 days. If your phone is received after that, you may be offered an updated quote.",
      },
      {
        title: "Popular Devices Right Now",
        desc: "Yes, your price is locked in for 14 days. If your phone is received after that, you may be offered an updated quote.",
      },
      {
        title: "Popular Devices Right Now",
        desc: "Yes, your price is locked in for 14 days. If your phone is received after that, you may be offered an updated quote.",
      },
      {
        title: "Popular Devices Right Now",
        desc: "Yes, your price is locked in for 14 days. If your phone is received after that, you may be offered an updated quote.",
      },
      {
        title: "Popular Devices Right Now",
        desc: "Yes, your price is locked in for 14 days. If your phone is received after that, you may be offered an updated quote.",
      },
    ];

  return (
    <div className={styles["faq-section"]}>
      <div className={styles["faq-content"]}>
        <h1 className={styles["faq-title"]}>
          Frequently Asked<br></br>
          <span>
             Questions
          </span>
        </h1>
        <p>Still have a questions in mind?</p>
        <Button className={styles.btn} variant="primary" size="sm">
          Ask a Question
        </Button>
      </div>

      <div className={styles["faq-body"]}>
        {faqs.map((item, index) => (
          <Faqs
            key={index}
            title={item.title}
            desc={item.desc}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}

export default FrequentlyQuestion