import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container">
                <p><small>Project realised by <a href="https://www.codingtough.com">CodingTough</a> - Credits: <img className="tmdbLogo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="Tmdb"/> - &copy; 2020</small></p>
                <p><small>This product uses the TMDb API but is not endorsed or certified by TMDb.</small></p>
            </div>
        </footer>
    )
}

export default Footer;
