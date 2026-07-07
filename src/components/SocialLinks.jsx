import { socialLinks } from '../data/siteData';

function SocialLinks({ compact = false }) {
  return (
    <div className={compact ? 'social-links compact-social-links' : 'social-links'}>
      {socialLinks.map((link) => (
        <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
          <SocialIcon type={link.icon} />
          {link.label}
        </a>
      ))}
    </div>
  );
}

function SocialIcon({ type }) {
  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.3" />
        <circle cx="17" cy="7" r="1" />
      </svg>
    );
  }

  if (type === 'tiktok') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 4v9.2a4.3 4.3 0 1 1-3.9-4.28v3.02a1.42 1.42 0 1 0 1.2 1.4V4h2.7c.4 2.2 1.8 3.6 4 4v2.8c-1.5-.1-2.9-.7-4-1.7Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8h2.6V4.4c-.5-.1-1.9-.2-3.4-.2-3.3 0-5.5 2-5.5 5.7V13H4.5v4h3.2v7h4v-7h3.3l.5-4h-3.8V10.3c0-1.2.3-2.3 2.3-2.3Z" />
    </svg>
  );
}

export default SocialLinks;
