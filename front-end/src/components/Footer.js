import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Sign up for Use My Tech Stuff to start renting now!
        </p>

        <div className='input-areas'>
          <form>
            <Button buttonStyle='btn--outline'>SIGN UP</Button>
          </form>
        </div>
      </section>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>How it works</Link>
            <Link to='/'>Meet the Team</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Partnerships</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              UMTS
            </Link>
          </div>
          <small class='website-rights'>UMTS © 2021</small>

        </div>
      </section>
    </div>
  );
}

export default Footer;
