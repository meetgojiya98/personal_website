import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="/man-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            <strong>Meet Gojiya</strong> is a Solution Analyst on the Product Engineering and Development team, within the Engineering, AI, and Data offering at Deloitte Canada. Meet has the ability to link business with technology to extract insights from complex data and build data-driven solutions. 
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            Meet is a graduate of the University of New Brunswick, where he earned a Master of Computer Science degree. He also holds a Bachelor’s degree in Computer Engineering from Gujarat Technological University. Meet is driven by technology innovation, advanced analytics, adaptability, collaboration, and creativity, ultimately furthering his career as well as those around him. He possesses a strong entrepreneurial spirit, which fuels his passion for creating impactful solutions and driving positive change within the industry and the world. 
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            An avid learner and active listener, Meet thrives on absorbing knowledge from as many people as possible, recognizing that every interaction is an opportunity to gain new insights and perspectives. His extremely curious personality propels him to explore new ideas, question existing paradigms, and continuously seek out opportunities for learning and growth.
              <div className="tagline2">
                Meet have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
