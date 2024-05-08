import React from "react";
import "./Services.scss";
import serviceDesign1 from "../../static/Images/services/team-08.jpg";
import serviceDesign2 from "../../static/Images/services/team-01.jpg";
import serviceDesign3 from "../../static/Images/services/team-02.jpg";
import serviceDesign4 from "../../static/Images/services/team-03.jpg";
import arrow from "../../static/Images/Carousel/arrow-right-white.png";

const Services = () => {
  return (
    <>
      <section className="servicesSection">
        <div className="servicesHeader">
          <h2 className="servicesTitle">Our Services</h2>
          <p className="servicesDescription">
            Interior Design typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since.when an unknown of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="serviceDesigns">
          {designItems.map(({ id, image, description, subDescription }) => (
            <div className="design" key={id}>
              <img
                className="designPhoto"
                src={image}
                alt="..."
                width="100%"
                height="auto"
              />
              <div className="designDescriptionContainer">
                <a className="designDescription" href="#m">
                  {description}
                </a>
                <span className="designSubDescription">{subDescription}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="getInteriorDesigner">
        <h2 className="getInteriorDesignQuestion">
          Are you looking for interior design expertise?
        </h2>
        <button className="getQuotationBtn">
          GET QUOTATION
          <img
            className="whiteArrow"
            src={arrow}
            height="12px"
            width="20px"
            alt=""
          />
        </button>
      </section>
    </>
  );
};

export default Services;

const designItems = [
  {
    id: "1",
    image: serviceDesign1,
    description: "COMMERCIAL DESIGN",
    subDescription: "LOREM IPSUM",
  },

  {
    id: "2",
    image: serviceDesign2,
    description: "OFFICE DESIGN",
    subDescription: "LOREM IPSUM",
  },

  {
    id: "3",
    image: serviceDesign3,
    description: "RESIDENTIAL DESIGN",
    subDescription: "LOREM IPSUM",
  },

  {
    id: "4",
    image: serviceDesign4,
    description: "HOSPITALLY DESIGN",
    subDescription: "LOREM IPSUM",
  },
];
