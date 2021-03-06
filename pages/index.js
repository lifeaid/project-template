/* eslint-disable lines-between-class-members */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Link from 'next/link';
import NavigationBar from '../components/Common/NavigationBar';
import Footer from '../components/Common/Footer';
import '../scss/home.scss';
import '../scss/_globals.scss';
import { HOME_STRINGS } from '../components/constants';
import { ABOUT_STRING } from '../components/About/constants';

class Home extends Component {
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
            INTRO_TEXT1,
            INTRO_TEXT2,
        } = ABOUT_STRING;

        const {
            ARTICLE_READ,
            READ_MORE,
            INTRO_HEADER,
            CONSULT_TEXT1,
            CONSULT_TEXT2,
            ARTICLE_HEADER1,
            ARTICLE_HEADER2,
            HELP_DESK,
            SERVICES,
        } = HOME_STRINGS;

        return (
            <React.Fragment>
                <div className="wrapper">
                    <div className="header">
                        <NavigationBar />
                        <div className="header-cover">
                            <p className="header-cover-text">
                        Emergency First Aid
                                <br />
                                {' '}
                        solutions at your
                                <br />
                        doorsteps.
                            </p>
                            <button type="button">{READ_MORE}</button>
                        </div>
                    </div>
                    <div className="articles app-content" id="articles">
                        <hr />
                        <p>Our Featured Articles</p>
                        <div className="content-wrapper">
                            <div className="article-content article1">
                                <p className="article-content-header">{ARTICLE_HEADER2}</p>
                                <p className="article-read">
                                    {ARTICLE_READ}
                                    <Link href="/article"><a className="article-content-a"> Read more...</a></Link>
                                </p>
                            </div>
                            <div className="article-content">
                                <p className="article-content-header">{ARTICLE_HEADER1}</p>
                                <p className="article-read">
                                    {ARTICLE_READ}
                                    <Link href="/article"><a className="article-content-a"> Read more...</a></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="services app-content">
                        <hr />
                        <p>{SERVICES}</p>
                        <div className="content-wrapper services-wrapper">
                            <div className="services-content">
                                <img className="service-img" src="/static/img/help.jpg" alt="Smiley face" />
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
                            <div className="services-content">
                                <img className="service-img" src="/static/img/cardiac.jpg" alt="Smiley face" />
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
                            <div className="services-content">
                                <img className="service-img" src="/static/img/care.jpg" alt="Smiley face" />
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
                    <div className="intro app-content">
                        <hr />
                        <p className="intro-header">
                            {INTRO_TEXT1}
                            <br />
                            {' '}
                            {INTRO_TEXT2}
                        </p>
                        <span>
                            <p>
                                {INTRO_HEADER}
                                {' '}
                                <a className="article-content-a">
                                    {READ_MORE}
                                ...

                                </a>
                            </p>
                        </span>
                    </div>
                    <div className="consult app-content">
                        <div className="consult-text">
                            <p className="consult-text1">{CONSULT_TEXT1}</p>
                            <p className="consult-text2">{CONSULT_TEXT2}</p>
                        </div>
                        <button type="button" onClick={this.handleButton}>{READ_MORE}</button>
                    </div>
                    <Footer />
                </div>
            </React.Fragment>
        );
    }
}

export default Home;
