/* eslint-disable class-methods-use-this */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
import React, { Component } from 'react';
import Head from 'next/head';
import NavigationBar from '../Common/NavigationBar';
import './service.scss';
import { HOME_STRINGS } from '../constants';
import { SERVICE_STRING } from './constants';

class ServicePage extends Component {
    constructor(props) {
        super(props);
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(event) {
        event.preventDefault();
        window.location.href = 'https://forms.gle/BUM9eY8i11Yp4ooZ9';
    }

    render() {
        const {
            GOOGLE_FONTS,
            INTRO_TEXT2,
        } = SERVICE_STRING;

        const {
            FONT_AWESOME,
            INTEGRITY,
            LIFE,
            HELP_DESK,
            SERVICES,
            CONSULT_TEXT1,
            CONSULT_TEXT2,
            READ_MORE,
        } = HOME_STRINGS;

        return (
            <React.Fragment>
                <Head>
                    <link href={GOOGLE_FONTS} />
                    <link
                        rel="stylesheet"
                        href={FONT_AWESOME}
                        integrity={INTEGRITY}
                        crossOrigin="anonymous"
                    />
                </Head>
                <div className="service-header">
                    <NavigationBar />
                    <div className="service-header-cover">
                        <span className="service-header-cover-text">
                            <p className="service-header-text1">
                                {LIFE}
                                {' '}
                            </p>
                            {' '}
                            <p className="service-header-text2">Services</p>
                        </span>
                        <p className="service-desc">Home  /  Services</p>
                    </div>
                </div>
                <div className="service-intro service-app-content">
                    <hr />
                    <p className="service-intro-header">{SERVICES}</p>
                    <div className="service-intro-service-wrapper">
                        <div className="service-content-wrapper services-wrapper service-intro-wrap">
                            <div className="service-intro-content">
                                <i className="fas fa-users icons-status" />
                                <hr />
                                <span className="services-content-text context1">
                                    <p className="intro-text1">
                                   Online Counselling
                                    </p>
                                    <p className="intro-text2">{INTRO_TEXT2}</p>
                                </span>
                            </div>
                            <div className="service-intro-content">
                                <i className="fas fa-phone icons-status" />
                                <hr />
                                <span className="services-content-text context3">
                                    <p className="intro-text1">
                                   Emergency Contact Personel
                                    </p>
                                    <p className="intro-text2">{INTRO_TEXT2}</p>
                                </span>
                            </div>
                            <div className="service-intro-content">
                                <i className="fas fa-first-aid icons-status" />
                                <hr />
                                <span className="services-content-text context4">
                                    <p className="intro-text1">
                                   Quick First Aid Solutions
                                    </p>
                                    <p className="intro-text2">{INTRO_TEXT2}</p>
                                </span>
                            </div>
                        </div>
                        <div className="service-content-wrapper services-wrapper service-intro-wrap">
                            <div className="service-intro-content">
                                <i className="fas fa-hospital icons-status hos" />
                                <hr />
                                <span className="services-content-text context2">
                                    <p className="intro-text1">
                                   List of Hospitals Closest to You
                                    </p>
                                    <p className="intro-text2">{INTRO_TEXT2}</p>
                                </span>
                            </div>
                            <div className="service-intro-content">
                                <i className="fas fa-tv icons-status" />
                                <hr />
                                <span className="services-content-text context1">
                                    <p className="intro-text1">
                                Medicial Screenings
                                    </p>
                                    <p className="intro-text2">{INTRO_TEXT2}</p>
                                </span>
                            </div>
                            <div className="service-intro-content">
                                <i className="fas fa-ambulance icons-status" />
                                <hr />
                                <span className="services-content-text context1">
                                    <p className="intro-text1">
                                   Emergency Ambulance
                                    </p>
                                    <p className="intro-text2">{INTRO_TEXT2}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-services service-app-content">
                    <div className="service-content-wrapper service-services-wrapper service-wrap">
                        <div className="service-services-content">
                            <img className="serviceI" src="/static/img/help.jpg" alt="Smiley face" />
                            <span className="services-content-text">
                                <p className="service-text1">
                                Emergency Contact
                                    <br />
                                    {' '}
                                Number
                                </p>
                                <p className="service-text2">{HELP_DESK}</p>
                            </span>
                        </div>
                        <div className="service-services-content">
                            <img className="serviceI" src="/static/img/cardiac.jpg" alt="Smiley face" />
                            <span className="services-content-text">
                                <p className="service-text1">
                                Instructions On How To
                                    <br />
                                    {' '}
                                Administer First Aid
                                </p>
                                <p className="service-text2">{HELP_DESK}</p>
                            </span>
                        </div>
                        <div className="service-services-content">
                            <img className="serviceI" src="/static/img/care.jpg" alt="Smiley face" />
                            <span className="services-content-text">
                                <p className="service-text1">
                                Opportunity To Ask Doctors
                                    <br />
                                    {' '}
                                Questions
                                </p>
                                <p className="service-text2">{HELP_DESK}</p>
                            </span>
                        </div>
                    </div>
                </div>
                <section className="service-consult service-app-content">
                    <div className="service-consult-text">
                        <p className="service-consult-text1">{CONSULT_TEXT1}</p>
                        <p className="service-consult-text2">{CONSULT_TEXT2}</p>
                    </div>
                    <button type="button" onClick={this.handleButton}>{READ_MORE}</button>
                </section>
            </React.Fragment>
        );
    }
}

export default ServicePage;
