import React from 'react';
import './JoinUsSection.css';


import cardImg1 from '../../assets/AboutUsPage/join-card-img1.png';
import cardImg2 from '../../assets/AboutUsPage/join-card-img2.png';
import cardImg3 from '../../assets/AboutUsPage/join-card-img3.png';
import arrow1 from '../../assets/AboutUsPage/arrow1.png';
import arrow2 from '../../assets/AboutUsPage/arrow2.png';

const JoinUsSection = () => {
  const joinData = [
    {
      id: 1,
      img: cardImg1,
      title: "Find Course",
      desc: "After working in coffee shops around the world Mark finds himself.",
      arrow: arrow1,
      arrowClass: "arrow-1"
    },
    {
      id: 2,
      img: cardImg2,
      title: "Book Your Seat",
      desc: "After working in coffee shops around the world Mark finds himself.",
      arrow: arrow2,
      arrowClass: "arrow-2"
    },
    {
      id: 3,
      img: cardImg3,
      title: "Get Certified",
      desc: "After working in coffee shops around the world Mark finds himself.",
      arrow: null,
      arrowClass: ""
    }
  ];

  return (
    <section className="joinus-section">
      <div className="container">
        {/* Heading Section */}
        <div className="joinus-heading text-center">
          <div className="sec-top fw-medium">Tutors</div>
          <h2 className="title2 fw-medium">Classes Taught By Real Creators</h2>
          <p>
            Get latest news in your inbox. Consectetur adipiscing
            elitadipiscing elitse ddo eiusmod tempor incididunt
          </p>
        </div>

        {/* Cards Section */}
        <div className="row justify-content-center">
          {joinData.map((item) => (
            <div className="col-12 col-sm-4" key={item.id}>
              <div className={`join-card text-center position-relative ${item.id === 3 ? 'last-card' : ''}`}>
                <div className="join-card-img mx-auto">
                  <img src={item.img} alt={item.title} />
                </div>
                <h3 className="title3 fw-semibold">{item.title}</h3>
                <p>{item.desc}</p>
                
                {/* Conditional Arrow Rendering */}
                {item.arrow && (
                  <div className={`${item.arrowClass} position-absolute d-none d-sm-block`}>
                    <img src={item.arrow} alt="arrow" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;