import React from 'react';

import "./footer.css";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-logo" />
                <p>© {this.props.today.getFullYear()} LiftFitLog - Jonathan Ash</p>
            </div>
        );
    };
};

export default Footer;