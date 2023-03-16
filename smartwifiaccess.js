const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let wave = {
  y: canvas.height / 2,
  length: 0.01,
  amplitude: 100,
  frequency: 0.01,
};

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);

  for (let i = 0; i < canvas.width; i++) {
    ctx.lineTo(
      i,
      wave.y +
        Math.sin(i * wave.length + wave.frequency) * wave.amplitude *
          Math.sin(wave.frequency)
    );
  }

  ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
  ctx.lineWidth = 2;
  ctx.stroke();

  wave.frequency += 0.01;

  requestAnimationFrame(animate);
}

animate();