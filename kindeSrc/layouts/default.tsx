"use server";

import React from "react";

type DefaultLayoutProps = {
  children: React.ReactNode;
  isRegisterPage?: boolean;
};

const styles: {
  container: React.CSSProperties;
} = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#fafaf8",
    color: "#1a1a17",
    display: "flex",
    justifyContent: "center",
  },
};

export const DefaultLayout = ({
  children,
  isRegisterPage = false,
}: DefaultLayoutProps): React.JSX.Element => (
  <div>
    <main style={styles.container} id="main">
      {children}
    </main>
  </div>
);
