import React from "react";
import { createRoot } from "react-dom/client";
import { DefaultLayout } from "../kindeSrc/layouts/default";
import { Widget } from "../kindeSrc/components/widget";
import { getStyles } from "../kindeSrc/styles/styles";

function startSphere() {
  const canvas = document.getElementById("resetui-auth-sphere") as HTMLCanvasElement | null;
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

    const points: { x: number; y: number; z: number; char: string }[] = [];
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
      ctx.fillStyle = `rgba(26, 26, 23, ${alpha})`;
      ctx.fillText(point.char, point.x, point.y);
    });

    time += 0.02;
    frame = requestAnimationFrame(render);
  };

  resize();
  window.addEventListener("resize", resize);
  render();
  window.addEventListener("pagehide", () => cancelAnimationFrame(frame), { once: true });
}

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
requestAnimationFrame(startSphere);
