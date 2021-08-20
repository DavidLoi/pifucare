import React from "react";
import questions from "../data/Questions";

const FAQ = () => {
  return (
    <div>
      <h1 className="faq-title">FAQs</h1>
      {questions.map(({ question, answer }) => {
        return (
          <div className="faq-pair">
            <h3 className="faq-question">{question}</h3>
            <p>{answer}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
