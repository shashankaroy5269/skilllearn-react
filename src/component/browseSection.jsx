import React from "react";

// ===== IMAGES =====
import card1 from "../assets/LandingPage/Browse-card-img1.png";
import card2 from "../assets/LandingPage/Browse-card-img2.png";
import card3 from "../assets/LandingPage/Browse-card-img3.png";
import card4 from "../assets/LandingPage/Browse-card-img4.png";
import card5 from "../assets/LandingPage/Browse-card-img5.png";
import card6 from "../assets/LandingPage/Browse-card-img6.png";

import author1 from "../assets/LandingPage/Browse-author-img1.png";
import author2 from "../assets/LandingPage/Browse-author-img2.png";
import author3 from "../assets/LandingPage/Browse-author-img3.png";
import author4 from "../assets/LandingPage/Browse-author-img4.png";
import author5 from "../assets/LandingPage/Browse-author-img5.png";
import author6 from "../assets/LandingPage/Browse-author-img6.png";

const courses = [
  { img: card1, title: "Learn Figma to DevSkill Cms Beginner to Advanced", author: "Sayan Roy", authorImg: author1 },
  { img: card2, title: "Create a perfect career with Web Developer", author: "Riyanka Das", authorImg: author2 },
  { img: card3, title: "Create a perfect career with UI Design Right Place", author: "Arup Dutta", authorImg: author3 },
  { img: card4, title: "Create a perfect career with Digital Marketing", author: "Sayani Roy", authorImg: author4 },
  { img: card5, title: "Create a perfect career with Data Science", author: "Aditi Roy", authorImg: author5 },
  { img: card6, title: "Create a perfect career with Digital Animation / VFX", author: "Tiyasha Kar", authorImg: author6 },
];

