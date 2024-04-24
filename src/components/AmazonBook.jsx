import React from "react";
import amazonLogo from "../assets/amazon-logo.png";
import book from "../assets/book.png";

function AmazonBook() {
  return (
    <section className="amazon-book sec-padding" id="amazon-book">
      <div className="container">
        <div className="row align-items-center g-4 g-lg-5">
          <div className="col-lg-7">
            <h3>Intelligent Strategies: The path to tax free living</h3>
            <p>
              Get Your Copy of my book for financial freedom and smart
              tax-saving strategies! Available on the Amazon store now!
            </p>
            <img src={amazonLogo} alt="amazon logo" className="amazon-logo" />
          </div>
          <div className="col-lg-5 text-center text-lg-end">
            <img src={book} className="book-cover" alt="book" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AmazonBook;
