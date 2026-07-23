const tracks = [
  { id: 1, title: 'BLOOD&INK', src: 'audio/BLOOD&INK.mp3', duration: '—' },
  { id: 2, title: 'ORIGIN', src: 'audio/ORIGIN.mp3', duration: '—' },
  { id: 3, title: 'TRAPVIRUS', src: 'audio/TRAPVIRUS.mp3', duration: '—' },
];

let currentTrack = 0;
let isPlaying = false;

const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const progressFill = document.getElementById('progressFill');
const progressBar = document.getElementById('progressBar');
const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl = document.getElementById('totalTime');
const volumeSlider = document.getElementById('volumeSlider');
const playlistList = document.getElementById('playlistList');
const trackTitle = document.getElementById('playerTrackTitle');
const trackCount = document.getElementById('playerTrackCount');

function toPersianNum(num) {
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  return String(num).replace(/\d/g, d => persianDigits[d]);
}

function formatTime(sec) {
  if (isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function loadTrack(idx) {
  currentTrack = idx;
  audio.src = tracks[idx].src;
  trackTitle.textContent = tracks[idx].title;
  trackCount.textContent = `${toPersianNum(idx + 1)} از ${toPersianNum(tracks.length)}`;
  renderPlaylist();
}

function renderPlaylist() {
  playlistList.innerHTML = tracks.map((t, i) => `
    <button class="playlist-item ${i === currentTrack ? 'active' : ''}" onclick="playTrack(${i})">
      <span>${t.title}</span>
      <a href="${t.src}" download="${t.title}.wav" class="playlist-download" onclick="event.stopPropagation()" aria-label="دانلود">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/></svg>
      </a>
    </button>
  `).join('');
}

function playTrack(idx) {
  loadTrack(idx);
  audio.play().then(() => {
    isPlaying = true;
    updatePlayButton();
  }).catch(() => {});
}

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play().then(() => {
      isPlaying = true;
    }).catch(() => {});
  }
  updatePlayButton();
}

function updatePlayButton() {
  const controls = document.getElementById('playerControls');
  if (isPlaying) {
    playIcon.innerHTML = '<path d="M6 4h4v16H6zM14 4h4v16h-4z"/>';
    playBtn.classList.add('playing');
    controls && controls.classList.add('playing');
  } else {
    playIcon.innerHTML = '<path d="M8 5v14l11-7z"/>';
    playBtn.classList.remove('playing');
    controls && controls.classList.remove('playing');
  }
}

function nextTrack() {
  const idx = currentTrack < tracks.length - 1 ? currentTrack + 1 : 0;
  playTrack(idx);
}

function prevTrack() {
  const idx = currentTrack > 0 ? currentTrack - 1 : tracks.length - 1;
  playTrack(idx);
}

function seekForward() {
  if (isNaN(audio.duration)) return;
  audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
}

function seekBackward() {
  audio.currentTime = Math.max(0, audio.currentTime - 10);
}

function setVolume(val) {
  audio.volume = parseFloat(val);
}

progressBar.addEventListener('click', (e) => {
  if (isNaN(audio.duration)) return;
  const rect = progressBar.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  audio.currentTime = pct * audio.duration;
});

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    progressFill.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
  }
});

audio.addEventListener('loadedmetadata', () => {
  totalTimeEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('ended', () => {
  if (currentTrack < tracks.length - 1) {
    nextTrack();
  } else {
    isPlaying = false;
    updatePlayButton();
  }
});

audio.addEventListener('play', () => {
  isPlaying = true;
  updatePlayButton();
});

audio.addEventListener('pause', () => {
  isPlaying = false;
  updatePlayButton();
});

function syncUIFromAudio() {
  trackTitle.textContent = tracks[currentTrack].title;
  trackCount.textContent = `${toPersianNum(currentTrack + 1)} از ${toPersianNum(tracks.length)}`;
  renderPlaylist();
  if (audio.duration) {
    totalTimeEl.textContent = formatTime(audio.duration);
    progressFill.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
  }
  if (volumeSlider) volumeSlider.value = audio.volume;
}

if (audio.src && audio.src !== window.location.href && !audio.src.endsWith('music-player.js')) {
  isPlaying = !audio.paused;
  syncUIFromAudio();
} else {
  loadTrack(0);
}
