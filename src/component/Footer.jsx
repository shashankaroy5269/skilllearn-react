import React from "react";

// image imports
import ftrEclipse from "../assets/CommonAssets/Ftr-eclipse.png";
import ftrImg from "../assets/CommonAssets/Ftr-img.png";

const Footer = () => {
  return (
    <footer className="ftr-sec">
      <div className="container">

        {/* FOOTER TOP */}
        <div className="ftr-top">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="ftr-logo">
                {/* <img src="" alt="" /> */}
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="ftr-form">
                <form>
                  <div className="input-wrpr d-flex ms-auto justify-content-between">
                    <input type="email" placeholder="Your email address" />
                    <div className="button-wrpr">
                      <input type="submit" value="Submit Now" />
                      <span className="arrow-wrpr">
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.28 6.2372C17.4205 6.37779 17.4994 6.56837 17.4994 6.76707C17.4994 6.96577 17.4205 7.15635 17.28 7.29694L11.28 13.2955C11.2114 13.3692 11.1286 13.4283 11.0366 13.4692C10.9446 13.5102 10.8453 13.5323 10.7446 13.534C10.6439 13.5358 10.5438 13.5173 10.4505 13.4796C10.3571 13.4419 10.2722 13.3857 10.201 13.3145C10.1298 13.2433 10.0736 13.1585 10.0359 13.0651C9.99821 12.9718 9.97968 12.8718 9.98146 12.7711C9.98323 12.6704 10.0053 12.5711 10.0463 12.4792C10.0873 12.3872 10.1464 12.3044 10.22 12.2357L14.94 7.51689L0.750049 7.51689C0.551138 7.51689 0.36037 7.43789 0.219719 7.29727C0.0790669 7.15665 0.0000493 6.96594 0.0000493 6.76707C0.0000493 6.56821 0.079067 6.37749 0.219719 6.23687C0.36037 6.09625 0.551138 6.01725 0.750049 6.01725L14.94 6.01725L10.22 1.29839C10.1464 1.22975 10.0873 1.14697 10.0463 1.05499C10.0053 0.963014 9.98323 0.863724 9.98146 0.763046C9.97968 0.662367 9.99821 0.562362 10.0359 0.468997C10.0736 0.375631 10.1298 0.290818 10.201 0.219616C10.2722 0.148415 10.3571 0.0922837 10.4505 0.0545718C10.5438 0.01686 10.6439 -0.00165996 10.7446 0.000116399C10.8453 0.00189276 10.9446 0.023929 11.0366 0.064911C11.1286 0.105893 11.2114 0.164981 11.28 0.23865L17.28 6.2372Z"
                            fill="#fff"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="ftr-btm">
          <div className="row">

            {/* LEFT */}
            <div className="col-12 col-md-6">
              <div className="ftr-btm-top">
                <div className="row">

                  {/* ABOUT */}
                  <div className="col-6 col-sm-4">
                    <div className="left-list">
                      <div className="list-hdr fw-medium">About Us</div>
                      <ul className="list-unstyled">
                        <li className="ftr-list"><a href="" className="ftr-links">Contact</a></li>
                        <li className="ftr-list"><a href="" className="ftr-links">Support</a></li>
                        <li className="ftr-list"><a href="" className="ftr-links">Resources</a></li>
                        <li className="ftr-list"><a href="" className="ftr-links">Help Center</a></li>
                        <li className="ftr-list"><a href="" className="ftr-links">Blog</a></li>
                      </ul>
                    </div>
                  </div>

                  {/* COURSES */}
                  <div className="col-6 col-sm-4">
                    <div className="mid-list">
                      <div className="list-hdr fw-medium">Courses</div>
                      <ul className="list-unstyled">
                        <li className="ftr-list"><a href="" className="ftr-links">Language Learning</a></li>
                        <li className="ftr-list"><a href="" className="ftr-links">Testimonials</a></li>
                        <li className="ftr-list"><a href="" className="ftr-links">Events</a></li>
                        <li className="ftr-list"><a href="" className="ftr-links">Partners</a></li>
                        <li className="ftr-list"><a href="" className="ftr-links">Careers</a></li>
                      </ul>
                    </div>
                  </div>

                  {/* TERMS */}
                  <div className="col-6 col-sm-4">
                    <div className="right-list ms-auto">
                      <div className="list-hdr fw-medium">Terms</div>
                      <ul className="list-unstyled">
                        <li className="ftr-list"><a href="" className="ftr-links">Privacy</a></li>
                        <li className="ftr-list"><a href="" className="ftr-links">Cookies</a></li>
                        <li className="ftr-list"><a href="" className="ftr-links">Sitemap</a></li>
                        <li className="ftr-list"><a href="" className="ftr-links">Accessibility</a></li>
                        <li className="ftr-list"><a href="" className="ftr-links">Terms of Service</a></li>
                      </ul>
                    </div>
                  </div>

                  {/* GET IN TOUCH */}
                  <div className="col-6 col-sm-8">
                    <div className="list-hdr fw-medium">Get in Touch</div>
                    <div className="row">
                      <div className="col-12 col-xl-6">
                        <div className="addr-left">
                          <div className="contact ftr-links">
                            Call us directly?{" "}
                            <a href="tel:+919875465304">+91-9875465304</a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-xl-6">
                        <div className="addr-right">
                          <div className="contact ftr-links">
                            Address{" "}
                            <a
                              href="https://maps.google.com/?q=123+Learning+Point"
                              target="_blank"
                              rel="noreferrer"
                            >
                              123 Learning Point
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>

              {/* SOCIAL */}
              <div className="ftr-btm-btm">
                <div className="list-hdr fw-medium">Follow us on</div>

                <ul className="scl-list d-flex p-0">
                  <li>
                    <a href="" className="scl-links">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.2222 1H6.77778C5.24542 1 3.77582 1.60873 2.69227 2.69227C1.60873 3.77582 1 5.24542 1 6.77778V21.2222C1 22.7546 1.60873 24.2242 2.69227 25.3077C3.77582 26.3913 5.24542 27 6.77778 27H21.2222C22.7546 27 24.2242 26.3913 25.3077 25.3077C26.3913 24.2242 27 22.7546 27 21.2222V6.77778C27 5.24542 26.3913 3.77582 25.3077 2.69227C24.2242 1.60873 22.7546 1 21.2222 1Z"
                          stroke="#100F0F"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M13.9999 19.7777C15.5323 19.7777 17.0019 19.169 18.0855 18.0855C19.169 17.0019 19.7777 15.5323 19.7777 13.9999C19.7777 12.4676 19.169 10.998 18.0855 9.91444C17.0019 8.8309 15.5323 8.22217 13.9999 8.22217C12.4676 8.22217 10.998 8.8309 9.91444 9.91444C8.8309 10.998 8.22217 12.4676 8.22217 13.9999C8.22217 15.5323 8.8309 17.0019 9.91444 18.0855C10.998 19.169 12.4676 19.7777 13.9999 19.7777Z"
                          stroke="#100F0F"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.9444 7.50022C22.3275 7.50022 22.6949 7.34803 22.9658 7.07715C23.2367 6.80626 23.3889 6.43886 23.3889 6.05577C23.3889 5.67268 23.2367 5.30528 22.9658 5.0344C22.6949 4.76351 22.3275 4.61133 21.9444 4.61133C21.5614 4.61133 21.194 4.76351 20.9231 5.0344C20.6522 5.30528 20.5 5.67268 20.5 6.05577C20.5 6.43886 20.6522 6.80626 20.9231 7.07715C21.194 7.34803 21.5614 7.50022 21.9444 7.50022Z"
                          fill="#100F0F"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="" className="scl-links">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.08367 23.4957C1.21243 25.0773 2.42267 26.2876 4.00433 26.4163C6.00262 26.5785 9.19133 26.75 13.75 26.75C18.3087 26.75 21.4974 26.5785 23.4957 26.4163C25.0773 26.2876 26.2876 25.0773 26.4163 23.4957C26.5785 21.4974 26.75 18.3087 26.75 13.75C26.75 9.19133 26.5785 6.00262 26.4163 4.00433C26.2876 2.42267 25.0773 1.21243 23.4957 1.08367C21.4974 0.921476 18.3087 0.75 13.75 0.75C9.19133 0.75 6.00262 0.921476 4.00433 1.08367C2.42267 1.21243 1.21243 2.42267 1.08367 4.00433C0.921476 6.00262 0.75 9.19133 0.75 13.75C0.75 18.3087 0.921476 21.4974 1.08367 23.4957Z"
                          stroke="#100F0F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M17.1648 26.7148V17.4886H20.5937C21.1434 17.4886 21.638 17.1264 21.7185 16.5829C21.8264 15.8199 21.8232 15.0453 21.7092 14.2831C21.6299 13.7495 21.1545 13.3979 20.6147 13.3979H17.1648C17.1648 10.3064 17.6792 9.85694 20.5788 9.80061C21.1353 9.78946 21.6343 9.42299 21.7154 8.87204C21.8516 7.94656 21.7971 7.13746 21.7117 6.56918C21.633 6.04299 21.162 5.70127 20.6308 5.70561C15.5057 5.75018 12.5869 6.35623 12.5869 13.3979H9.93243C9.41614 13.3979 8.95804 13.721 8.88004 14.2311C8.79585 14.7808 8.74509 15.5776 8.88562 16.5464C8.96609 17.106 9.47 17.4886 10.0358 17.4886H12.5869V26.7464"
                          stroke="#100F0F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="" className="scl-links">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.75 13.75C0.75 7.62221 0.75 4.55695 2.65347 2.65347C4.55695 0.75 7.62084 0.75 13.7514 0.75C19.8792 0.75 22.9431 0.75 24.8465 2.65347C26.75 4.55695 26.75 7.62084 26.75 13.75C26.75 19.8778 26.75 22.9431 24.8465 24.8465C22.9431 26.75 19.8792 26.75 13.75 26.75C7.62221 26.75 4.55832 26.75 2.65347 24.8465C0.751368 22.9417 0.75 19.8792 0.75 13.75Z"
                          stroke="#100F0F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.90796 20.5919L12.6471 14.8541M12.6471 14.8541L6.90796 6.90771H10.7081L14.8544 12.6469L20.5922 6.90771M12.6471 14.8541L16.7907 20.5919H20.5922L14.8544 12.6455"
                          stroke="#100F0F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>

                  <li>
                    <a href="" className="scl-links">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.75 13.75C0.75 7.62221 0.75 4.55695 2.65347 2.65347C4.55695 0.75 7.62084 0.75 13.75 0.75C19.8778 0.75 22.9431 0.75 24.8465 2.65347C26.75 4.55695 26.75 7.62084 26.75 13.75C26.75 19.8778 26.75 22.9431 24.8465 24.8465C22.9431 26.75 19.8792 26.75 13.75 26.75C7.62221 26.75 4.55695 26.75 2.65347 24.8465C0.75 22.9431 0.75 19.8792 0.75 13.75Z"
                          stroke="#100F0F"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.5658 13.7294V9.65151C6.5658 9.26561 6.88327 8.95361 7.27464 8.95361H9.98138C10.5835 8.95361 11.202 9.05624 11.6508 9.45309C12.1298 9.8773 12.5951 10.5341 12.5732 11.4099C12.5458 12.4362 11.7986 13.6446 10.7025 13.7294C9.6078 13.8142 8.57737 13.7294 6.5658 13.7294ZM6.5658 13.7294L6.56716 17.8114C6.56716 18.1973 6.88464 18.5093 7.27601 18.5134C8.83601 18.5271 9.74464 18.5832 10.7039 18.5093C11.7986 18.4258 12.5472 17.2148 12.5745 16.1912C12.5964 15.314 12.1312 14.6572 11.6522 14.233C11.2034 13.8361 10.5848 13.7321 9.98274 13.7321L6.5658 13.7294ZM20.313 17.8073C19.7136 18.3889 16.7934 19.537 15.7411 16.5155C15.6316 16.2131 15.544 15.5617 15.5946 15.0595M15.5946 15.0595C15.6822 14.2029 16.0599 13.0028 17.4612 12.5129C19.47 11.8109 20.7331 13.7581 21.0601 15.0595H15.5946ZM17.2942 9.64604H19.1553"
                          stroke="#100F0F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="col-12 col-md-6">
              <div className="ftr-img-wrpr">
                <div className="ftr-eclipse ms-auto">
                  <img src={ftrEclipse} alt="" />
                  <div className="ftr-img">
                    <img src={ftrImg} alt="" />
                  </div>
                </div>
              </div>

              <div className="ftr-btm-btm">
                <div className="copyright">
                  Copyright © 2025 <a href="">SKilllearn</a>. All Rights Reserved.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
