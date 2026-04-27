(function () {
  function startSphere() {
    var canvas = document.getElementById("resetui-auth-sphere");
    if (!canvas || canvas.dataset.ready === "true") return;

    var ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.dataset.ready = "true";

    var chars = "\u2591\u2592\u2593\u2588\u2580\u2584\u258c\u2590\u2502\u2500\u2524\u251c\u2534\u252c\u256d\u256e\u2570\u256f";
    var time = 0;
    var frame = 0;

    function resize() {
      var dpr = window.devicePixelRatio || 1;
      var rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function render() {
      var rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      var centerX = rect.width / 2;
      var centerY = rect.height / 2;
      var radius = Math.min(rect.width, rect.height) * 0.44;
      var points = [];

      ctx.font = "12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (var phi = 0; phi < Math.PI * 2; phi += 0.16) {
        for (var theta = 0; theta < Math.PI; theta += 0.16) {
          var x = Math.sin(theta) * Math.cos(phi + time * 0.5);
          var y = Math.sin(theta) * Math.sin(phi + time * 0.5);
          var z = Math.cos(theta);
          var rotY = time * 0.3;
          var newX = x * Math.cos(rotY) - z * Math.sin(rotY);
          var newZ = x * Math.sin(rotY) + z * Math.cos(rotY);
          var rotX = time * 0.2;
          var newY = y * Math.cos(rotX) - newZ * Math.sin(rotX);
          var finalZ = y * Math.sin(rotX) + newZ * Math.cos(rotX);
          var depth = (finalZ + 1) / 2;

          points.push({
            x: centerX + newX * radius,
            y: centerY + newY * radius,
            z: finalZ,
            char: chars[Math.floor(depth * (chars.length - 1))],
          });
        }
      }

      points.sort(function (a, b) {
        return a.z - b.z;
      });

      points.forEach(function (point) {
        var alpha = 0.12 + (point.z + 1) * 0.32;
        ctx.fillStyle = "rgba(26, 26, 23, " + alpha + ")";
        ctx.fillText(point.char, point.x, point.y);
      });

      time += 0.02;
      frame = window.requestAnimationFrame(render);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener(
      "pagehide",
      function () {
        window.cancelAnimationFrame(frame);
      },
      { once: true },
    );
    render();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startSphere, { once: true });
  } else {
    startSphere();
  }
})();
