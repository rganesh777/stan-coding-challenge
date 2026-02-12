import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

interface FooterLink {
  href: string;
  label: string;
}

interface SocialLink {
  href: string;
  icon: string;
  title: string;
}

interface AppStoreLink {
  href: string;
  icon: string;
  title: string;
}

const FOOTER_LINKS: FooterLink[] = [
  { href: "/", label: "Home" },
  { href: "/terms", label: "Terms and Conditions" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/collection", label: "Collection Statement" },
  { href: "/help", label: "Help" },
  { href: "/account", label: "Manage Account" },
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://facebook.com",
    icon: "/assets/social/facebook-white.svg",
    title: "Facebook",
  },
  {
    href: "https://twitter.com",
    icon: "/assets/social/twitter-white.svg",
    title: "Twitter",
  },
  {
    href: "https://instagram.com",
    icon: "/assets/social/instagram-white.svg",
    title: "Instagram",
  },
];

const APP_STORE_LINKS: AppStoreLink[] = [
  {
    href: "#",
    icon: "/assets/store/app-store.svg",
    title: "App Store",
  },
  {
    href: "#",
    icon: "/assets/store/play-store.svg",
    title: "Google Play",
  },
  {
    href: "#",
    icon: "/assets/store/windows-store.svg",
    title: "Microsoft Store",
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <ul className={`${styles.footerLinks} flex flex-wrap`}>
          {FOOTER_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link to={href}>{label}</Link>
            </li>
          ))}
        </ul>

        <div className={styles.footerCopyright}>
          Copyright &copy; 2016 DEMO Streaming. All Rights Reserved.
        </div>

        <div className={`${styles.footerBottom} flex items-between flex-wrap`}>
          <ul className={`${styles.footerSocialIcons} flex`}>
            {SOCIAL_LINKS.map(({ href, icon, title }) => (
              <li key={href}>
                <a
                  href={href}
                  title={`Follow us on ${title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon} alt={title} loading="lazy" />
                </a>
              </li>
            ))}
          </ul>

          <ul className={`${styles.footerAppStoreIcons} flex flex-wrap`}>
            {APP_STORE_LINKS.map(({ title, href, icon }) => (
              <li key={title}>
                <a
                  href={href}
                  title={`Streamco App on ${title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon} alt={title} loading="lazy" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
