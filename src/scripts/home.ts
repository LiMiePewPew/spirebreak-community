const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const heroVideo = document.querySelector<HTMLVideoElement>('[data-hero-video]')!;
const filmToggle = document.querySelector<HTMLButtonElement>('[data-film-toggle]')!;
const filmDialog = document.querySelector<HTMLDialogElement>('#gameplay-dialog')!;
const fullVideo = document.querySelector<HTMLVideoElement>('[data-full-video]')!;
let userPaused = false;
let heroVisible = true;
function reflectPlayback() {
  const playing = !heroVideo.paused;
  filmToggle.dataset.playing = String(playing);
  filmToggle.setAttribute('aria-label', playing ? 'Pause background video' : 'Play background video');
  filmToggle.title = filmToggle.getAttribute('aria-label')!;
  if (playing) heroVideo.classList.add('is-playing');
}
async function startBackground() {
  if (!heroVideo.src) heroVideo.src = heroVideo.dataset.src!;
  heroVideo.muted = true;
  try { await heroVideo.play(); } catch { reflectPlayback(); }
}
function syncBackground() {
  if (userPaused || reducedMotion.matches || !heroVisible || document.hidden || document.querySelector('dialog[open]')) heroVideo.pause();
  else void startBackground();
}
filmToggle.hidden = false;
heroVideo.addEventListener('play', reflectPlayback);
heroVideo.addEventListener('pause', reflectPlayback);
heroVideo.addEventListener('error', () => { heroVideo.classList.remove('is-playing'); filmToggle.hidden = true; });
filmToggle.addEventListener('click', () => {
  userPaused = !heroVideo.paused;
  if (userPaused) heroVideo.pause();
  else void startBackground();
});
reducedMotion.addEventListener('change', syncBackground);
document.addEventListener('visibilitychange', syncBackground);
new IntersectionObserver(([entry]) => { heroVisible = entry.isIntersecting; syncBackground(); }, {threshold: 0.1}).observe(heroVideo);
const tabs = [...document.querySelectorAll<HTMLButtonElement>('[data-stage]')];
function selectStage(tab: HTMLButtonElement) {
  tabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')!)!.hidden = !selected;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectStage(tab));
  tab.addEventListener('keydown', event => {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
    else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = tabs.length - 1;
    else return;
    event.preventDefault(); selectStage(tabs[next]); tabs[next].focus();
  });
});
document.querySelector<HTMLButtonElement>('[data-watch]')!.addEventListener('click', () => {
  filmDialog.showModal(); heroVideo.pause(); void fullVideo.play().catch(() => {});
});
filmDialog.addEventListener('close', () => { fullVideo.pause(); syncBackground(); });
const gallery = [...document.querySelectorAll<HTMLAnchorElement>('[data-gallery]')];
const galleryDialog = document.querySelector<HTMLDialogElement>('#gallery-dialog')!;
const galleryImage = document.querySelector<HTMLImageElement>('[data-gallery-image]')!;
let currentImage = 0;
function showImage(index: number) {
  currentImage = (index + gallery.length) % gallery.length;
  const item = gallery[currentImage];
  galleryImage.src = item.href; galleryImage.alt = item.dataset.alt!;
  document.getElementById('gallery-caption')!.textContent = item.dataset.caption!;
  document.querySelector('[data-gallery-count]')!.textContent = `${currentImage + 1} / ${gallery.length}`;
}
gallery.forEach((item, index) => item.addEventListener('click', event => {
  event.preventDefault(); showImage(index); galleryDialog.showModal(); heroVideo.pause();
}));
document.querySelector('[data-previous]')!.addEventListener('click', () => showImage(currentImage - 1));
document.querySelector('[data-next]')!.addEventListener('click', () => showImage(currentImage + 1));
galleryDialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); showImage(currentImage + (event.key === 'ArrowRight' ? 1 : -1)); }
});
galleryDialog.addEventListener('close', syncBackground);
document.querySelectorAll<HTMLDialogElement>('.media-dialog').forEach(dialog => {
  dialog.querySelector('[data-close]')!.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
});
