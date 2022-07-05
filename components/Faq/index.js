import React from "react";
import "../../styles/faq.scss";

const faqData = [
  {
    id: 1,
    key: "One",
    question: "How much is the shipping cost?",
    answer:
      "<span>In addition to the product price, the shipping fee will be charged separately for each region as follows.</span>" +
      "<br/>Hokkaido - ¥850" +
      "<br/>Kanto (Ibaraki / Tochigi / Gunma / Saitama / Chiba / Tokyo / Kanagawa / Yamanashi)-¥ 600" +
      "<br/>Hokuriku / Shinetsu (Niigata / Nagano / Toyama / Ishikawa)- ¥600" +
      "<br/>Chubu (Shizuoka / Aichi / Gifu / Fukui / Mie)- ¥600",
  },
  {
    id: 2,
    key: "Two",
    question: "How do I cancel?",
    answer:
      "Easy! Simply log into your account to make changes to your plan. You can easily make changes to your information and cancel your subscription.",
  },
  {
    id: 3,
    key: "Three",
    question: "When will I be billed?",
    answer:
      "Your first payment will be billed on the day that you sign up. After this, your next payment will automatically be billed on the 20th day of the month before you receive your next Pack.",
  },
  {
    id: 4,
    key: "Four",
    question: "How can I contact customer support?",
    answer:
      "If you subscribe before the 15th of the month, you will receive that month's Pack. If you subscribe after the 15th, you will receive the following month's Pack. Shipping begins the first business day of each month.",
  },
];

const Faq = () => {
  console.log(faqData);
  return (
    <div id="faq" className="faq">
      <div className="container">
        <h3 className="title text-center">FAQ</h3>
        <div className="accordion" id="accordionExample">
          <div className="row">
            {faqData.map((item) => {
              return (
                <div className="accordion-item col-lg-6" key={item.id}>
                  <h2 className="accordion-header" id={"heading" + item.key}>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={"#collapse" + item.key}
                      aria-expanded="false"
                      aria-controls={"collapse" + item.key}>
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={"collapse" + item.key}
                    className="accordion-collapse collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div
                      className="accordion-body"
                      dangerouslySetInnerHTML={{ __html: item.answer }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
