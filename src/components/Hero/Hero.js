import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn" >
              <TypeAnimation
                cursor={false}
                sequence={[
                  'Hi, I\'m Meet Gojiya.',
                  () => setShowSubtitle(true)
                ]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
              {showSubtitle &&
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'An AI, Data, and Software Development professional passionate about innovation and impact.',
                    3000,
                    'A bridge between business and technology.',
                    // 'I design and code beautifully simple things, and I love what I do.',
                    2000,
                    'A data-driven problem solver.',
                    2000,
                    'A graduate of the University of New Brunswick.',
                    2000,
                    'A passionate innovator and collaborator.',
                    2000,
                    'An explorer of new ideas.',
                    2000,
                    "A curious and avid learner.",
                    2000,
                    "A builder of impactful solutions.",
                    2000,
                    "A driving force for positive change.",
                    2000,
                    "Scroll down to discover more!",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "You're still here? Great!",
                    1000,
                    "Feel free to explore more about me and my work!",
                    1000,
                    "Restarting the loop now...",
                    1000,
                    "See ya! :)",
                    500,
                  ]}
                  speed={50}
                  deletionSpeed={65}
                  wrapper="h5"
                  repeat={Infinity}
                />
              }
            </ScrollAnimation>

          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src="/man-svgrepo-com.svg"
                alt="man-svgrepo"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown &&<ScrollAnimation animateIn="flipInX" offset={0}>
        <ScrollDown to="projects" id="scrollDown">
          <ScrollLink>
            Scroll down
            <img
              src="/scroll-down.svg"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
        </ScrollAnimation>}
      </HeroContainer>
    </main>
  );
}

export default Hero;
