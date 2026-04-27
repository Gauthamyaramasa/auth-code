import React from "react";
import { createRoot } from "react-dom/client";
import { DefaultLayout } from "../kindeSrc/layouts/default";
import { Widget } from "../kindeSrc/components/widget";
import { getStyles } from "../kindeSrc/styles/styles";

function PreviewApp() {
  return (
    <>
      <style>{getStyles()}</style>
      <DefaultLayout>
        <Widget heading="Request Beta Access" />
      </DefaultLayout>
    </>
  );
}

createRoot(document.getElementById("root")!).render(<PreviewApp />);
