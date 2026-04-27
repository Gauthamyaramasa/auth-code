"use server";

import { getKindeWidget, getLogoUrl } from "@kinde/infrastructure";
import React from "react";

type WidgetProps = {
  heading: string;
};

const styles: {
  widgetWrapper: React.CSSProperties;
  heading: React.CSSProperties;
  loginForm: React.CSSProperties;
  loginFormWrapper: React.CSSProperties;
  description: React.CSSProperties;
  brand: React.CSSProperties;
  brandMark: React.CSSProperties;
  signInPrompt: React.CSSProperties;
  signInLink: React.CSSProperties;
} = {
  widgetWrapper: {
    minHeight: "100vh",
    width: "100%",
    maxWidth: "100vw",
    display: "flex",
    overflow: "hidden",
  },
  loginForm: {
    boxSizing: "border-box",
    maxWidth: "min(620px, 100%)",
    width: "100%",
    margin: "0 auto",
    minInlineSize: "2rem",
    padding: "clamp(1.5rem, 3vw, 3.5rem)",
    border: "1px solid #e4e3df",
    borderRadius: "clamp(18px, 3vw, 28px)",
    backgroundColor: "#ffffff",
    boxShadow: "0 24px 70px rgba(26, 26, 23, 0.06)",
  },
  loginFormWrapper: {
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    padding: "clamp(1rem, 4vw, 5rem)",
    flexDirection: "column",
    justifyContent: "center",
    flex: "1 1 50%",
    minWidth: 0,
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "#fafaf8",
  },
  heading: {
    fontSize: "clamp(32px, 4vw, 48px)",
    fontWeight: 500,
    lineHeight: 1.02,
    letterSpacing: "-0.04em",
    margin: "0 0 1rem",
    textAlign: "center",
    color: "#1a1a17",
  },
  description: {
    margin: "0 auto 2rem",
    maxWidth: "42ch",
    textAlign: "center",
    color: "#6f6d66",
    fontSize: "15px",
    lineHeight: 1.7,
  },
  brand: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.75rem",
    marginBottom: "2.15rem",
    color: "#1a1a17",
    fontWeight: 700,
    fontSize: "20px",
    letterSpacing: "-0.02em",
  },
  brandMark: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    border: "2px solid #1a1a17",
    background: "#ffffff",
    objectFit: "contain",
  },
  signInPrompt: {
    margin: "1rem 0 0",
    textAlign: "center",
    color: "#6f6d66",
    fontSize: "14px",
    lineHeight: 1.6,
  },
  signInLink: {
    color: "#184027",
    fontWeight: 700,
    textDecoration: "none",
  },
};

export const Widget: React.FC<WidgetProps> = ({ heading }) => {
  return (
    <article style={styles.widgetWrapper}>
      <div className="sidepanel">
        <div className="visual-shell">
          <div className="visual-copy">
            <span className="visual-kicker">In Beta</span>
            <h2>Redesign faster with real website context.</h2>
            <p>Paste a site, capture its brand, and turn it into a cleaner landing page with production-ready code.</p>
          </div>
        </div>
      </div>

      <main style={styles.loginFormWrapper}>
        <div style={styles.loginForm} className="resetui-auth-form">
          <div style={styles.brand}>
            <span style={styles.brandMark} className="resetui-logo-mark">
              <img src={getLogoUrl()} alt="" />
            </span>
            <span>ResetUI</span>
          </div>
          <h1 style={styles.heading}>{heading}</h1>
          <p style={styles.description}>
            Join the waitlist and we&apos;ll notify you when your beta invite is ready.
          </p>

          {getKindeWidget()}
        </div>
      </main>
    </article>
  );
};
