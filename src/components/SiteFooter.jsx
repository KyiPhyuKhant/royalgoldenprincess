import SocialLinks from './SocialLinks';

function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        <img src="/images/logo.jpg" alt="" />
        <span>Royal Golden Princess</span>
      </div>
      <div className="footer-content">
        <SocialLinks compact />
        <p>Copyright © 2026 Royal Golden Princess - All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default SiteFooter;
