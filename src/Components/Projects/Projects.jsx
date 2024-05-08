import React, { useRef, useEffect, useState } from "react";
import "./Projects.scss";
import image1 from "../../static/Images/projects/agency-work-01.jpg";
import image2 from "../../static/Images/projects/agency-work-02.jpg";
import image3 from "../../static/Images/projects/agency-work-03.jpg";
import image4 from "../../static/Images/projects/agency-work-04.jpg";
import image5 from "../../static/Images/projects/agency-work-05.jpg";
import image6 from "../../static/Images/projects/agency-work-06.jpg";
import Counter from "../Counter/Counter";

const Projects = () => {
  const scrollRef = useRef(null);

  const [reaced, setReached] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Change this threshold according to your needs
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setReached(true);
        console.log("reaced");
      }
    }, options);

    if (scrollRef.current) {
      observer.observe(scrollRef.current);
    }

    return () => {
      if (scrollRef.current) {
        observer.unobserve(scrollRef.current);
      }
    };
  }, []);

  return (
    <>
      <section className="projects-section">

        <div className="projectsTitle-Description">
          <h2 className="projectsTitle">Our Projects</h2>
          <p className="projectsDescription">
            Interior Design typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since.when an unknown of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="projectsImages">
          {projectPhotos.map(({ id, img }) => (
            <div className="projectIMG" key={id}>
              <img className="Photo" src={img} alt="..." />
            </div>
          ))}
        </div>

        <div className="statisticsCounter" ref={scrollRef}>
          {statistics.map(({ id, title, stop, step }) => (
            <div className="statistics" key={id}>
              <h2 className="statisticsHeader">
                {reaced === true ? (
                  <Counter countStep={step} start={0} stop={stop} />
                ) : (
                  ""
                )}
              </h2>
              <span className="statisticsDescription">{title}</span>
              <div className="separator"></div>
            </div>
          ))}
        </div>

        <div className="homeDesign">
          <div className="BlogExplore">
            <h2 className="BlogExploreHeader">We make your beautiful home.</h2>
            <div className="BlogExploreSubHeader">
              We offer a wide variety of trainings to achieve the best results.
            </div>
            <p className="BlogExploreDescription">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the when an unknown printer took a galley of type
              scrambled it to make a type specimen book. It has survived not
              only five centuries.
            </p>

            <button className="exploreBlogBtn">EXPLORE BOLG</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;

const projectPhotos = [
  { id: "1", img: image1 },
  { id: "2", img: image2 },
  { id: "3", img: image3 },
  { id: "4", img: image4 },
  { id: "5", img: image5 },
  { id: "6", img: image6 },
];

const statistics = [
  {
    id: "1",
    title: "Projects Completed",
    stop: 1500,
    step: 50,
  },
  {
    id: "2",
    title: "Happy Clients",
    stop: 1400,
    step: 50,
  },
  {
    id: "3",
    title: "Cups of Coffee",
    stop: 1250,
    step: 50,
  },
  {
    id: "4",
    title: "Hours Worked",
    stop: 1600,
    step: 50,
  },
];
