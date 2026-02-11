import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";
import "./TutorSection.css";


import tutor1 from "../../assets/AboutUsPage/Tutor-img1.png";
import tutor2 from "../../assets/AboutUsPage/Tutor-img2.png";
import tutor3 from "../../assets/AboutUsPage/Tutor-img3.png";
import tutor4 from "../../assets/AboutUsPage/Tutor-img4.png";

const TutorSection = () => {
  
  const [tutorData] = useState([
    { id: 1, name: "Emma Scorsese", role: "3D Animation", img: tutor1 },
    { id: 2, name: "John Deo", role: "HTML Designer", img: tutor2 },
    { id: 3, name: "Nina Benntte", role: "UI/UX Designer", img: tutor3 },
    { id: 4, name: "Charlie Burns", role: "Web Development", img: tutor4 },
    { id: 5, name: "Emma Scorsese", role: "3D Animation", img: tutor1 },
    { id: 6, name: "John Deo", role: "HTML Designer", img: tutor2 },
    { id: 7, name: "Nina Benntte", role: "UI/UX Designer", img: tutor3 },
    { id: 8, name: "Charlie Burns", role: "Web Development", img: tutor4 },
  ]);

  return (
    <section className="tutor-sec">
      <div className="container">
        {/* Header Content */}
        <div className="tutor-heading text-center">
          <div className="sec-top fw-medium">Tutors</div>
          <h2 className="title2 fw-medium">Classes Taught By Real Creators</h2>
          <p>
            Get latest news in your inbox. Consectetur adipiscing elitadipiscing
            elitse ddo eiusmod tempor incididunt
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={4} 
          slidesPerGroup={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {tutorData.map((tutor) => (
            <SwiperSlide key={tutor.id}>
              <div className="tutor-card mx-auto">
                <div className="tutor-img">
                  <img src={tutor.img} alt={tutor.name} />
                </div>
                <div className="tutor-btm">
                  <div className="title4 fw-semibold">{tutor.name}</div>
                  <div className="job-desc d-flex align-items-center">
                    {/* Aapka diya hua exact SVG React format me */}
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
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
                            xlinkHref="#image0_4001_3835"
                            transform="scale(0.0588235)"
                          />
                        </pattern>
                        <image
                          id="image0_4001_3835"
                          width="17"
                          height="17"
                          preserveAspectRatio="none"
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFySURBVHgBrVRdTsJAEJ5Zqi9gUhPxJzS63ABuwBHwBMIJ1HeVbeIB5AblBhyBG8ANqFGCgRj6AA+asuMs0gZIS8A4SXe2M99+881sU4Qt1le2nf3OytnhzC+qIEjDibTEp3t5e0S5Ph5gN0e5yfjJaexFMnos1LTWL4RwnXffkZDqgHA3fHAqSXiMZc+z1Tgo4IadTRqa6zEE0tQy70Q6OHsetmOSccPpspMMSe170wjQ5tXPu4MyjlShxHq7IYbFC/Xh70oyUdIOKZx8IZUtXDACbBKYuaxVXpFv7Fj5AXcAmRBtK60SIcq1AGbM2k7Cxu2wIg/2NAKqmXbEqRr0iKilQVeSQBwvGZ+Qq/JFeA6ft34D6PMHc3XivtUj0FJhjRUubkyjbpqCUZ7nIeeEr2Yvtqgt8dNZ7jsEWqYBUwfLVT12HuxgAv7BVkjIhj/aoh0huHfCBg+L9jgboKB7s8EoMlTn0gJL7sowhWkv+sf8AKr6nKv7XPC5AAAAAElFTkSuQmCC"
                        />
                      </defs>
                    </svg>
                    <p className="fw-medium">{tutor.role}</p>
                  </div>
                  {/* Social Icons list */}
                  <ul className="scl-list d-flex">
                    {/* Facebook */}
                    <li>
                      <a href="#" className="fb-bg">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="#FFF"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    </li>
                    {/* Instagram */}
                    <li>
                      <a href="#" className="insta-bg">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="#FFF"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                    </li>
                    {/* LinkedIn */}
                    <li>
                      <a href="#" className="link-bg">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="#FFF"
                        >
                          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.989v-9.983c0-7.769-8.64-7.533-11.019-3.175v-2.842z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TutorSection;
