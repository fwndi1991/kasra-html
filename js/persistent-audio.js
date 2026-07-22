const AUDIO_KEY = 'kasra-audio-state';
const audioFrame = document.getElementById('audioPlayer');

function saveAudioState() {
  if (!audioFrame || !audioFrame.src) return;
  const state = {
    src: audioFrame.getAttribute('src') || audioFrame.src,
    currentTime: audioFrame.currentTime,
    playing: !audioFrame.paused,
    volume: audioFrame.volume,
    trackIndex: typeof currentTrack !== 'undefined' ? currentTrack : 0,
  };
  sessionStorage.setItem(AUDIO_KEY, JSON.stringify(state));
}

function restoreAudioState() {
  try {
    const raw = sessionStorage.getItem(AUDIO_KEY);
    if (!raw) return false;
    const state = JSON.parse(raw);
    if (!state.src) return false;

    if (typeof tracks !== 'undefined' && typeof loadTrack === 'function') {
      const idx = state.trackIndex || 0;
      if (idx >= 0 && idx < tracks.length) {
        loadTrack(idx);
      }
    }

    audioFrame.src = state.src;
    audioFrame.volume = state.volume || 0.8;
    audioFrame.currentTime = state.currentTime || 0;

    if (state.playing) {
      audioFrame.play().then(() => {
        if (typeof updatePlayButton === 'function') updatePlayButton();
        if (typeof syncUIFromAudio === 'function') syncUIFromAudio();
      }).catch(() => {});
    }
    return state.playing;
  } catch {
    return false;
  }
}

window.addEventListener('beforeunload', saveAudioState);

document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') saveAudioState();
});

window.addEventListener('pagehide', saveAudioState);

window.addEventListener('DOMContentLoaded', () => {
  restoreAudioState();
});
