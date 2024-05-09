import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok, faInstagram, faXTwitter, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center mt-5 pt-5">
		<h6 className="text-white mb-2">More From Star Wars:</h6>
		<div className="d-dlex justify-content-center text-white">
			<FontAwesomeIcon className="me-5" icon={faTiktok} />
			<FontAwesomeIcon className="me-5" icon={faInstagram} />
			<FontAwesomeIcon className="me-5" icon={faXTwitter} />
			<FontAwesomeIcon className="me-5" icon={faFacebook} />
			<FontAwesomeIcon className="me-5" icon={faYoutube} />
		</div>
	</footer>
);
