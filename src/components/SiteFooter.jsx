import LinkButton from './LinkButton';
import SocialLinks from './SocialLinks';

function SiteFooter({ navigate }) {
  return (
    <footer>
      <div className="footer-brand">
        <img src="/images/logo.jpg" alt="" />
        <span>Royal Golden Princess</span>
      </div>
      
      <div className="footer-content">
        <SocialLinks compact />
        <div className="footer-links">
        <LinkButton to="/policy" navigate={navigate}>
          Privacy Policy
        </LinkButton>
      </div>
        <p>Copyright © 2026 Royal Golden Princess - All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default SiteFooter;
