import React from 'react';
import './index.css'; // Plain CSS, not module
import image4 from './assets/image4.jpg';
import image3 from './assets/image3.jpg';
import image2 from './assets/image2.jpg';
import image1 from './assets/image1.jpg';

const MidnightEditorialHomePage = () => {
  return (
    <div className="mh-homepage">
      {/* Navigation */}
      <nav className="mh-nav">
        <div className="mh-brand">ÉDITION</div>
        <ul className="mh-nav-links">
          <li><a href="#work">Work</a></li>
          <li><a href="#studio">Studio</a></li>
          <li><a href="#journal">Journal</a></li>
          <li><a href="#contact" className="mh-contact-btn">Contact</a></li>
        </ul>
        <button className="mh-mobile-menu-btn" aria-label="Menu">☰</button>
      </nav>

      {/* Hero */}
      <section className="mh-hero">
        <div className="mh-light-leak mh-leak-orange" style={{ top: '-20%', left: '-10%' }} />
        <div className="mh-light-leak mh-leak-blue"   style={{ bottom: '-10%', right: '-10%' }} />
        <div
          className="mh-hero-image"
          style={{
            backgroundImage: `url(${image4})`,
          }}
        />
        <h1 className="mh-hero-title">Dark<br />Matter</h1>
        <p className="mh-hero-desc">
          Where brutalist architecture meets haute couture – a new paradigm in visual storytelling.
        </p>
      </section>

      {/* Stats Grid */}
      <div className="mh-stats-grid">
        <div className="mh-stat-cell mh-animate-reveal mh-stagger1">
          <div className="mh-stat-label">Filing</div>
          <div className="mh-stat-value">100++</div>
        </div>
        <div className="mh-stat-cell mh-animate-reveal mh-stagger2">
          <div className="mh-stat-label">Awards</div>
          <div className="mh-stat-value">0++</div>
        </div>
        <div className="mh-stat-cell mh-animate-reveal mh-stagger3">
          <div className="mh-stat-label">Clients</div>
          <div className="mh-stat-value">1</div>
        </div>
        <div className="mh-stat-cell mh-animate-reveal mh-stagger4">
          <div className="mh-stat-label">Years</div>
          <div className="mh-stat-value">02++</div>
        </div>
      </div>

      {/* Editorial 01 */}
      <section className="mh-editorial">
        <div className="mh-editorial-heading">01</div>
        <div className="mh-editorial-content">
          <p>Hey, it’s been around six months 10 day since gon pasted.  but I just wanted to check in and see how you’ve been. I hope life has been kind to you and that you’re doing well these days.</p>
          <p>But you crossed my mind evry singal time. I hope you’re doing okay and that everything is going smoothly for you.</p>
          <a href="#" className="mh-explore-link">Explore <span className="mh-arrow">→</span></a>
        </div>
      </section>

      {/* Full-width image */}
      <div
        className="mh-full-image"
        style={{ backgroundImage: `url(${image3})` }}
        role="img"
        aria-label="Gallery image"
      />

      {/* Editorial 02 */}
      <section className="mh-editorial">
        <div className="mh-editorial-heading">02</div>
        <div className="mh-editorial-content">
          <p>I wanted to say hi. It’s been a while, and I genuinely hope you’re happy and doing well.</p>
          <p>Our design language doesn’t shout; it resonates. Every pixel is placed with intent.</p>
          <a href="#" className="mh-explore-link">View Case <span className="mh-arrow">→</span></a>
        </div>
      </section>

      {/* Side Gallery */}
      <div className="mh-side-gallery">
        <div className="mh-gallery-item">
          <div className="mh-gallery-overlay" />
          <img src='src/assets/image1.jpg' alt="Mountain" className="mh-gallery-img" />
          <span className="mh-gallery-caption">anik-shree · 2025</span>
        </div>
        <div className="mh-gallery-item">
          <div className="mh-gallery-overlay" />
          <img src='https://scontent.fccu14-1.fna.fbcdn.net/v/t39.30808-6/481105707_1666993454193045_8283542299008702679_n.jpg?stp=c236.0.608.608a_dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=714c7a&_nc_ohc=fkNvSn5a8GUQ7kNvwEGQEYS&_nc_oc=AdrIUl_qDpJFuAAXMNtzFuTw_ioghS9kNKsFrm7zCjJjmhkq5HBM4xnzwuLLOaA4gIc&_nc_zt=23&_nc_ht=scontent.fccu14-1.fna&_nc_gid=XzOOyi17kJwNueGuSrjhTg&_nc_ss=7b2a8&oh=00_Af5zvRSvFb31WQacallguqcwjbieY97xIlTaqVVPKgHOCA&oe=6A1CA47F' alt="Foggy forest" className="mh-gallery-img" />
          <span className="mh-gallery-caption">bablu · 2024</span>
        </div>
      </div>

      {/* Footer */}
      <footer className="mh-footer">
        <div className="mh-light-leak mh-leak-blue" style={{ top: '10%', left: '20%' }} />
        <div className="mh-light-leak mh-leak-orange" style={{ bottom: '5%', right: '15%' }} />
        <a href="https://www.instagram.com/shree_ofc__/"  target="_blank" rel="noopener noreferrer" className="mh-footer-cta">shree_ofc__</a>
        <ul className="mh-footer-social">
          <li><a href="#">Instagram</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Behance</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
        <div className="mh-ghost-brand">ÉDITION</div>
      </footer>
    </div>
  );
};

export default MidnightEditorialHomePage;