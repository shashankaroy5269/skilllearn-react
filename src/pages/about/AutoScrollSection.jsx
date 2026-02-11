import React from 'react';
import './AutoScrollSection.css';

import img1 from '../../assets/AboutUsPage/Auto-scroll-img1.png';
import img2 from '../../assets/AboutUsPage/Auto-scroll-img2.png';
import img3 from '../../assets/AboutUsPage/Auto-scroll-img3.png';
import img4 from '../../assets/AboutUsPage/Auto-scroll-img4.png';
import img5 from '../../assets/AboutUsPage/Auto-scroll-img5.png';

const AutoScrollSection = () => {
  const companyLogos = [
    { id: 1, src: img1, widthClass: 'w-78' },
    { id: 2, src: img2, widthClass: 'w-58' },
    { id: 3, src: img3, widthClass: 'w-64' },
    { id: 4, src: img4, widthClass: 'w-86' },
    { id: 5, src: img5, widthClass: 'w-60' },
  ];

  return (
    <section className="autoscroll-sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4">
            <div className="autoScroll-cntn">
              <h2 className="title2 fw-medium text-white">
                Trusted by <br /> 500+ Companies
              </h2>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="auto-scroll">
              {companyLogos.map((logo, index) => (
                <div 
                  key={logo.id} 
                  className={`auto-scroll-itms delay-${index} ${logo.widthClass}`}
                >
                  <img src={logo.src} alt={`Company ${logo.id}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutoScrollSection;