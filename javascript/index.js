const Slideshow = document.getElementById('slideshow');
const SlideIndicator = document.getElementById('slide-indicator');

let photoArray = [
  'url(/images/slide-img-1.jpeg), #ff8a2e',
  'url(/images/slide-image-2.jpeg)',
  'url(/images/slide-image-3.jpeg)',
  'url(/images/slide-image-4.jpeg)',
];

let indicators = [
  `<div class="active-slide-indicator"></div>
    <div class="indicator"></div>
    <div class="indicator"></div>
    <div class="indicator"></div>`,
  `<div class="indicator"></div>
  <div class="active-slide-indicator"></div>
  <div class="indicator"></div>
  <div class="indicator"></div>`,
  `<div class="indicator"></div>
  <div class="indicator"></div>
  <div class="active-slide-indicator"></div>
  <div class="indicator"></div>`,
  `<div class="indicator"></div>
  <div class="indicator"></div>
  <div class="indicator"></div>
  <div class="active-slide-indicator"></div>
  `,
];

let index = 0;

setInterval(() => {
  index++;
  if (index === 4) {
    index = 0;
  }
  Slideshow.style.background = photoArray[index];
  Slideshow.style.backgroundRepeat = 'no-repeat';
  Slideshow.style.backgroundSize = '100% 100%';
  SlideIndicator.innerHTML = indicators[index];
}, 2000);
