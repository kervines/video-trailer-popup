const btnWatch = document.querySelector('.watch');
const videoHide = document.querySelector('.video');
const btnClose = document.querySelector('.close');
const video = document.querySelector('video');

btnWatch.addEventListener('click', () => {
  videoHide.classList.toggle('hide');

  stopVideo();
});

btnClose.addEventListener('click', () => {
  videoHide.classList.toggle('hide');
  stopVideo();
});

videoHide.addEventListener('click', (event) => {
  if (event.target.id === 'hide') {
    videoHide.classList.toggle('hide');
    stopVideo();
  }
});

function stopVideo() {
  video.pause();
}
