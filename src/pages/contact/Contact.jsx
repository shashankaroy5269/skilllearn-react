import React from 'react';
import './Contact.css';


// Assets imports - paths according to your structure
import contactImg from '../../assets/ContactusPage/Contact-img.png';


const ContactPage = () => {
  return (
    <main>
      
      {/* Contact Section */}
      <section className="contact-sec">
        <div className="container">
          <div className="contact-wrpr mx-auto">
            <div className="row">
              {/* Left Part - Form */}
              <div className="col-12 col-md-6">
                <div className="left-part">
                  <div className="title4 fw-semibold">Get in Touch</div>
                  <h2 className="title2 fw-semibold">
                    Let’s Chat, Reach Out to Us
                  </h2>
                  <p>
                    Have questions or feedback? We’re here to help. Send us a
                    message, and we’ll respond within 24 hours
                  </p>

                  <hr />

                  <form action="">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-input">
                          <label className="label-form">First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-input">
                          <label className="label-form">Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-input">
                          <label className="label-form">Email Address</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-input">
                          <label className="label-form">Message</label>
                          <textarea
                            className="form-control"
                            rows="6"
                            placeholder="Leave us a message"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="terms"
                      />
                      <label className="form-check-label small" htmlFor="terms" >
                        I agree to our friendly{" "}
                        <a href="">Terms of conditions & privacy policy</a>
                      </label>
                    </div>
                    <div className="banner-btn d-flex">
                      <a href="" className="btn-secondary section-btn">
                        Submit Now
                        <span className="d-flex align-items-center justify-content-center">
                          <svg width="13" height="17" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.0637 0.0004902C12.2625 0.000613962 12.453 0.0796219 12.5936 0.22016C12.7341 0.360698 12.8131 0.551272 12.8132 0.750023L12.8132 9.23531C12.8168 9.33596 12.8 9.4363 12.764 9.53034C12.7279 9.62438 12.6733 9.71019 12.6033 9.78265C12.5334 9.85512 12.4495 9.91275 12.3568 9.95211C12.2641 9.99148 12.1644 10.0118 12.0637 10.0118C11.963 10.0118 11.8633 9.99148 11.7706 9.95211C11.6779 9.91275 11.5941 9.85512 11.5241 9.78265C11.4542 9.71019 11.3995 9.62438 11.3634 9.53034C11.3274 9.4363 11.3106 9.33596 11.3142 9.2353L11.3142 2.56022L1.28033 12.5941C1.13968 12.7347 0.948911 12.8137 0.749999 12.8137C0.551087 12.8137 0.360322 12.7347 0.21967 12.5941C0.0790175 12.4534 -1.01666e-07 12.2626 -4.30457e-07 12.0637C-7.59249e-07 11.8648 0.0790178 11.6741 0.21967 11.5334L10.2535 1.49956L3.57843 1.49956C3.47777 1.50311 3.37743 1.48635 3.28339 1.45028C3.18935 1.41422 3.10354 1.35958 3.03108 1.28963C2.95861 1.21967 2.90098 1.13584 2.86162 1.04314C2.82226 0.950428 2.80197 0.850741 2.80197 0.750022C2.80197 0.649304 2.82226 0.549617 2.86162 0.456909C2.90098 0.364201 2.95861 0.280371 3.03108 0.21042C3.10354 0.140469 3.18935 0.0858291 3.28339 0.0497613C3.37743 0.0136935 3.47777 -0.00306335 3.57843 0.0004896L12.0637 0.0004902Z" fill="black" />
                          </svg>
                        </span>
                      </a>
                    </div>
                  </form>
                </div>
              </div>

              {/* Right Part */}
              <div className="col-12 col-md-6">
                <div className="right-part">
                  <div className="contact-pic mx-auto">
                    <img src={contactImg} alt="Contact" />
                  </div>
                  <div className="contact-info mx-auto">
                    {/* Email Info */}
                    <div className="info">
                      <div className="d-flex align-items-center">
                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
                          <rect width="54" height="54" rx="27" fill="#CDE7E3" />
                          <path d="M15.1191 19.6425C15.1191 19.016 15.3695 18.415 15.8151 17.972C16.2606 17.5289 16.865 17.28 17.4951 17.28H36.5031C37.1333 17.28 37.7376 17.5289 38.1832 17.972C38.6288 18.415 38.8791 19.016 38.8791 19.6425V33.8175C38.8791 34.4441 38.6288 35.045 38.1832 35.4881C37.7376 35.9311 37.1333 36.18 36.5031 36.18H17.4951C16.865 36.18 16.2606 35.9311 15.8151 35.4881C15.3695 35.045 15.1191 34.4441 15.1191 33.8175V19.6425ZM19.2997 19.6425L26.9991 26.3414L34.6986 19.6425H19.2997ZM36.5031 21.2124L27.782 28.8008C27.5654 28.9895 27.2872 29.0935 26.9991 29.0935C26.7111 29.0935 26.4329 28.9895 26.2162 28.8008L17.4951 21.2124V33.8175H36.5031V21.2124Z" fill="#045E5C" />
                        </svg>
                        <div className="email-info">
                          <h4 className="title3 fw-medium">Email</h4>
                          <a href="mailto:das381901@gmail.com">das381901@gmail.com</a>
                        </div>
                      </div>
                    </div>
                    {/* Phone Info */}
                    <div className="info">
                      <div className="d-flex align-items-center">
                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
                          <rect width="54" height="54" rx="27" fill="#CDE7E3" />
                          <path d="M24.6927 19.513L20.464 14.4368C19.9765 13.8518 19.0828 13.8544 18.5165 14.4446L15.039 18.0675C14.004 19.1451 13.7078 20.7453 14.3065 22.0283C17.883 29.7307 23.8561 35.9512 31.2577 39.6813C32.4902 40.3039 34.0277 39.9959 35.0627 38.9182L38.5727 35.2615C39.1414 34.6701 39.1427 33.7354 38.5752 33.2285L33.6752 28.8542C33.1627 28.3966 32.3664 28.4564 31.8527 28.992L30.1477 30.7677C30.0606 30.8632 29.9457 30.9262 29.8207 30.9469C29.6958 30.9676 29.5677 30.9448 29.4565 30.8821C26.6696 29.213 24.3579 26.8057 22.7565 23.9054C22.6959 23.7896 22.6738 23.6561 22.6937 23.5259C22.7136 23.3956 22.7744 23.2759 22.8665 23.1853L24.5665 21.4161C25.0815 20.8779 25.1377 20.0472 24.6927 19.513Z" stroke="#045E5C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="email-info">
                          <h4 className="title3 fw-medium">Phone</h4>
                          <a href="tel:+919876543210">+91 9876543210</a>
                        </div>
                      </div>
                    </div>
                    {/* Address Info */}
                    <div className="info">
                      <div className="d-flex align-items-center">
                        <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
                          <rect width="54" height="54" rx="27" fill="#CDE7E3" />
                          <path d="M39.5968 36.2221H38.1935V23.7217C38.1935 23.1078 37.9471 22.519 37.5086 22.0848C37.07 21.6507 36.4751 21.4068 35.8548 21.4068H31.6452V16.3141C31.645 15.9249 31.5458 15.5421 31.3566 15.201C31.1674 14.8598 30.8944 14.5714 30.5628 14.3624C30.2312 14.1533 29.8517 14.0304 29.4594 14.005C29.0671 13.9795 28.6747 14.0523 28.3183 14.2168L16.1571 19.835C15.754 20.0219 15.413 20.3185 15.1738 20.69C14.9346 21.0616 14.8072 21.4929 14.8065 21.9335V36.2221H13.4032C13.0311 36.2221 12.6742 36.3685 12.411 36.6289C12.1478 36.8894 12 37.2427 12 37.6111C12 37.9794 12.1478 38.3327 12.411 38.5932C12.6742 38.8537 13.0311 39 13.4032 39H39.5968C39.9689 39 40.3258 38.8537 40.589 38.5932C40.8522 38.3327 41 37.9794 41 37.6111C41 37.2427 40.8522 36.8894 40.589 36.6289C40.3258 36.3685 39.9689 36.2221 39.5968 36.2221ZM35.3871 24.1847V36.2221H31.6452V24.1847H35.3871ZM17.6129 22.2274L28.8387 17.0432V36.2221H17.6129V22.2274ZM26.9677 25.5736V26.9626C26.9677 27.3309 26.8199 27.6842 26.5567 27.9447C26.2936 28.2052 25.9367 28.3515 25.5645 28.3515C25.1924 28.3515 24.8354 28.2052 24.5723 27.9447C24.3091 27.6842 24.1613 27.3309 24.1613 26.9626V25.5736C24.1613 25.2053 24.3091 24.852 24.5723 24.5915C24.8354 24.331 25.1924 24.1847 25.5645 24.1847C25.9367 24.1847 26.2936 24.331 26.5567 24.5915C26.8199 24.852 26.9677 25.2053 26.9677 25.5736ZM22.2903 25.5736V26.9626C22.2903 27.3309 22.1425 27.6842 21.8793 27.9447C21.6162 28.2052 21.2593 28.3515 20.8871 28.3515C20.5149 28.3515 20.158 28.2052 19.8949 27.9447C19.6317 27.6842 19.4839 27.3309 19.4839 26.9626V25.5736C19.4839 25.2053 19.6317 24.852 19.8949 24.5915C20.158 24.331 20.5149 24.1847 20.8871 24.1847C21.2593 24.1847 21.6162 24.331 21.8793 24.5915C22.1425 24.852 22.2903 25.2053 22.2903 25.5736ZM22.2903 31.5923V32.9813C22.2903 33.3496 22.1425 33.7029 21.8793 33.9634C21.6162 34.2239 21.2593 34.3702 20.8871 34.3702C20.5149 34.3702 20.158 34.2239 19.8949 33.9634C19.6317 33.7029 19.4839 33.3496 19.4839 32.9813V31.5923C19.4839 31.224 19.6317 30.8707 19.8949 30.6102C20.158 30.3497 20.5149 30.2034 20.8871 30.2034C21.2593 30.2034 21.6162 30.3497 21.8793 30.6102C22.1425 30.8707 22.2903 31.224 22.2903 31.5923ZM26.9677 31.5923V32.9813C26.9677 33.3496 26.8199 33.7029 26.5567 33.9634C26.2936 34.2239 25.9367 34.3702 25.5645 34.3702C25.1924 34.3702 24.8354 34.2239 24.5723 33.9634C24.3091 33.7029 24.1613 33.3496 24.1613 32.9813V31.5923C24.1613 31.224 24.3091 30.8707 24.5723 30.6102C24.8354 30.3497 25.1924 30.2034 25.5645 30.2034C25.9367 30.2034 26.2936 30.3497 26.5567 30.6102C26.8199 30.8707 26.9677 31.224 26.9677 31.5923Z" fill="#045E5C" />
                        </svg>
                        <div className="email-info">
                          <h4 className="title3 fw-medium">Address</h4>
                          <span><a>123, Webskitters Academy</a></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-sec">
        <div className="container">
          <div className="map-location">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.098748366487!2d88.42858217592446!3d22.575389432857502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ade5428613%3A0x6731e031804b9016!2sWebskitters%20Academy%20-%20Best%20IT%20Training%20Institute%20in%20Kolkata!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
    </main>
  );
};

export default ContactPage;