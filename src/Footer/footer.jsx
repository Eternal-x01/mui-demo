import styles from './footer.module.css';
import { faFacebook, faGithub, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={`${styles.sb_footer} ${styles.section_padding}`}>
        <div className={styles.sb_footer_links}>
          <div className={styles.sb_footer_links_div}>
            <h4>For Business</h4>
            <a href="/employer">
              <p>Employer</p>
            </a>
            <a href="/healthplan">
              <p>Health Plan</p>
            </a>
            <a href="/individual">
              <p>Individual</p>
            </a>
          </div>

          <div className={styles.sb_footer_links_div}>
            <h4>Resources</h4>
            <a href="/resource-center">
              <p>Resource Center</p>
            </a>
            <a href="/testimonials">
              <p>Testimonials</p>
            </a>
            <a href="/stv">
              <p>STV</p>
            </a>
          </div>

          <div className={styles.sb_footer_links_div}>
            <h4>Partners</h4>
            <a href="/partners">
              <p>NEXAHIRE</p>
            </a>
          </div>

          <div className={styles.sb_footer_links_div}>
            <h4>Company</h4>
            <a href="/about">
              <p>About</p>
            </a>
            <a href="/press">
              <p>Press</p>
            </a>
            <a href="/career">
              <p>Career</p>
            </a>
            <a href="/contact">
              <p>Contact</p>
            </a>
          </div>

          <div className={styles.sb_footer_links_div}>
            <h4>Coming soon on</h4>
            <div className={styles.socialmedia} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <FontAwesomeIcon icon={faGithub} size="lg" />
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                  <p style={{ margin: 0 }}>Github</p>
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <FontAwesomeIcon icon={faFacebook} size="lg" />
                <a href="https://www.Facebook.com" target="_blank" rel="noopener noreferrer">
                  <p style={{ margin: 0 }}>Facebook</p>
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <FontAwesomeIcon icon={faInstagram} size="lg" />
                <a href="https://www.Instagram.com" target="_blank" rel="noopener noreferrer">
                  <p style={{ margin: 0 }}>Instagram</p>
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <FontAwesomeIcon icon={faXTwitter} size="lg" />
                <a href="https://www.X.com" target="_blank" rel="noopener noreferrer">
                  <p style={{ margin: 0 }}>X.COM</p>
                </a>
              </div>
              
            </div>

          </div>
        </div>

        <hr />

        <div className={styles.sb_footer_below}>
          <div className={styles.sb_footer_copyright}>
            <p>
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className={styles.sb_footer_below_links}>
            <a href="/terms"><p>Terms & Conditions</p></a>
            <a href="/privacy"><p>Privacy</p></a>
            <a href="/security"><p>Security</p></a>
            <a href="/cookie"><p>Cookie Declaration</p></a>
          </div>
        </div>
      </div>
    </div>
  );
}
