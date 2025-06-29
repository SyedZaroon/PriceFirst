import React from 'react'
import styles from './frequentlyQuestion.module.css'
import Button from '../button/Button'
import Faqs from '../faqs/Faqs'

const FrequentlyQuestion = () => {

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
        <h2 className={styles["faq-title"]}>
          Frequently Asked<span><br></br> Questions</span>
        </h2>
        <p>Still have a questions in mind?</p>
        <Button className={styles.btn} variant="primary" size="sm">
          Ask a Question
        </Button>
      
          </div>

          <div className={styles["faq-body"]}>
              {
                  faqs.map((value) => {
                      return (
                          <Faqs title={value.title} desc={value.desc} />
                      )
                  })
              }
          </div>
    </div>
  );
}

export default FrequentlyQuestion