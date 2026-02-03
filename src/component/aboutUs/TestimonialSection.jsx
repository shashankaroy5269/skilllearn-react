import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style/TestimonialSection.css";


// Images Import
import quoteImg from "../../assets/AboutUsPage/quote.png";
import userImg from "../../assets/AboutUsPage/Tutor-img4.png";

const TestimonialSection = () => {
  // Feedback data state mein break kiya hai
  const [feedbacks] = useState([
    {
      id: 1,
      text: 'Printers in the 1500s scrambled the words from Cicero\'s "De Finibus Bonorum et Malorum" after mixing the words in each sentence. The familiar "lorem ipsum dolor sit amet" text emerged when 16th-century printers adapted Cicero\'s original work, beginning with the phrase "dolor sit amet consectetur."',
      name: "Charlie Burns",
      role: "Web Development",
      rating: "4.0",
      image: userImg,
    },
    {
      id: 2,
      text: 'Printers in the 1500s scrambled the words from Cicero\'s "De Finibus Bonorum et Malorum" after mixing the words in each sentence. The familiar "lorem ipsum dolor sit amet" text emerged when 16th-century printers adapted Cicero\'s original work.',
      name: "John Doe",
      role: "HTML Designer",
      rating: "4.5",
      image: userImg,
    },
  ]);

  return (
    <section className="test-sec">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side: Content & Buttons */}
          <div className="col-12 col-lg-5">
            <div className="testi-cntn">
              <div className="testi-heading">
                <div className="sec-top fw-medium">Testimonials</div>
                <h2 className="title2 fw-medium">
                  Our Student Community Feedback
                </h2>
              </div>
              <p>
                Get latest news in your inbox. Consectetur adipiscing elitadi
                piscing elitseddo eiusmod tempor incididunt utlabore etdolo
                magnased doeiusmod.
              </p>

              {/* Navigation Buttons */}
              <div className="swiper-btn d-flex mt-4">
                <div className="btn-bg custom-prev">
                  <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="30"
        height="30"
        transform="matrix(-1 0 0 1 30 0)"
        fill="url(#pattern0)"
      />

      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            href="#image0"
            transform="scale(0.0078125)"
          />
        </pattern>

        <image
          id="image0"
          width="128"
          height="128"
          preserveAspectRatio="none"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAO4SURBVHic7d05iF11FMfx7wyJmSioJJrFBUUmBpdCghYaF5AoqJ2NEDUENGC0sBCxDRYiFqKVKKiFggsulTiIioJxLQ24RGLIuIAxKmrQMcuzuAy4Ed77/8+c6z/v+4FbDvzgnDdzzn33/gckSZIkSZIkSZIkSZIkSZIkSZIktWei7wAjOgu4GDgV+BqYAfb1mkgppoDHgYPA4C/XfuAe2mtkjWACeJW/F/6f17N0TaKj0EaOXPz56z1gZU8ZtYBmGK4BBsAu4Jx+YmqhfMPwDTAAfgCu7CWpFsRORmuAAXAAuK2PsIr3FKM3wPx1H24IzbuQ7hNd2gTPAUvTUyvUFsobYAC8C6xIT61Qm4E5yptgF3BudmjFWg/spbwJfgauSU+tUNPAZ5Q3wQFga3pqhVoOvE3dXPAwMJkdXHGWAE9T1wQvAMdmB1ecCWAbcJjyJngfv0No3mbqNoRZ4ILs0IoVsSFcm55aoSI2hNvTUyuUG4JYQt2XSAPgRdwQmhaxIXyAG0LzbgB+ww1hrLkhiGngU9wQxtoy3BDGXsSG8BJuCE2L2hBWJedWsNoN4SvcEJq3HviO8ib4BbguPbVC1W4IB4E70lMr1DLgLdwQxpobgpgA7qVuQ/gQN4TmbaLuKaMdwInpqRXqCrojaEqb4KH8yIp2NmVvKA+AH4FF+ZEV7SRgO2VNcGZ+3OG5sgxnJXBK4c/ORQZRvg10v8pLPv2zeD5B07YAf1A+BN6dH1kRJoEHqLsh9AqwODu46k0Bz1BXfE8ladQqurt4pYU/DNyPf/ebdB7wJeXFnwNuTk+tEBuAnygv/j66u4Zq0C3UTfpfAGvTU6va/HOBNcPeduDk5NwKEDHpe0J5oyIm/W046TfpfGA35cX/HbgpO7RiXEXdpP89cHl6aoW4lbpJfyfdcwFqTMSk/w7d8wBqzBTdpF5T/CeBY7KDq95qYiZ9NShi0r8xO7RiREz6l6WnVojaSf9zYE16alWLmPRfx5c4mnQc8DJ1xX8CH91q0mrgI5z0x1LEpL8xO7RiXE3dpL8XuDQ9tULUPqe/g//5q1r6b5PAg9QNe68BJ2QHV71J4Hnqiv8YTvrNupPywh/C17Oat4ey4u8Hru8hrwKdRlnxvwUu6iGvgk0zevE/Bs7oI6ziLQZ+ZfjizwDH95JUC+ZRhiv+I3gez1FpOUd+afMQcFdv6ZTidOBN/l38Wfx38FVae7tlHXAJ3ZGunwBv4CFMkiRJkiRJkiRJkiRJkiRJkiRJksbOn8ilX7o2sRG+AAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
                </div>
                <div className="btn-bg custom-next ms-3">
                  <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="30"
          height="30"
          fill="url(#pattern0)"
        />

        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#image0"
              transform="scale(0.0078125)"
            />
          </pattern>

          <image
            id="image0"
            width="128"
            height="128"
            preserveAspectRatio="none"
            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAO4SURBVHic7d05iF11FMfx7wyJmSioJJrFBUUmBpdCghYaF5AoqJ2NEDUENGC0sBCxDRYiFqKVKKiFggsulTiIioJxLQ24RGLIuIAxKmrQMcuzuAy4Ed77/8+c6z/v+4FbDvzgnDdzzn33/gckSZIkSZIkSZIkSZIkSZIkSZIktWei7wAjOgu4GDgV+BqYAfb1mkgppoDHgYPA4C/XfuAe2mtkjWACeJW/F/6f17N0TaKj0EaOXPz56z1gZU8ZtYBmGK4BBsAu4Jx+YmqhfMPwDTAAfgCu7CWpFsRORmuAAXAAuK2PsIr3FKM3wPx1H24IzbuQ7hNd2gTPAUvTUyvUFsobYAC8C6xIT61Qm4E5yptgF3BudmjFWg/spbwJfgauSU+tUNPAZ5Q3wQFga3pqhVoOvE3dXPAwMJkdXHGWAE9T1wQvAMdmB1ecCWAbcJjyJngfv0No3mbqNoRZ4ILs0IoVsSFcm55aoSI2hNvTUyuUG4JYQt2XSAPgRdwQmhaxIXyAG0LzbgB+ww1hrLkhiGngU9wQxtoy3BDGXsSG8BJuCE2L2hBWJedWsNoN4SvcEJq3HviO8ib4BbguPbVC1W4IB4E70lMr1DLgLdwQxpobgpgA7qVuQ/gQN4TmbaLuKaMdwInpqRXqCrojaEqb4KH8yIp2NmVvKA+AH4FF+ZEV7SRgO2VNcGZ+3OG5sgxnJXBK4c/ORQZRvg10v8pLPv2zeD5B07YAf1A+BN6dH1kRJoEHqLsh9AqwODu46k0Bz1BXfE8ladQqurt4pYU/DNyPf/ebdB7wJeXFnwNuTk+tEBuAnygv/j66u4Zq0C3UTfpfAGvTU6va/HOBNcPeduDk5NwKEDHpe0J5oyIm/W046TfpfGA35cX/HbgpO7RiXEXdpP89cHl6aoW4lbpJfyfdcwFqTMSk/w7d8wBqzBTdpF5T/CeBY7KDq95qYiZ9NShi0r8xO7RiREz6l6WnVojaSf9zYE16alWLmPRfx5c4mnQc8DJ1xX8CH91q0mrgI5z0x1LEpL8xO7RiXE3dpL8XuDQ9tULUPqe/g//5q1r6b5PAg9QNe68BJ2QHV71J4Hnqiv8YTvrNupPywh/C17Oat4ey4u8Hru8hrwKdRlnxvwUu6iGvgk0zevE/Bs7oI6ziLQZ+ZfjizwDH95JUC+ZRhiv+I3gez1FpOUd+afMQcFdv6ZTidOBN/l38Wfx38FVae7tlHXAJ3ZGunwBv4CFMkiRJkiRJkiRJkiRJkiRJkiRJksbOn8ilX7o2sRG+AAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Swiper Slider */}
          <div className="col-12 col-lg-7">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              autoplay={{ delay: 5000 }}
              loop={true}
              className="mySwiper2"
            >
              {feedbacks.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="testi-card">
                    <img src={quoteImg} alt="quote" className="quote" />
                    <p>{item.text}</p>

                    <div className="test-card-btm d-flex align-items-center">
                      <div className="testi-card-btm-img">
                        <img src={item.image} alt={item.name} />
                      </div>
                      <div className="card-btm-cntn">
                        <div className="card-btm-cntn-hdr fw-semibold">
                          {item.name}
                        </div>
                        <div className="job-desc d-flex align-items-center">
                          {/* Work Icon SVG */}
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                          >
                            <rect
                              width="16.9823"
                              height="16.9823"
                              fill="url(#pattern0_4001_3835)"
                            />
                            <defs>
                              <pattern
                                id="pattern0_4001_3835"
                                patternContentUnits="objectBoundingBox"
                                width="1"
                                height="1"
                              >
                                <use
                                  xlink:href="#image0_4001_3835"
                                  transform="scale(0.0588235)"
                                />
                              </pattern>
                              <image
                                id="image0_4001_3835"
                                width="17"
                                height="17"
                                preserveAspectRatio="none"
                                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFySURBVHgBrVRdTsJAEJ5Zqi9gUhPxJzS63ABuwBHwBMIJ1HeVbeIB5AblBhyBG8ANqFGCgRj6AA+asuMs0gZIS8A4SXe2M99+881sU4Qt1le2nf3OytnhzC+qIEjDibTEp3t5e0S5Ph5gN0e5yfjJaexFMnos1LTWL4RwnXffkZDqgHA3fHAqSXiMZc+z1Tgo4IadTRqa6zEE0tQy70Q6OHsetmOSccPpspMMSe170wjQ5tXPu4MyjlShxHq7IYbFC/Xh70oyUdIOKZx8IZUtXDACbBKYuaxVXpFv7Fj5AXcAmRBtK60SIcq1AGbM2k7Cxu2wIg/2NAKqmXbEqRr0iKilQVeSQBwvGZ+Qq/JFeA6ft34D6PMHc3XivtUj0FJhjRUubkyjbpqCUZ7nIeeEr2Yvtqgt8dNZ7jsEWqYBUwfLVT12HuxgAv7BVkjIhj/aoh0huHfCBg+L9jgboKB7s8EoMlTn0gJL7sowhWkv+sf8AKr6nKv7XPC5AAAAAElFTkSuQmCC"
                              />
                            </defs>
                          </svg>

                          <p className="fw-medium mb-0 ms-2">{item.role}</p>
                        </div>
                      </div>

                      {/* Rating Section */}
                      <div className="rating d-flex align-items-center ms-auto">
                        <span className="fw-medium me-2">{item.rating}</span>
                        <div className="stars d-flex">
                          {[...Array(4)].map((_, i) => (
                            <svg
                              key={i}
                              width="12"
                              height="11"
                              viewBox="0 0 12 11"
                              fill="#FFD700"
                            >
                              <path d="M6 0l1.45 4.47h4.7L8.35 7.23l1.45 4.47L6 8.94l-3.8 2.76 1.45-4.47L0 4.47h4.7L6 0z" />
                            </svg>
                          ))}
                          <svg
                            width="12"
                            height="11"
                            viewBox="0 0 12 11"
                            fill="none"
                            stroke="#212343"
                          >
                            <path d="M6 0l1.45 4.47h4.7L8.35 7.23l1.45 4.47L6 8.94l-3.8 2.76 1.45-4.47L0 4.47h4.7L6 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
