const CANDLE_KEY = 'kasra-candles-lit';

function toPersianDigits(num) {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  return String(num).replace(/\d/g, d => persianDigits[d]);
}

function getCandleCount() {
  const val = parseInt(localStorage.getItem(CANDLE_KEY), 10);
  return isNaN(val) ? 0 : val;
}

function updateCandleCountDisplay() {
  const el = document.getElementById('candleCount');
  if (!el) return;
  const count = getCandleCount();
  el.innerHTML = count > 0
    ? `تا امروز <strong>${toPersianDigits(count)}</strong> شمع برای کسری روشن کرده‌اید`
    : 'اولین شمع را برای یاد کسری روشن کنید';
}

function lightCandle() {
  const btn = document.getElementById('candleBtn');
  const label = document.getElementById('candleLabel');
  if (!btn || btn.classList.contains('lit')) return;

  const count = getCandleCount() + 1;
  localStorage.setItem(CANDLE_KEY, String(count));

  btn.classList.add('lit');
  label.textContent = 'روحش شاد';

  updateCandleCountDisplay();

  setTimeout(() => {
    btn.classList.remove('lit');
    label.textContent = 'روشن کردن شمع برای کسری';
  }, 8000);
}

function createLightParticles() {
  const container = document.getElementById('lightParticles');
  if (!container) return;
  const count = 18;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const left = Math.random() * 100;
    const duration = 10 + Math.random() * 10;
    const delay = Math.random() * 14;
    const drift = (Math.random() - 0.5) * 60;
    p.style.left = `${left}%`;
    p.style.setProperty('--drift', `${drift}px`);
    p.style.animationDuration = `${duration}s`;
    p.style.animationDelay = `${delay}s`;
    container.appendChild(p);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateCandleCountDisplay();
  createLightParticles();
});
