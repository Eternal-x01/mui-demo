import styles from './footer.module.css';
import NexHireLogo from '../assets/NexHireAI-w.png';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={`${styles.sb_footer} ${styles.section_padding}`}>
        <div className={styles.sb_footer_links}>
          <div className={styles.sb_footer_links_div}>
            <img src={NexHireLogo} alt='NexHireAI' />
            <h4>Your Next Hiring Partner and AI-Driven Interviewer</h4>
          </div>

          <div className={styles.sb_footer_links_div}>
            <h4>Contact Info</h4>
            <a href="/about">
              <p>Phone: (+91) 9971632893</p>
            </a>
            <a href="/email">
              <p>corp@nexsphereinn.com</p>
            </a>
            <a href="/about">
              <p>About us</p>
            </a>
          </div>

          <div className={styles.sb_footer_links_div}>
            <h4>Legal</h4>
            <a href="/terms">
              <p>Terms of Service for Companies</p>
            </a>
            <a href="/term">
              <p>Terms of Service for Candidates</p>
            </a>
            <a href="/PP">
              <p>Privacy Policy</p>
            </a>
          </div>
          
        </div>

        <hr />

        <div className={styles.sb_footer_below}>
          <div className={styles.sb_footer_copyright}>
            <p>
              &copy; {new Date().getFullYear()} NexSphere Innovations Pvt. Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
