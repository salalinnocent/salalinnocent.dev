const canvasBgDot = function () {
  const canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d"),
    color = "rgb(81, 162, 233)";

  canvas.width = document.body.scrollWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = "block";
  canvas.style.zIndex = "-1"
  ctx.lineWidth = 0.3;

  let mousePosition = {
    x: (30 * canvas.width) / 100,
    y: (30 * canvas.height) / 100,
  };

  const windowSize = window.innerWidth;
  let dots;

  if (windowSize > 1600) {
    dots = { nb: 600, distance: 70, d_radius: 300, array: [] };
  } else if (windowSize > 1300) {
    dots = { nb: 575, distance: 60, d_radius: 280, array: [] };
  } else if (windowSize > 1100) {
    dots = { nb: 500, distance: 55, d_radius: 250, array: [] };
  } else if (windowSize > 800) {
    dots = { nb: 300, distance: 0, d_radius: 0, array: [] };
  } else if (windowSize > 600) {
    dots = { nb: 200, distance: 0, d_radius: 0, array: [] };
  } else {
    dots = { nb: 100, distance: 0, d_radius: 0, array: [] };
  }

  function Dot() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = -0.5 + Math.random();
    this.vy = -0.5 + Math.random();
    this.radius = Math.random() * 1.5;
    this.colour = color;
  }

  Dot.prototype = {
    create: function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      const dotDistance =
        ((this.x - mousePosition.x) ** 2 + (this.y - mousePosition.y) ** 2) ** 0.5;
      const distanceRatio = dotDistance / (windowSize / 1.7);
      ctx.fillStyle = this.colour.replace(")", `,${1 - distanceRatio})`).replace("rgb", "rgba");
      ctx.fill();
    },

    animate: function () {
      for (let i = 1; i < dots.nb; i++) {
        const dot = dots.array[i];
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    },

    line: function () {
      for (let i = 0; i < dots.nb; i++) {
        for (let j = 0; j < dots.nb; j++) {
          const i_dot = dots.array[i];
          const j_dot = dots.array[j];
          if (
            Math.abs(i_dot.x - j_dot.x) < dots.distance &&
            Math.abs(i_dot.y - j_dot.y) < dots.distance &&
            Math.abs(i_dot.x - mousePosition.x) < dots.d_radius &&
            Math.abs(i_dot.y - mousePosition.y) < dots.d_radius
          ) {
            ctx.beginPath();
            ctx.moveTo(i_dot.x, i_dot.y);
            ctx.lineTo(j_dot.x, j_dot.y);
            const dotDistance =
              ((i_dot.x - mousePosition.x) ** 2 + (i_dot.y - mousePosition.y) ** 2) ** 0.5;
            let distanceRatio = dotDistance / dots.d_radius - 0.3;
            if (distanceRatio < 0) distanceRatio = 0;
            ctx.strokeStyle = `rgba(81, 162, 233, ${1 - distanceRatio})`;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    },
  };

  function initDots() {
    dots.array = [];
    for (let i = 0; i < dots.nb; i++) {
      dots.array.push(new Dot());
    }
    dots.array[0].radius = 1.5;
    dots.array[0].colour = "#51a2e9";
  }

  function draw() {
    // Fill background black
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < dots.nb; i++) {
      dots.array[i].create();
    }
    dots.array[0].x = mousePosition.x;
    dots.array[0].y = mousePosition.y;
    dots.array[0].create();
    dots.array[0].line();
    dots.array[0].animate();

    requestAnimationFrame(draw);
  }

  window.onmousemove = function (e) {
    mousePosition.x = e.pageX;
    mousePosition.y = e.pageY;
  };
  
  window.onresize = function () {
    cancelAnimationFrame(drawFrame); // if you assign it as global var
    canvasBgDot();
  };

  initDots();
  let drawFrame = requestAnimationFrame(draw);
};

export default canvasBgDot;
