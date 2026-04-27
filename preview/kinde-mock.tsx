import React from "react";

export type KindePageEvent = {
  context: {
    widget: {
      content: {
        page_title: string;
        heading: string;
      };
    };
  };
  request: {
    locale: {
      isRtl: boolean;
      lang: string;
    };
  };
};

export function getKindeCSRF() {
  return "local-preview-csrf";
}

export function getKindeRequiredCSS() {
  return null;
}

export function getKindeRequiredJS() {
  return null;
}

export function getSVGFaviconUrl() {
  return "/Org-Logo.jpg";
}

export function getLogoUrl() {
  return "/Org-Logo.jpg";
}

export function getDarkModeLogoUrl() {
  return "/Org-Logo.jpg";
}

export function getKindeLoginUrl() {
  return "#login";
}

export function getKindeRegisterUrl() {
  return "#register";
}

export function getKindeWidget() {
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <label style={{ display: "grid", gap: "0.4rem", fontSize: "0.9rem" }}>
        First name
        <input
          type="text"
          style={{
            border: "none",
            borderBottom: "1px solid #184027",
            background: "transparent",
            padding: "0.8rem 0",
            fontSize: "1rem",
            outline: "none",
          }}
        />
      </label>
      <label style={{ display: "grid", gap: "0.4rem", fontSize: "0.9rem" }}>
        Last name
        <input
          type="text"
          style={{
            border: "none",
            borderBottom: "1px solid #184027",
            background: "transparent",
            padding: "0.8rem 0",
            fontSize: "1rem",
            outline: "none",
          }}
        />
      </label>
      <label style={{ display: "grid", gap: "0.4rem", fontSize: "0.9rem" }}>
        Email
        <input
          type="email"
          placeholder="you@example.com"
          style={{
            border: "none",
            borderBottom: "1px solid #184027",
            background: "transparent",
            padding: "0.8rem 0",
            fontSize: "1rem",
            outline: "none",
          }}
        />
      </label>
      <button
        type="button"
        style={{
          border: "2px solid #184027",
          borderRadius: "99px",
          background: "transparent",
          color: "#184027",
          padding: "0.9rem 1.2rem",
          fontSize: "1rem",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Join the Beta
      </button>
    </form>
  );
}
