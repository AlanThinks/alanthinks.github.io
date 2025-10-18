import React from "react";
import { Link } from "react-router-dom";
import CertBadgeRow from "@src/components/CertBadgeRow";
import { resolveLegacyAsset } from "@src/utils/asset";

type HeroProps = {
  onResumeClick: () => void;
};

const SOCIAL_LINKS = [
  { icon: "mdi mdi-telegram", href: "https://t.me/alanthinks", label: "Telegram" },
  { icon: "mdi mdi-github-circle", href: "https://www.github.com/alanthinks", label: "GitHub" },
  { icon: "mdi mdi-linkedin-box", href: "https://www.linkedin.com/in/alanthinks", label: "LinkedIn" },
  { icon: "mdi mdi-instagram", href: "https://www.instagram.com/alanthinks", label: "Instagram" },
  { icon: "mdi mdi-twitter", href: "https://www.twitter.com/alanthinksnot", label: "Twitter" },
  {
    icon: "mdi mdi-youtube-play",
    href: "https://www.youtube.com/alanthinks?sub_confirmation=1",
    label: "YouTube",
  },
];

const CONTACT_INFO = [
  {
    label: "Phone",
    value: "+1.305.771.1509",
    href: "tel:+1-305-771-1509",
  },
  {
    label: "Email",
    value: "code@alanthinks.com",
    href: "mailto:code@alanthinks.com",
  },
  {
    label: "Location",
    value: "Miami, FL",
  },
];

const HERO_COPY = {
  name: "Alan Guevara",
  credential: "CSM, PSPO, AWS Certified",
  title: "Senior AI Technical Product Owner",
  summary:
    "I lead cross-functional teams that ship production-grade AI agents and cloud-native SaaS. " +
    "From AWS Bedrock RAG assistants to AI pricing engines, I connect product strategy with technical delivery " +
    "to accelerate adoption, revenue, and user trust.",
  primaryCta: {
    text: "See AI Case Studies",
    to: "/projects",
  },
  secondaryCta: {
    text: "Book a 20-minute call",
    href: "https://calendly.com/alanthinks/20min",
  },
};

export default function Hero({ onResumeClick }: HeroProps) {
  const avatarSrc = React.useMemo(
    () => resolveLegacyAsset("img/alanthinks-round-face.png"),
    []
  );
  const logoSrc = React.useMemo(
    () => resolveLegacyAsset("img/alanthinks-round-face-200px.png"),
    []
  );

  return (
    <>
      <header className="header header-home">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-9">
              <Link to="/" id="top-left-logo" className="logo">
                <div className="header-avatar">
                  <img src={logoSrc} alt="Alan Guevara logo" />
                </div>
                <span className="point">Alan G</span>
              </Link>
              <p className="info-row">
                <span className="social-icons-row alanthinks-hover">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.icon}
                      target="_blank"
                      rel="noreferrer"
                      href={link.href}
                      className={`fa fonts-icons ${link.icon}`}
                      aria-label={link.label}
                    />
                  ))}
                </span>
              </p>
            </div>
            <div className="col-md-8 text-right hidden-sm hidden-xs">
              <nav className="main-menu header-links">
                <ul>
                  <li>
                    <Link to="/projects">Project History</Link>
                  </li>
                  <li>
                    <Link to="/about">About Me</Link>
                  </li>
                  <li>
                    <Link to="/contact">Let's Connect!</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-xs-3 hidden-lg hidden-md">
              <div className="mobile-btn" aria-hidden="true">
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="wrapper">
        <section id="top-main-section" className="first-screen">
          <div className="container full-height">
            <div className="row full-height">
              <div className="col-lg-6 width-75 col-md-8 col-xs-12 full-height">
                <div className="first-screen-box">
                  <div className="main-avatar">
                    <img src={avatarSrc} alt="Portrait of Alan Guevara" />
                  </div>
                  <div className="about-me">
                    <div className="about-title">
                      <h1 className="hidden-sm hidden-xs">
                        {HERO_COPY.name}
                        <sup style={{ fontSize: "1.2rem", fontWeight: 500 }}>
                          {HERO_COPY.credential}
                        </sup>
                      </h1>
                      <h2 className="hidden-sm hidden-xs" style={{ fontSize: "2rem", fontWeight: 600 }}>
                        {HERO_COPY.title}
                      </h2>
                    </div>
                    <div className="opacity-box">
                      <p className="my-story">{HERO_COPY.summary}</p>
                    </div>
                    <CertBadgeRow />
                    <div className="first-screen-buttons">
                      <Link to={HERO_COPY.primaryCta.to} className="site-btn btn-theme-white">
                        {HERO_COPY.primaryCta.text}
                      </Link>
                      <a
                        href={HERO_COPY.secondaryCta.href}
                        target="_blank"
                        rel="noreferrer"
                        className="site-btn btn-theme-white-tr"
                      >
                        {HERO_COPY.secondaryCta.text}
                      </a>
                      <button
                        type="button"
                        className="site-btn btn-theme-white-tr"
                        onClick={onResumeClick}
                      >
                        Resume
                      </button>
                    </div>
                  </div>
                  <div className="about-me-info hidden-sm hidden-xs">
                    {CONTACT_INFO.map((item) => (
                      <p className="info-row" key={item.label}>
                        <span className="span-title">{item.label}</span>
                        <span className="opacity-box">
                          {item.href ? (
                            <a href={item.href}>{item.value}</a>
                          ) : (
                            <span className="map-link">{item.value}</span>
                          )}
                        </span>
                      </p>
                    ))}
                    <p className="info-row">
                      <span className="span-title">Social</span>
                      <span className="social-icons-row">
                        {SOCIAL_LINKS.map((link) => (
                          <a
                            key={link.icon}
                            target="_blank"
                            rel="noreferrer"
                            href={link.href}
                            className={`fa fonts-icons ${link.icon}`}
                            aria-label={link.label}
                          />
                        ))}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
