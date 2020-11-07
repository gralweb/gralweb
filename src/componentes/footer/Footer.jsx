import React from 'react';

const Footer = props => {
  	return (
        <footer id="app-footer" className="app-footer">
        	<div className="app-footer-content">
                <div id="app-footer-logo" className="app-content-logo">
                    <figure className="app-logo-img">
                        <img src='http://localhost:3000/logo/logo_rojo.png' title='Gralweb' alt='Gralweb' />
                    </figure>
                </div>

                <div className="app-content-year">
                    <p>2020</p>
                    <p>&copy;</p>
                </div>
            </div>
        </footer>
	);
}

export default Footer;
