import React, { Component } from 'react';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: ' ',
            lastName: ' ',
            email: '',
            message: '',
        };
    }
    render() {
        return (
            <div className="contact-container">
                <video src="/Videos/video-1.mp4" autoPlay loop muted></video>
                <h1 className="contact-title">Contact me</h1>
                <div className="form-contact">
                    <form id="contact-form">
                        <div className="form-group">
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                // value={this.state.firstName}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                // value={this.state.lastName}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                // value={this.state.email}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                className="form-control"
                                rows="5"
                                // value={this.state.message}
                            />
                        </div>
                        <button type="submit" className="btn btn-info">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
