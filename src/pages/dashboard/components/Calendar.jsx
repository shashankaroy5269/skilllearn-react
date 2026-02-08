import React from "react";

import { useEffect, useState } from "react";
import dayjs from "dayjs";



import CalendarGrid from "./calendergrid";
import Sidebar from "./sidebar";
import DashboardNavbar from "./DashBoardNav";

const Calendar = () => {

  const hamberger = () => {
    document.querySelector(".left-sideNav")?.classList.toggle("open");
  };

  const [now, setNow] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(dayjs());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  return (

    <main>
      <section className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-2">

              <Sidebar />
            </div>
            <div className="col-10">
              <div className="dashboard-top bg-white d-flex align-items-center">
                <div className="dashboard-hdr d-flex justify-content-between w-100">

                  <div>
                    <h1 className="title1">Assignments</h1>
                    <p>Dashboard / Assignment</p>
                  </div>

                  <ul className="hdr-menu d-flex align-items-center">
                    <li>
                      <DashboardNavbar onMenuToggle={hamberger} />

                    </li>

                    
                  </ul>



                </div>
              </div>
              <div className="common-box">

                <div className="dateBox d-flex justify-content-between align-items-center">
                  <div className="dateTIme">
                    {now.format("dddd, MMMM D")}
                  </div>
                  <div className="dateTIme">
                    {now.format("hh:mm A")}
                  </div>

                </div>

                <div className="calender-top d-flex justify-content-between align-items-center">

                </div>

                <CalendarGrid />


                <div className="indication-list">
                  <h5 className="title5">Indications :-</h5>
                  <ul className="indication d-flex align-items-center flex-wrap">
                    <li className="indication-colorList color1">
                      <span></span> Upcoming Class
                    </li>
                    <li className="indication-colorList color2">
                      <span></span> Current Class
                    </li>
                    <li className="indication-colorList color3">
                      <span></span> Completed Class
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Calendar;



