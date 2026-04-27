"use server";

import { getKindeLoginUrl, getKindeWidget, getLogoUrl } from "@kinde/infrastructure";
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
    maxWidth: "420px",
    width: "100%",
    margin: "0 auto",
    minInlineSize: "2rem",
  },
  loginFormWrapper: {
    display: "flex",
    padding: "clamp(2rem, 3.2vw, 4rem)",
    flexDirection: "column",
    justifyContent: "center",
    flex: "1 1 50%",
    minWidth: 0,
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
    maxWidth: "38ch",
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
    marginBottom: "3rem",
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
          <div className="sphere-wrap" aria-hidden="true">
            <canvas id="resetui-auth-sphere" />
          </div>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (() => {
                  const canvas = document.getElementById("resetui-auth-sphere");
                  if (!canvas) return;
                  const ctx = canvas.getContext("2d");
                  if (!ctx) return;
                  const chars = "░▒▓█▀▄▌▐│─┤├┴┬╭╮╰╯";
                  let time = 0;
                  let frame = 0;
                  const resize = () => {
                    const dpr = window.devicePixelRatio || 1;
                    const rect = canvas.getBoundingClientRect();
                    canvas.width = rect.width * dpr;
                    canvas.height = rect.height * dpr;
                    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
                  };
                  const render = () => {
                    const rect = canvas.getBoundingClientRect();
                    ctx.clearRect(0, 0, rect.width, rect.height);
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const radius = Math.min(rect.width, rect.height) * 0.44;
                    ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
                    ctx.textAlign = "center";
                    ctx.textBaseline = "middle";
                    const points = [];
                    for (let phi = 0; phi < Math.PI * 2; phi += 0.16) {
                      for (let theta = 0; theta < Math.PI; theta += 0.16) {
                        const x = Math.sin(theta) * Math.cos(phi + time * 0.5);
                        const y = Math.sin(theta) * Math.sin(phi + time * 0.5);
                        const z = Math.cos(theta);
                        const rotY = time * 0.3;
                        const newX = x * Math.cos(rotY) - z * Math.sin(rotY);
                        const newZ = x * Math.sin(rotY) + z * Math.cos(rotY);
                        const rotX = time * 0.2;
                        const newY = y * Math.cos(rotX) - newZ * Math.sin(rotX);
                        const finalZ = y * Math.sin(rotX) + newZ * Math.cos(rotX);
                        const depth = (finalZ + 1) / 2;
                        points.push({
                          x: centerX + newX * radius,
                          y: centerY + newY * radius,
                          z: finalZ,
                          char: chars[Math.floor(depth * (chars.length - 1))],
                        });
                      }
                    }
                    points.sort((a, b) => a.z - b.z);
                    points.forEach((point) => {
                      const alpha = 0.12 + (point.z + 1) * 0.32;
                      ctx.fillStyle = "rgba(26, 26, 23, " + alpha + ")";
                      ctx.fillText(point.char, point.x, point.y);
                    });
                    time += 0.02;
                    frame = requestAnimationFrame(render);
                  };
                  resize();
                  window.addEventListener("resize", resize);
                  render();
                  window.addEventListener("pagehide", () => cancelAnimationFrame(frame), { once: true });
                })();
              `,
            }}
          />
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
          <p style={styles.signInPrompt}>
            Got beta access?{" "}
            <a href={getKindeLoginUrl()} style={styles.signInLink}>
              Sign In
            </a>
          </p>
        </div>
      </main>
    </article>
  );
};
