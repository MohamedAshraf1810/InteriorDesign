import React from "react";
import "./Clients.scss";
import clinet1 from "../../static/Images/clients/clients-1.png";
import clinet2 from "../../static/Images/clients/clients-2.png";
import clinet3 from "../../static/Images/clients/clients-3.png";
import clinet4 from "../../static/Images/clients/clients-4.png";
import arrow from "../../static/Images/Carousel/arrow-right-white.png";

const Clients = () => {
  return (
    <>
      <section className="clients-section">
        <div className="clients-Header-Description">
          <h2 className="clientsHeader">Our Client</h2>
          <p className="clientsDescription">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took.
          </p>
        </div>

        <div className="parteners">
          {clientsLogos.map(({ id, img }) => (
            <a href="#m" className="partenersLogo" key={id}>
              <img width="100%" height="100%" src={img} alt="..." />
            </a>
          ))}
        </div>

        <div className="Collaporation">
          <div className="companyDetails">
            <h2 className="detailsHeader">
              Simple is good. We turn ideas into works of art.
            </h2>

            <p className="detailsDescription">
              Since our foundation in 2005 our goal has been to use digital
              technology to create experiences.
            </p>

            <button className="collaporationBTN">
              LET'S WORK TOGETHER
              <img src={arrow} alt="..." width="25px" height="14px" />
            </button>
          </div>
        </div>

      </section>
    </>
  );
};

export default Clients;

const clientsLogos = [
  { id: "1", img: clinet1 },
  { id: "2", img: clinet2 },
  { id: "3", img: clinet3 },
  { id: "4", img: clinet4 },
];
