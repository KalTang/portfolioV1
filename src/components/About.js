import React from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
    const [ref, inView] = useInView({ triggerOnce: true, threshhold: 0.3 }); //effect will only occur once
    return (
        <div className="about-body">
            <video src="/Videos/video-1.mp4" autoPlay loop muted></video>
            <h1
                ref={ref}
                className={`about-Title from-right ${inView ? "appear" : ""}`}
            >
                About Me
            </h1>
            <div className="about-Paragraph">
                <div className="d-flex flex-lg-row flex-column">
                    <p
                        ref={ref}
                        className={`Blog1 order-lg-0 order-1 from-left ${
                            inView ? "appear" : ""
                        }`}
                    >
                        <span className="welcome">
                            <strong>Thanks for stopping by and welcome!</strong>
                        </span>
                        <br />I first discovered code when I dug into some files
                        from a mobile app and was intrigued of how lines of code
                        made it work! The daily challenges of problem solving
                        code has motivated me to keep on climbing and discover
                        all the possibilities. Why I chose to be in this field
                        is because I love having the power be able to create
                        something from nothing, and how it can potentially
                        change lives!
                    </p>
                    <div
                        ref={ref}
                        className={`About-pic order-lg-1 order-0 from-right ${
                            inView ? "appear" : ""
                        }`}
                    >
                        <img src="https://i.imgur.com/YxIxWAP.jpg" alt="" />
                        <figcaption className="motto">
                            - "Learning is a journey, not a destination".
                        </figcaption>
                    </div>
                </div>

                <h1
                    ref={ref}
                    className={`about-Title from-right ${
                        inView ? "appear" : ""
                    }`}
                >
                    Skills / Technologies
                </h1>
                <div
                    ref={ref}
                    className={`About-sect d-lg-flex from-left ${
                        inView ? "appear" : ""
                    }`}
                >
                    <ul className="tech-list">
                        <li>Git Version Control</li>
                        <li>Team collaboration</li>
                        <li>Scrum / project boards</li>
                    </ul>
                    <p
                        ref={ref}
                        className={`Blog2 from-right ${inView ? "appear" : ""}`}
                    ></p>

                    <ul>
                        <li>HTML/CSS/Javascript</li>
                        <li>React/Angular</li>
                        <li>ASP.NET</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