const BrowseSection = () => {
  return (
    <section className="browse-sec">
      <div className="container">

        {/* ===== TOP SECTION ===== */}
        <div className="browse-top">
          <div className="row align-items-center">

            <div className="col-12 col-lg-7">
              <div className="browse-hdr">
                <div className="sec-hdr fw-semibold">
                  Browse Trending Categories
                </div>
                <p>
                  Explore all of our course and pick your suitable ones to
                  enroll and start learning with us!
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-5">
              <form className="search-form">
                <div className="search-wrpr d-flex align-items-center justify-content-between">
                  <input type="text" placeholder="Search courses" />

                  <select className="fw-semibold" defaultValue="all">
                    <option value="all">All Categories</option>
                    <option>Web Development</option>
                    <option>UI / UX Design</option>
                    <option>Data Science</option>
                    <option>Marketing</option>
                  </select>

                  <button className="search-btn" type="submit">
                    <svg
                      width="56"
                      height="56"
                      viewBox="0 0 90 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Background */}
                      <circle cx="28" cy="28" r="28" fill="#097877" />

                      {/* Mask */}
                      <mask
                        id="mask0"
                        maskUnits="userSpaceOnUse"
                        x="14"
                        y="14"
                        width="28"
                        height="28"
                      >
                        <rect x="14" y="14" width="28" height="28" fill="white" />
                      </mask>

                      {/* ICON — shifted DOWN by 1.5px */}
                      <g mask="url(#mask0)" transform="translate(0 1.5)">
                        <path
                          d="M40.5 38.5L33.5 31.5M35 26C35 31.5228 30.5228 36 25 36C19.4772 36 15 31.5228 15 26C15 20.4772 19.4772 16 25 16C30.5228 16 35 20.4772 35 26Z"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                  </button>


                </div>
              </form>
            </div>

          </div>
        </div>

        {/* ===== COURSE CARDS ===== */}
        <div className="browse-cntn">
          <div className="row">

            {courses.map((course, index) => (
              <div className="col-12 col-sm-6 col-lg-4" key={index}>
                <div className="browse-card">

                  <div className="browse-img">
                    <img src={course.img} alt={course.title} />
                  </div>

                  <div className="browse-card-hdr">
                    {course.title}
                  </div>

                  <div className="card-rating d-flex align-items-center fw-semibold mb-0 fw-semibold">

                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        width="18.0434"
                        height="18.0434"
                        fill="url(#pattern0_3234_5861)"
                      />
                      <defs>
                        <pattern
                          id="pattern0_3234_5861"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_3234_5861"
                            transform="scale(0.0078125)"
                          />
                        </pattern>
                        <image
                          id="image0_3234_5861"
                          width="128"
                          height="128"
                          preserveAspectRatio="none"
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAOwAAADsAEnxA+tAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAACkRJREFUeJztnXuMHVUdxz+/2W537YNnIKiU1r62u3fZ2u29F1qNfbFAjSAFKQqVRKw0EmIRgRbRmBj/gIjKI9GkEQIq0VCjESUgEAqCQO/uFti9s1tsLcsrCIil0JV2H/Pzjwuk4Hbva+acubPn8++e+f2+e+c7Z87MnPM74HA4HA6Hw+FwOBwOh2OiILYFmEa3LzgW8S5F5CygGZgKvAY8RSB3ks3fK4LaVWmOCWUAzbWuQ/RW4KjDN+IxPNZJ2n/RnDJ7TBgDaFfqSpSflNRYeAX1PieZ3j0Ry7LOhDCA5lpWIfIA4JVx2DNIY1bS3cNR6YoD5fwgNYkqHiI3U/7/+mn0wIYoNMWJxPcA2pn6ErC1wsNfZgpzJOUPhakpTiS+BwA2VXHsiQzqRaEpiSGJNoB2tnYA6aqCiGxSTe7vlNh/DADVzSFEaaIrtSaEOLEksQbQXCqDsDKkcNepJnO8lFgD4HFtiNEW0dW8KsR4sSGRBtCukxegfDHcqF4Yt5PYkUgDEASbCf9/W6XbT14SckzrJM4A+lTbiQhfiSS4F1wVSVyLJM4AeCNXA5Mjir5Gcy2piGJbIVEGKHzqlUsiTCF4kqheIFEGQOo2AtMizaFcpDuaZ0aawyCJMYA+2zYV4TIDqeoJvG8byGOExBiAg8E3gWON5FK+oTsWHWckV8QkwgC6a24Dnl5hMOUUgqHLDeaLjEQYgL0NF6N80mhO5XJ9vGm60ZwRUPMG0LvPr8Pjagupj6Gx7lILeUOl5g3ALP88lHlWcqtcpdtmNVrJHRK1bwCRayxmP4HpU9dZzF81NW0AzaXOBBbbFcFmvfv8OqsaqqCmDYAQhy90c5jln2dbRKXUrAG0M5UFltnWAYAn363VCSM1awDgOtsCPkBZyI7U6bZlVEJNGkC7W5uBL9jW8SGCWNyOyqYmDUCg1xI/7cs117rUtohyiduPWBTNtc4Avmxbx5iI2nwkrYiaMwCim4B62zIOw9na2dxqW0Q5xHbkqj0nH81QkEJpAWajpBBagFnE27hDwMsofQg+sAehj5GDPXLq7rdti/soVg2gfmoygzoPjxaQ2SizgRTQBtT8h5Yx2AvsgffNoXsI6GMgtVPWbh21IciIAWr4ajbFMPDSh3oNgj1Mru+RhT2vR5k4NAPorrkN7J08dwJdzaaItNeoyAD6eNN0GiedhbIEZAFoEzCjWjGOsjgIsgv0OdBe1HtQsvknyg1SlgF02/JJTPv3JtBNuKs6jjyNyuXlGKFkA+izbVMZGv0TkMg1cgliBPiqZPzfldK4pAGYKsJQ8Bvcya8FJgF3aFdqRSmNS+oBNNd6AaIlOcoRG15i+IgmWfrku+M1Ku0RrPD2zVFbzGDy20XL2xQ1gD65YBawKAxFDsMo5xZrUrwHqPcyoYhx2KDohVvcACpHhyLFYYOiK6WKG0DYH4oUhw3eKdagBANIPhQpDhv0FWtQ3ADt+V6EgTDUOEwj9xRrUdQAhdr5+tNwBDkMso9hva1Yo9LeA7xz/C+A7dUqcphEviNL/f8UbVVqOO1q/jjqPQbMqUqXwwQ/k4x/ZSkNy/samGudgeijwKcqkuUwgN5Oum99qdvelD0fQHc0z2TUexRITJ2cxKDcSca/RISg1EPKno4l7f0vMBp0AK+We6wjSmQrAy1fL+fkQxVTwrSzrQlGHwFOqDSGIzT+wP7jLpAVj4yUe2BVcwK1u7WNQB/GVHEmx1jcx1EH18i83QcrObiqGbmyON+DchqFiYsO8zzA/sFzKz35EMKUbMn6z+AFn6eE986OMJGHGD7iHFkxcKCqKGHJ0VzrUkT/StSVOh0Af2cKZ0rKr/pDXWiLMiSbfwLVc4BxpyA5qkTlKQ6OrA7j5EMEK4MKGzXpPUBNV8+KKU/T4K2Stt7QxlyhL8uSTP5BlDVAxQMTxxgIzxKMdoR58iGidXmS9e9H5UIKc9Qd1fMcI3KGnLLzzbADR7o49L1dO39LYa66oxKEXRAsk3R/JG9eI12ZKxn/9wjrobzXk44P2M3QpBVRnXwwtTy8s/US0F+aypcQXmRkdJks2TkQZRIja/Mlk78d0Y0mciWEl8FbEfXJB4PFGSTddyuQmJ02IkN5HU9Ol0zvHhPpjFbnkIx/Eyo2SrvXCm+ArpTF+X5TCY2XZ5Fs/kaUH5nOWwO8hQRnSrbPN5nUSn0eyfrfR7neRu6Yso9AOiTdv8N0YrtVwnItNyPyLZsaYsA7iHZIus/KrGu7Fbo82Wo1fzx43tbJB9sGCGi2mj8ezLe54YRdA4gzANDISfnZtpLbNUChcKSjzrN2IbgeIA6IvQvBmgHUT03DFZcsoPYuBHs9wCDNuI9D7zMBDeC5+/8hNNvadMqeASx2ezFkGt0pK7dDm4NAZ4BDCez0iDYN4G4Bh2LpiciKAd7bcNnVGDiUiWQApkxtAmp2v91IsPRSzI4BPHf/H4MJZAD3BnAsjtZcynitBTsGcN8AxsZCz2jrKcD1AGNh4cIwbgDdtnwSMNd03hphAvQA09+cCzQYz1sLWHg7at4Agbr7/+Gw8FnYvAHcE8B4nKBPpI4xmdAZIG7Um/19zBtA3S1gXAxfIEYNoIoHzDeZs+YwPBA02wPk2mYCU43mHJ/Crt3xwmgPadYAdUGMun95CIJ2pHEOsAEl0m3ayyDBPUAsXgHLDoSVksl3SKY/L+nuYcn4W2j0FgA3AFUVXgyBk/TxJmMbc5seBNp7AhBeATbwfHNW0v62//tzW+9eyfibUZkP/BpKq7cfAUJ9fZOpZKZ7ABsGGARu4GMskIy/RdZuHR2vsWTzL0nGvxjlFOBRMxI/gmfuScls9S5RkwYIgLtQrpGs/69yD5as3wks187m08C7CUiFrvBwGLxQjPUA733rPtJQuvtRbZOMf3ElJ/9QJNP/ENK4CJGNQOh1+sZOau5R2dwtoE6ON5ClB5EzJOOvDrPShqS7hyWdv4VJ9XOBHxP9QNHEbwWYNEDgRVk69lWQ9Tzf0i7p/ANRJZFFz7wlGf8aRkabKRTAjGqgaKzMrjkDHPXfAQovXsJkEOGHTK6bJ5n8bcUGeGEhS3YOSMa/sDBQlL+FnkD5R+gxD4O5MnGFXS0eCSlcALKVuiAlaf8HsrBnMKS4ZSFZv1My+WUQdECIeywX9l0wgtnHQAl+XnUM5WHQtGTya6W9/4UQVFVNYaDY0A5sAF6rMtwLTJH7QpBVEkYXJKoidKXuBVZXcHg/IldLOn9v2LrCRLsWH4keuBbYSCV7JihnS9b/c+jCDoPZQpGCMsw6oLfkg5TXEbmM/ce1xf3kA0i6e59k/M0ITYjcRVkDRfmeyZMPltbna9fiI+HdLaisHafZu4jcxMiB6+XU3W8bExcyur01jac3AsvGabYP5QrJ+ncYkvUBdusEdqY+g7AeZRnwCeAt4J+o/JEG71eysCcuX+iqRrtTKwn0a4h8FmUmsB8VH+Ev1NVvkfan37Ct0eFwOBwOh8PhcDgcDkey+R9ppsp/8xHHigAAAABJRU5ErkJggg=="
                        />
                      </defs>
                    </svg>

                    4.5 (120)
                  </div>

                  <div className="browse-card-btm d-flex justify-content-between align-items-center">
                    <div className="card-author d-flex align-items-center">
                      <img src={course.authorImg} alt={course.author} />
                      <p className="mb-0 fw-semibold">{course.author}</p>
                    </div>
                    <div className="brows-card-btn">
                      <a href="#" className="btn-secondary">
                        Learn More

                        <svg
                          width="13"
                          height="16"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.749977 12.0637L12.0637 0.749965M12.0637 0.749965V9.23525M12.0637 0.749965H3.5784"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>


                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* ===== SEE ALL BUTTON ===== */}
          <div className="browse-cntn-btn text-center">
            <a href="#" className="btn-secondary section-btn">
              See all courses
              <span class="d-flex align-items-center justify-content-center">
                <svg
                  width="13"
                  height="17"
                  viewBox="0 0 13 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.0637 0.0004902C12.2625 0.000613962 12.453 0.0796219 12.5936 0.22016C12.7341 0.360698 12.8131 0.551272 12.8132 0.750023L12.8132 9.23531C12.8168 9.33596 12.8 9.4363 12.764 9.53034C12.7279 9.62438 12.6733 9.71019 12.6033 9.78265C12.5334 9.85512 12.4495 9.91275 12.3568 9.95211C12.2641 9.99148 12.1644 10.0118 12.0637 10.0118C11.963 10.0118 11.8633 9.99148 11.7706 9.95211C11.6779 9.91275 11.5941 9.85512 11.5241 9.78265C11.4542 9.71019 11.3995 9.62438 11.3634 9.53034C11.3274 9.4363 11.3106 9.33596 11.3142 9.2353L11.3142 2.56022L1.28033 12.5941C1.13968 12.7347 0.948911 12.8137 0.749999 12.8137C0.551087 12.8137 0.360322 12.7347 0.21967 12.5941C0.0790175 12.4534 -1.01666e-07 12.2626 -4.30457e-07 12.0637C-7.59249e-07 11.8648 0.0790178 11.6741 0.21967 11.5334L10.2535 1.49956L3.57843 1.49956C3.47777 1.50311 3.37743 1.48635 3.28339 1.45028C3.18935 1.41422 3.10354 1.35958 3.03108 1.28963C2.95861 1.21967 2.90098 1.13584 2.86162 1.04314C2.82226 0.950428 2.80197 0.850741 2.80197 0.750022C2.80197 0.649304 2.82226 0.549617 2.86162 0.456909C2.90098 0.364201 2.95861 0.280371 3.03108 0.21042C3.10354 0.140469 3.18935 0.0858291 3.28339 0.0497613C3.37743 0.0136935 3.47777 -0.00306335 3.57843 0.0004896L12.0637 0.0004902Z"
                    fill="black"
                  />
                </svg> </span>

            </a>
          </div>
        </div>

      </div>
    </section >
  );
};

export default BrowseSection;
