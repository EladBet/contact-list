import React, { Component } from 'react';
import './contact.style.scss';
import Observer from '@researchgate/react-intersection-observer';


const defaultProfileImage = 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'

function scureUrl(url) {
    if (!url) {
        return defaultProfileImage;
    }
    if (url.indexOf('https') < 0) {
        url = url.replace('http', 'https');
    }
    return url;
}

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { active: false, visibility: false };

        this.setActive = this.setActive.bind(this);
        this.setNotActive = this.setNotActive.bind(this);
        this.onImageError = this.onImageError.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    setActive() {
        this.setState({ active: true });
    }

    setNotActive() {
        this.setState({ active: false });
    }

    onImageError(e) {
        e.target.onerror = null;
        e.target.src = defaultProfileImage;
    }

    handleChange(event) {
        if (event.isIntersecting) {
            this.setState({ visibility: true });
        }
    }

    render() {
        const { profile_image, icon, job, name, company_name, phone, email } = this.props;
        const backgroundImage = scureUrl(profile_image);

        return (
            <div>
                <Observer onChange={this.handleChange} rootMargin="0% 0% 25%">
                    <div className="contact"
                         onMouseOver={this.setActive}
                         onMouseLeave={this.setNotActive}>
                        {this.state.visibility && (
                            <React.Fragment>
                                <div className={`image ${this.state.active ? 'active' : ''}`}>
                                    <img src={backgroundImage} onError={this.onImageError} className="img-fluid"
                                         alt="Contact Iamge"></img>
                                </div>
                                < div className="icon">
                                    <img src={icon} onError={this.onImageError} className="img-fluid" alt="icon"></img>
                                </div>
                            </React.Fragment>
                        )}
                        <div className="name">{name}</div>
                        <div className="desc">{job && job + ' |'} {company_name}</div>
                        {this.state.active && (
                            <div className="more">
                                {phone && <div className="phone">Phone Number {phone}</div>}
                                {email && <div className="email">{email}</div>}
                            </div>
                        )}
                    </div>
                </Observer>
            </div>
        );
    }
}
