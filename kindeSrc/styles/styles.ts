// CSS Variables configuration
const kindeVariables = {
  baseFontFamily:
    '"IBM Plex Mono", "Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  buttonPrimaryBackgroundColor: "#1a1a17",
  buttonPrimaryColor: "#fafaf8",
  buttonPrimaryBorderWidth: "1px",
  buttonPrimaryBorderColor: "#1a1a17",

  buttonSecondaryBackgroundColor: "transparent",
  buttonSecondaryColor: "#1a1a17",
  buttonSecondaryBorderWidth: "1px",
  buttonSecondaryBorderColor: "#d8d6cf",
  buttonSecondaryBorderStyle: "solid",

  buttonBorderRadius: "12px",
} as const;

export const getStyles = (): string => `
  :root {
    --kinde-base-font-family: ${kindeVariables.baseFontFamily};
    --kinde-button-primary-background-color: ${kindeVariables.buttonPrimaryBackgroundColor};
    --kinde-button-primary-color: ${kindeVariables.buttonPrimaryColor};
    --kinde-button-border-radius: ${kindeVariables.buttonBorderRadius};
    --kinde-button-primary-border-width: ${kindeVariables.buttonPrimaryBorderWidth};
    --kinde-button-primary-border-color: ${kindeVariables.buttonPrimaryBorderColor};

    --kinde-button-secondary-background-color: ${kindeVariables.buttonSecondaryBackgroundColor};
    --kinde-button-secondary-border-width: ${kindeVariables.buttonSecondaryBorderWidth};
    --kinde-button-secondary-border-color: ${kindeVariables.buttonSecondaryBorderColor};
    --kinde-button-secondary-border-style: ${kindeVariables.buttonSecondaryBorderStyle};
    --kinde-control-checkable-border-color: #1a1a17;
    --kinde-control-checkable-border-radius: 8px;
    --kinde-control-checkable-border-width: 1px;
    --kinde-control-label-font-weight: 400;

    --kinde-designer-control-select-text-border-radius: 12px;

    --kinde-form-spacing-content: 1.5rem;
  }

  html,
  body {
    width: 100%;
    max-width: 100%;
    margin: 0;
    overflow-x: hidden;
  }


  [data-kinde-control-label] {
    font-size: 0.9rem;
    color: #1a1a17;
    font-weight: 600;
  }

  [data-kinde-control-select-text] {
    border: 1px solid #d8d6cf;
    border-radius: 12px;
    background: #ffffff;
    min-height: 48px;
    color: #1a1a17;
    box-shadow: 0 1px 2px rgba(26, 26, 23, 0.04);
  }

  [data-kinde-widget],
  [data-kinde-widget] *,
  form,
  form * {
    box-sizing: border-box;
    max-width: 100%;
  }

  [data-kinde-widget],
  form {
    width: 100%;
    overflow: hidden;
  }

  input,
  button,
  select,
  textarea {
    font-family: var(--kinde-base-font-family);
  }

  .resetui-auth-form button::after {
    content: " →";
  }


  [data-kinde-control-checkable-container] [data-kinde-control-label] {
    font-weight: 500;
  }
    
  [data-kinde-fallback-action] {
    display: none;
  }

  .sidepanel {
    display: none;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }

  .logo {
    display: none;
  }

  @media only screen and (min-width: 1024px) {
    .sidepanel {
      flex: 1 1 50%;
      min-width: 0;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      border-right: 1px solid #e4e3df;
      background:
        linear-gradient(rgba(228, 227, 223, 0.52) 1px, transparent 1px),
        linear-gradient(90deg, rgba(228, 227, 223, 0.52) 1px, transparent 1px),
        radial-gradient(circle at 50% 45%, rgba(26, 26, 23, 0.05), transparent 48%),
        #fafaf8;
      background-size: 72px 72px, 72px 72px, auto, auto;
    }

    .logo {
      width: 150px;
    }
  }

  .visual-shell {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 620px;
    overflow: hidden;
  }

  .resetui-logo-mark {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  .resetui-logo-mark::before {
    content: "R";
    position: absolute;
    color: #1a1a17;
    font-size: 21px;
    font-weight: 700;
    line-height: 1;
  }

  .resetui-logo-mark img {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .visual-copy {
    position: absolute;
    left: clamp(2.5rem, 6vw, 6rem);
    top: clamp(2.5rem, 7vh, 5rem);
    max-width: 360px;
    z-index: 2;
  }

  .visual-kicker {
    display: inline-flex;
    margin-bottom: 1.25rem;
    border-left: 34px solid #a9a7a0;
    padding-left: 0.75rem;
    color: #6f6d66;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 0.02em;
  }

  .visual-copy h2 {
    margin: 0;
    color: #1a1a17;
    font-size: clamp(48px, 6vw, 82px);
    line-height: 0.95;
    font-weight: 400;
    letter-spacing: -0.06em;
  }

  .visual-copy p {
    margin: 1.75rem 0 0;
    color: #6f6d66;
    font-size: 15px;
    line-height: 1.8;
    max-width: 34ch;
  }

  .sphere-wrap {
    position: absolute;
    right: clamp(1.5rem, 4vw, 4rem);
    bottom: clamp(2rem, 6vh, 4rem);
    width: min(385px, 34vw);
    aspect-ratio: 1;
    opacity: 0.82;
  }

  .sphere-wrap canvas {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1500px) {
    .visual-copy {
      max-width: 330px;
    }

    .visual-copy h2 {
      font-size: clamp(42px, 4.6vw, 68px);
      line-height: 0.98;
    }

    .visual-copy p {
      font-size: 14px;
      max-width: 32ch;
    }
    
    .sphere-wrap {
      width: min(360px, 32vw);
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1199px) {
    .visual-copy {
      max-width: 300px;
    }

    .visual-copy h2 {
      font-size: clamp(38px, 4.8vw, 54px);
      line-height: 1;
    }

    .visual-copy p {
      font-size: 13px;
      line-height: 1.7;
      max-width: 29ch;
    }
  }

  @media only screen and (max-width: 1023px) {
    main {
      min-height: 100vh;
    }
  }
`;
