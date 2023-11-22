const btnWatch = document.querySelector('.watch');
const videoHide = document.querySelector('.video');
const btnClose = document.querySelector('.close');
const video = document.querySelector('video');

btnWatch.addEventListener('click', () => {
  videoHide.classList.toggle('hide');
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

const btnEl = document.querySelector('.btn');
btnEl.addEventListener('mouseover', (event) => {
  const x = event.pageX - btnEl.offsetLeft;
  const y = event.pageY - btnEl.offsetTop;

  btnEl.style.setProperty('--xPos', `${x}px`);
  btnEl.style.setProperty('--yPos', `${y}px`);
});
