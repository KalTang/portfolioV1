import React, { Component } from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import Typical from "react-typical";

export default class Landing extends Component {
    render() {
        return (
            <div className="landing-video">
                <video src="/Videos/video-1.mp4" autoPlay loop muted></video>
                <div className="landing-page-container d-flex align-items-center flex-column">
                    <div className="profile-pic">
                        <img src="https://i.imgur.com/VD9tkUI.png" alt="" />
                    </div>
                    <h1 className="landing-title">Kalvin Tang</h1>
                    <div className="landing-p">
                        <p>
                            I am{" "}
                            <Typical
                                wrapper="b"
                                steps={[
                                    1800,
                                    "...the coolest person ever!",
                                    300,
                                    "just kidding...",
                                    1500,
                                    "a Full-Stacks Web Developer",
                                    2000,
                                ]}
                            />
                        </p>
                    </div>
                    <div className="social-icons">
                        <a
                            className="social-links"
                            href="mailto:kalvintang89@gmail.com"
                        >
                            <FiMail className="icons" />
                        </a>
                        -
                        <a
                            className="social-links-git"
                            href="https://github.com/KalTang"
                        >
                            <FiGithub className="icons" />
                        </a>
                        -
                        <a
                            className="social-links"
                            href="https://www.linkedin.com/in/kalvin-tang-b85037ba"
                        >
                            <FiLinkedin className="icons" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
