import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "./Cart.css";
import cartThumb from "../../assets/AddtoCart/Cart-left-img.png";
import Polygon1 from "../../assets/LandingPage/Polygon1.png";
import Polygon4 from "../../assets/LandingPage/Polygon4.png";
import card1 from '../../assets/CoursePage/1st-card.png';
import card2 from '../../assets/CoursePage/2nd-card.png';
import card3 from '../../assets/CoursePage/3rd-card.png';
import card4 from '../../assets/CoursePage/4th-card.png';
import card5 from '../../assets/CoursePage/5th-card.png';
import card6 from '../../assets/CoursePage/6th-card.png';
import card7 from '../../assets/CoursePage/7th-card.png';
import card8 from '../../assets/CoursePage/8th-card.png';
import cartDesign from '../../assets/AddtoCart/Cart-design.png';
import bookIcon from '../../assets/CoursePage/book.png';
import studentsIcon from '../../assets/CoursePage/students.png';
import authorPic from '../../assets/CoursePage/round-pic.png';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Business & Banking Studies",
      author: "James Carlson",
      rating: 4.7,
      reviews: 38,
      hours: 7.5,
      lectures: 35,
      level: "All levels",
      isBestseller: true,
      price: 299,
      originalPrice: 499,
      image: cartThumb,
    },
  ]);
  const courses = [
    { id: 1, img: card1, title: "Angular Zero To Mastery", price: 60, oldPrice: 120, reviews: 38, lessons: 12, students: 50, isFree: true },
    { id: 5, img: card2, title: "React Native Advanced", price: 80, oldPrice: 150, reviews: 45, lessons: 20, students: 100, isFree: false },
    { id: 4, img: card3, title: "NodeJS Mastery Hub", price: 50, oldPrice: 100, reviews: 22, lessons: 15, students: 30, isFree: true },
    { id: 2, img: card4, title: "VueJS Expert Course", price: 70, oldPrice: 140, reviews: 50, lessons: 18, students: 80, isFree: false },
    { id: 3, img: card5, title: "NextJS Performance", price: 90, oldPrice: 180, reviews: 12, lessons: 10, students: 20, isFree: false },
    { id: 6, img: card6, title: "TypeScript Deep Dive", price: 40, oldPrice: 90, reviews: 60, lessons: 25, students: 120, isFree: true },
    { id: 7, img: card7, title: "MongoDB Database Design", price: 55, oldPrice: 110, reviews: 33, lessons: 14, students: 44, isFree: true },
    { id: 8, img: card8, title: "Cloud Computing Basics", price: 110, oldPrice: 200, reviews: 100, lessons: 30, students: 250, isFree: false },
  ];

  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const originalTotal = cartItems.reduce(
    (acc, item) => acc + item.originalPrice,
    0,
  );
  const totalDiscount = originalTotal - subtotal;

  return (
    <main>
    <section className="cart-sec">
      <div className="bgPolygon bgPolygon4">
        <img src={Polygon1} alt="" />
      </div>
      <div className="bgPolygon bgPolygon5">
        <img src={Polygon4} alt="" />
      </div>
      <div className="card-eclipse-1"></div>

      <div className="container">
        <div className="cart-hdr">
          <h2 className="title2 fw-bold">Shopping Cart</h2>
          <h4 className="title4">
            {cartItems.length} Course{cartItems.length !== 1 ? "s" : ""} in Cart
          </h4>
        </div>

        <div className="row">
          {/* LEFT SECTION */}
          <div className="col-9 col-sm-10 col-md-9">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="cart-left-sec d-flex flex-column flex-sm-row"
                >
                  <div className="cart-left-img">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="cart-left-cntn flex-grow-1">
                    <h4 className="title4 fw-normal mb-0">{item.title}</h4>
                    <p className="fw-light">By {item.author}</p>

                    <div className="cart-cntn-mid d-flex align-items-center flex-wrap">
                      {item.isBestseller && (
                        <span className="fw-semibold">Bestseller</span>
                      )}
                      <span className="fw-medium">{item.rating}</span>
                      <div className="stars me-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            width="14"
                            height="14"
                            viewBox="0 0 17 16"
                            fill={i < 4 ? "#FE7E0F" : "#ccc"}
                          >
                            <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" />
                          </svg>
                        ))}
                      </div>
                      <span className="fw-light small">
                        ({item.reviews} Reviews)
                      </span>
                    </div>

                    <ul className="cart-course-d d-flex p-0 list-unstyled">
                      <li>{item.hours} total hours</li>
                      <li>{item.lectures} lectures</li>
                      <li>{item.level}</li>
                    </ul>

                    <div className="prem-badge mt-2">
                      <span>Premium</span>
                    </div>
                    </div>

                    {/* Desktop Actions Layout */}
                    <div className="cart-left-offer ms-0 ms-sm-auto d-flex flex-column flex-sm-row">
                      <ul className="text-end p-0 d-flex flex-row flex-sm-column">
                        <li>
                          <button
                            onClick={() => handleRemove(item.id)}
                            className="btn-link-custom"
                          >
                            Remove
                          </button>
                        </li>
                        <li>
                          <button className="btn-link-custom">
                            Save for Later
                          </button>
                        </li>
                        <li>
                          <button className="btn-link-custom">
                            Move to Wishlist
                          </button>
                        </li>
                      </ul>
                      <div className="price-w-offer text-end">
                        <span className="fw-semibold d-block">
                          $ {item.price} <i className="bi bi-tag-fill"></i>
                        </span>
                        <del className="fw-light">$ {item.originalPrice}</del>
                      </div>
                    </div>
                  
                </div>
              ))
            ) : (
              <div className="text-center py-5">
                <h3>Your cart is empty</h3>
              </div>
            )}
          </div>

          {/* RIGHT SECTION (Sidebar) */}
          <div className="col-lg-3">
            <div className="cart-right sticky-top" style={{ top: "20px" }}>
              <div className="card-right-cntn">
                <h4 className="title4 fw-bold mb-0">Total:</h4>
                <div
                  className="sec-top fw-bold h1"
                  style={{ color: "var(--secondary-color)" }}
                >
                  ${subtotal}
                </div>
                <div className="discount">
                  <del className="fw-light text-muted">${originalTotal}</del>
                </div>
                <div className="discount text-dark">
                  {subtotal > 0
                    ? Math.round((totalDiscount / originalTotal) * 100)
                    : 0}
                  % off
                </div>
              </div>

              <div className="cart-btn-sec mt-3">
                <button className="checkout-btn fw-bold text-white border-0">
                  Proceed to Checkout
                  <svg width="14" height="12" viewBox="0 0 14 12" fill="none">
                    <path
                      d="M0.163491 10.06C0.325108 10.34 0.591082 10.5444 0.902903 10.6282C1.21472 10.7121 1.54685 10.6686 1.82622 10.5074L10.1687 5.69079L9.00257 10.0606C8.93202 10.3681 8.98352 10.6912 9.1462 10.9618C9.30888 11.2325 9.57006 11.4296 9.8747 11.5115C10.1793 11.5935 10.5037 11.5539 10.7793 11.4012C11.055 11.2485 11.2605 10.9945 11.3526 10.6928L13.2764 3.48376C13.3594 3.17197 13.3154 2.83973 13.1539 2.56003C12.9924 2.28033 12.7267 2.07604 12.4152 1.99203L5.21005 0.0536517C5.05375 0.00562893 4.88944 -0.0104047 4.72692 0.00650715C4.56441 0.023419 4.40702 0.0729296 4.26414 0.152086C4.12126 0.231242 3.99582 0.338422 3.89531 0.467232C3.7948 0.596042 3.72127 0.743843 3.67911 0.901818C3.63695 1.05979 3.62703 1.2247 3.64993 1.38672C3.67283 1.54873 3.72808 1.70452 3.8124 1.8448C3.89672 1.98507 4.00837 2.10696 4.14069 2.20319C4.27301 2.29942 4.42329 2.36802 4.58257 2.4049L8.94999 3.57985L0.607465 8.39641C0.0260167 8.73211 -0.172884 9.47742 0.163491 10.06Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <p className="fw-light mb-0 text-center small text-muted">
                  You won’t be charged yet
                </p>
                <div className="coupon-sec">
                  <button className="coupon-btn fw-bold bg-transparent">
                    Apply Coupon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="maylike-sec">
      <div className="cart-eclipse2"></div>
      <div className="mayLike-design">
        <img src={cartDesign} alt="design" />
      </div>
      
      <div className="container">
        <div className="maylike-hdr">
          <h2 className="title2">You might also like</h2>
        </div>

        <div className="position-relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24} // Cards ke beech ka gap
            slidesPerView={3} // Ek baar mein 3 card dikhayega
            slidesPerGroup={1} // Ek baar mein ek card slide hoga
            navigation={{
              prevEl: '.cart-prev-btn-custom',
              nextEl: '.cart-next-btn-custom',
            }}
            breakpoints={{
              // Responsive setting
              0: { slidesPerView: 1 },    // Mobile par 1 card
              768: { slidesPerView: 2 },  // Tablet par 2 card
              1100: { slidesPerView: 3 }, // Desktop par 3 card
            }}
            className="cartSwiper"
          >
            {courses.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="course-card">
                  <div className="card-pic position-relative">
                    <img src={item.img} alt={item.title} />
                    <span className="course-badge1 position-absolute">01 Jan To 15 Mar</span>
                    <span className="course-badge2 position-absolute">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.24878 4.99955C1.24878 5.83828 6.30894 8.125 7.49106 8.125C8.67325 8.125 13.7334 5.83828 13.7334 4.99955C13.7334 4.16081 8.67325 1.87408 7.49106 1.87408C6.30894 1.87408 1.24878 4.16081 1.24878 4.99955Z" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M3.74512 6.875L4.52717 10.5001C4.58074 10.7484 4.70439 10.9804 4.9106 11.1284C6.29919 12.1249 8.68175 12.1249 10.0704 11.1284C10.2766 10.9804 10.4003 10.7484 10.4538 10.5001L11.2359 6.875" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M12.7984 5.93719V10.3129M12.7984 10.3129C12.304 11.2169 12.0854 11.7013 11.8633 12.5007C11.8151 12.7851 11.8534 12.9284 12.0491 13.0557C12.1287 13.1074 12.2242 13.1258 12.319 13.1258H13.2681C13.369 13.1258 13.4708 13.1047 13.5539 13.0473C13.7359 12.9217 13.7827 12.7838 13.7334 12.5007C13.5387 11.7584 13.2908 11.251 12.7984 10.3129Z" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      20 Class
                    </span>
                    <span className="course-badge3 position-absolute">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 6.875C1.25 4.81261 1.25 3.78141 1.89071 3.14071C2.53141 2.5 3.56261 2.5 5.625 2.5H6.25C8.31237 2.5 9.34356 2.5 9.98431 3.14071C10.625 3.78141 10.625 4.81261 10.625 6.875V8.125C10.625 10.1874 10.625 11.2186 9.98431 11.8593C9.34356 12.5 8.31237 12.5 6.25 12.5H5.625C3.56261 12.5 2.53141 12.5 1.89071 11.8593C1.25 11.2186 1.25 10.1874 1.25 8.125V6.875Z" stroke="white" strokeWidth="0.5"></path>
                        <path d="M10.625 5.56616L10.7037 5.50123C12.0261 4.41015 12.6872 3.8646 13.2186 4.12801C13.75 4.39143 13.75 5.26472 13.75 7.01131V7.98869C13.75 9.73531 13.75 10.6086 13.2186 10.872C12.6872 11.1354 12.0261 10.5899 10.7037 9.49875L10.625 9.43381" stroke="white" strokeWidth="0.5" strokeLinecap="round"></path>
                        <path d="M7.1875 6.875C7.70527 6.875 8.125 6.45527 8.125 5.9375C8.125 5.41973 7.70527 5 7.1875 5C6.66973 5 6.25 5.41973 6.25 5.9375C6.25 6.45527 6.66973 6.875 7.1875 6.875Z" stroke="white" strokeWidth="0.5"></path>
                      </svg>
                      55 Videos
                    </span>
                    {item.isFree && <div className="free position-absolute">Free</div>}
                  </div>

                  <div className="card-cntn">
                    <div className="course-d-review d-flex align-items-center">
                      <ul className="stars d-flex p-0 m-0">
                        {[...Array(5)].map((_, i) => (
                          <li key={i}>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.33333 0L10.9083 5.21667L16.6667 6.05833L12.5 10.1167L13.4833 15.85L8.33333 13.1417L3.18333 15.85L4.16667 10.1167L0 6.05833L5.75833 5.21667L8.33333 0Z" fill="#FE7E0F"></path>
                            </svg>
                          </li>
                        ))}
                      </ul>
                      <span className="fw-light"> ({item.reviews} Reviews) </span>
                    </div>
                    <h2 className="title4">{item.title}</h2>
                    <div className="lessons-students d-flex align-items-center">
                      <div className="lessons d-flex align-items-center">
                        <img src={bookIcon} alt="book" style={{width:"20px", height:"20px"}} />
                        <span>{item.lessons} Lessons</span>
                      </div>
                      <div className="students d-flex align-items-center ms-3">
                        <img src={studentsIcon} alt="students" style={{width:"20px", height:"20px"}}  />
                        <span>{item.students} Students</span>
                      </div>
                    </div>
                    <p>It is a long established fact that a reader will be distracted.</p>
                    <div className="course-dev d-flex align-items-center">
                      <a href="#author"><img src={authorPic} alt="author" style={{width:"20px", height:"20px"}}  /></a>
                      <span>By <span>Angela</span> In <span>Development</span></span>
                    </div>
                    <div className="price-cart d-flex align-items-center">
                      <div className="price d-flex align-items-center">
                        <p>${item.price}</p>
                        <del>${item.oldPrice}</del>
                      </div>
                      <button className="cart ms-auto d-flex align-items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.66675 13.3333L13.9335 12.7277C16.2072 12.5383 16.7177 12.0417 16.9697 9.77408L17.5001 5" stroke="#141B34" strokeOpacity="0.8" strokeLinecap="round"></path>
                          <path d="M5 5H18.3333" stroke="#141B34" strokeOpacity="0.8" strokeLinecap="round"></path>
                          <path d="M4.99992 18.3333C5.92039 18.3333 6.66659 17.5871 6.66659 16.6667C6.66659 15.7462 5.92039 15 4.99992 15C4.07944 15 3.33325 15.7462 3.33325 16.6667C3.33325 17.5871 4.07944 18.3333 4.99992 18.3333Z" stroke="#141B34" strokeOpacity="0.8"></path>
                          <path d="M14.1667 18.3333C15.0871 18.3333 15.8333 17.5871 15.8333 16.6667C15.8333 15.7462 15.0871 15 14.1667 15C13.2462 15 12.5 15.7462 12.5 16.6667C12.5 17.5871 13.2462 18.3333 14.1667 18.3333Z" stroke="#141B34" strokeOpacity="0.8"></path>
                          <path d="M6.66675 16.6666H12.5001" stroke="#141B34" strokeOpacity="0.8" strokeLinecap="round"></path>
                          <path d="M1.66675 1.66663H2.47175C3.25898 1.66663 3.9452 2.18712 4.13613 2.92907L6.61551 12.5637C6.74081 13.0506 6.63358 13.5664 6.32361 13.968L5.52686 15" stroke="#141B34" strokeOpacity="0.8" strokeLinecap="round"></path>
                        </svg>
                        <span>Add to cart</span>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="cart-prev-btn cart-prev-btn-custom position-absolute">
            <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.9999 15.9427C37.0005 15.1471 36.6851 14.3837 36.1229 13.8207C35.5607 13.2576 34.7979 12.9409 34.0022 12.9402L10.2405 12.9201L18.1277 5.04679C18.6582 4.47854 18.9473 3.7266 18.9342 2.94938C18.9212 2.17217 18.6069 1.43036 18.0577 0.880243C17.5085 0.330129 16.7672 0.0146522 15.9899 0.000282675C15.2127 -0.0140868 14.4602 0.273776 13.891 0.803217L0.8791 13.7922C0.316784 14.3543 0.00055937 15.1165 -0.000111287 15.9115C-0.000781945 16.7065 0.314156 17.4693 0.875523 18.0322L13.8655 31.0432C14.1399 31.3382 14.4709 31.5749 14.8388 31.7391C15.2067 31.9034 15.6039 31.9919 16.0067 31.9994C16.4096 32.0068 16.8098 31.9331 17.1835 31.7825C17.5572 31.6319 17.8967 31.4076 18.1819 31.123C18.467 30.8384 18.6919 30.4992 18.8431 30.1258C18.9943 29.7524 19.0688 29.3523 19.062 28.9495C19.0552 28.5467 18.9674 28.1494 18.8037 27.7812C18.64 27.4131 18.4039 27.0817 18.1094 26.8068L10.2354 18.9201L33.9971 18.9402C35.6533 18.9416 36.9985 17.5987 36.9999 15.9427Z" fill="#100F0F" />
            </svg>
          </div>
          <div className="cart-next-btn cart-next-btn-custom position-absolute">
            <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-7.02653e-07 16.0748C-7.37432e-07 16.8705 0.316093 17.6335 0.878741 18.1962C1.44139 18.7588 2.20451 19.0748 3.00021 19.0748L26.7619 19.0748L18.8813 26.9548C18.3514 27.5235 18.0629 28.2757 18.0766 29.0529C18.0903 29.8301 18.4052 30.5717 18.9549 31.1213C19.5046 31.671 20.2461 31.9858 21.0234 31.9995C21.8007 32.0132 22.5529 31.7247 23.1216 31.1948L36.1226 18.1948C36.6844 17.6323 37 16.8698 37 16.0748C37 15.2798 36.6844 14.5173 36.1226 13.9548L23.1216 0.954832C22.847 0.660085 22.5158 0.423677 22.1477 0.259709C21.7797 0.0957409 21.3824 0.00757334 20.9796 0.000466187C20.5767 -0.00664097 20.1766 0.0674571 19.803 0.218341C19.4294 0.369225 19.0901 0.593804 18.8052 0.878679C18.5203 1.16355 18.2957 1.50289 18.1448 1.87644C17.9939 2.24999 17.9198 2.65011 17.9269 3.05292C17.934 3.45573 18.0222 3.85299 18.1862 4.22098C18.3502 4.58898 18.5866 4.92018 18.8813 5.19483L26.7619 13.0748L3.00021 13.0748C1.34409 13.0748 -6.30267e-07 14.4188 -7.02653e-07 16.0748Z" fill="#100F0F" />
            </svg>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default CartPage;
