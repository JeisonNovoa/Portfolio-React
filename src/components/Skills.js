import meter1 from "../assests/img/meter1.svg";
import meter2 from "../assests/img/meter2.svg";
import meter3 from "../assests/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assests/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I have a strong background in software analysis and development,
                with a focus on Back-End. I excel in creating efficient
                programming logic and robust technical solutions. I possess
                expertise in JavaScript, Node.js, and Express.js, enabling me to
                develop scalable and high-performance web applications and
                services. I have experience in designing and implementing
                databases using MySQL and MongoDB for efficient and secure
                systems. I stay updated on the latest trends in Back-End web
                development and strive for excellence in my projects. My
                rigorous approach, creativity, and ability to work in a team
                ensure high-quality solutions that meet the needs of clients and
                end-users.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>ExpressJS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>MySQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
