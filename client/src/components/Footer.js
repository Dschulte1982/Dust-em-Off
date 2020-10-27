import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <>
        <div id="footer-master-container">
          <div id="footer-column-1">
            <div id="my-info">
                <span className="personal-info">dustin.schulte@gmail.com</span>
                <span className="personal-info">+509.969.2978</span>
            </div>
            <div id="trademark">© 2020 Dust 'Em Off</div>
          </div>
          <div id="footer-column-2">
              <div id="social-media-links">
                  <div id="linked-in"><a className="footer-links" href="https://linkedin.com/in/dustin-schulte07/" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                  <div id="github"><a className="footer-links" href="https://github.com/Dschulte1982" target="_blank" rel="noopener noreferrer">GitHub</a></div>
              </div>
          </div>
        </div>
        </>
    )
}
