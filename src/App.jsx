import React from 'react';
import './index.css'; // Plain CSS, not module

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
            backgroundImage: 'url(https://scontent.fccu14-1.fna.fbcdn.net/v/t39.30808-6/481234384_1666995387526185_8736406767444040515_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Dvshk-Dq6m0Q7kNvwFx0iK_&_nc_oc=AdqOfzhLfgx2Uf2PcX3aYwNVhXpnRBWzRCbCELgmFtvCuO-yf32GU146V2wKGJB63HY&_nc_zt=23&_nc_ht=scontent.fccu14-1.fna&_nc_gid=mtJfVhFRMYBU0H20sPA26g&_nc_ss=7b2a8&oh=00_Af7W_0n_5B07x7qBzpnWU4el2ZonbYuOamGpg40lsX0dRw&oe=6A1C8FD2)',
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
        style={{ backgroundImage: 'url(https://scontent-ccu1-1.xx.fbcdn.net/v/t39.30808-6/481282540_1668391330719924_1555992137457040272_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dPhXTHyFc7wQ7kNvwHqst7T&_nc_oc=Adq7MouMPhy9PAUD7ZGysTbzM9Gw2HYaIJR6PSDKUPMo4dB3TLY5OcdyBujzj-lMs6c&_nc_zt=23&_nc_ht=scontent-ccu1-1.xx&_nc_gid=gKleC_YZ5tKey04P3BGN5w&_nc_ss=7b2a8&oh=00_Af57DzTjnNuxcw9gi0h5M5v_bhqjIPTXlc9xQRye1uZkew&oe=6A138E21)' }}
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
          <img src="https://scontent-ccu2-2.xx.fbcdn.net/v/t39.30808-6/481821247_1672134727012251_7823841779385785307_n.jpg?stp=c151.0.778.778a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=714c7a&_nc_ohc=iK-k7M8YHEsQ7kNvwGS4AYH&_nc_oc=AdqcZsCaxfiTV3X7iXlbAeT_1TzqEyHfa1Vc3cKqKED1H5jSQ6rs4PdswUTATbMD8KI&_nc_zt=23&_nc_ht=scontent-ccu2-2.xx&_nc_gid=QFQHdGRQbVMGcmKo77x6ag&_nc_ss=7b2a8&oh=00_Af5bFrl87OTYeyTf8awilLZG86fgfwkUmJNht7J6BYjhgA&oe=6A1390F8" alt="Mountain" className="mh-gallery-img" />
          <span className="mh-gallery-caption">anik-shree · 2025</span>
        </div>
        <div className="mh-gallery-item">
          <div className="mh-gallery-overlay" />
          <img src="https://scontent-ccu1-2.xx.fbcdn.net/v/t39.30808-6/481105707_1666993454193045_8283542299008702679_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Hbjituletc8Q7kNvwHzuhhz&_nc_oc=AdpGIeDnRc-Yh4fNMRI47-SUFxoo4Pw-zwCnFMJIwA_GXawBAG_0SoqBpw6ispqNsCw&_nc_zt=23&_nc_ht=scontent-ccu1-2.xx&_nc_gid=tYfVG_wPKUEGDY_VrVSncw&_nc_ss=7b2a8&oh=00_Af6UCT7Ch6_4AXH1RpBaVwnvcjnvK0ack9pt8jSZzgOoxg&oe=6A13A23F" alt="Foggy forest" className="mh-gallery-img" />
          <span className="mh-gallery-caption">bablu · 2026</span>
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