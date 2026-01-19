cconst video = document.getElementById('birthdayVideo');
const hint = document.getElementById('hint');
const dateSection = document.getElementById('dateSection');
const envelopeSection = document.querySelector('.envelope-section');
const envelope = document.getElementById('envelope');
const music = document.getElementById('bgMusic');
const ageElement = document.getElementById('age');

let videoFinished = false;

/* ANIMAR IDADE */
function animateAge(target) {
  let current = 0;
  const interval = setInterval(() => {
    current++;
    ageElement.textContent = current;
    if (current >= target) clearInterval(interval);
  }, 80);
}

/* TOCAR MÚSICA (iPhone SAFE) */
function tryPlayMusic() {
  music.volume = 0.5;
  music.play().catch(() => {});
}

/* QUANDO O VÍDEO TERMINA */
video.addEventListener('ended', () => {
  videoFinished = true;
  hint.textContent = 'Desce 👇';

  dateSection.style.display = 'block';
  envelopeSection.style.display = 'flex';

  animateAge(18);
  tryPlayMusic();
});

/* ABRIR ENVELOPE (CLICK + TOUCH) */
function openEnvelope() {
  if (!videoFinished) return;
  envelope.classList.add('open');
}

envelope.addEventListener('click', openEnvelope);
envelope.addEventListener('touchstart', openEnvelope);

/* FALLBACK PARA MÚSICA NO iPHONE */
document.addEventListener('touchstart', tryPlayMusic, { once: true });
document.addEventListener('click', tryPlayMusic, { once: true });

