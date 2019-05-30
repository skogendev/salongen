import gridGuides from './gridguides.js';
import flatpickr from 'flatpickr';
import { Norwegian } from 'flatpickr/dist/l10n/no.js';
import Swiper from 'swiper';
import ScrollOut from 'scroll-out';
import lazySizes from 'lazysizes';
import Barba from '@barba/core';
import barbaCss from '@barba/css';
import inView from 'in-view';
import Headroom from 'headroom.js';


// Document ready

document.addEventListener('DOMContentLoaded', function(){
  document.body.classList.add('js-ready');
  document.body.classList.add('js-transition-ready');
}, false);

// Ctrl + G for guides
gridGuides();

document.querySelector('.js-show-nav').addEventListener('click',function(){
  var $this = this;
  var $elementsToShow = document.querySelectorAll('.js-show-nav-element');
  if ($this.classList.contains('active')) {
    $this.classList.remove('active');
    $elementsToShow.forEach(function(el){
      el.classList.add('hidden');
    });
  } else {
    $this.classList.add('active');
    $elementsToShow.forEach(function(el){
      el.classList.remove('hidden');
    });
  }
});

// Kalender
function init(){
  var calendarOpen = document.querySelectorAll('.c-calendar');
  flatpickr(calendarOpen, {
    'dateFormat': 'j. F',
    'locale': Norwegian,
    'minDate': 'today',
    'enableTime': true,
  });

  var calendarInline = document.querySelectorAll('.c-calendar-inline');
  flatpickr(calendarInline, {
    'dateFormat': 'j. F',
    'locale': Norwegian,
    'minDate': 'today',
    'enableTime': false,
    'inline': true,
    'mode': 'multiple',
    'onReady': function(){
      this.calendarContainer.classList.add('js-active');
    }
  });



  lazySizes.init();

  inView('.lazyload-img').on('enter', el => {
    el.classList.add('inview')
  });
  inView.threshold(0.15);

  inView('.section').on('enter', el => {
    el.classList.add('inview')
  });


}

init();


// swiper
var mySwiper = new Swiper ('.swiper-container', {

    loop: false,
    slidesPerView: 'auto',
    spaceBetween: 100,
    grabCursor: true

  });

// Scrollings

ScrollOut({
  threshold: 1,
  cssProps: {
    viewportY: true,
    visibleY: true,
    scrollPercentY: true
  },
  scrollingElement: document.body
});

var body = document.documentElement;

document.addEventListener('mousemove', evt => {
  let x = evt.clientX / innerWidth;
  let y = evt.clientY / innerHeight;

  body.style.setProperty('--mouse-x', x.toFixed(2));
  body.style.setProperty('--mouse-y', y.toFixed(2));
});




// Barba
Barba.use(barbaCss);
Barba.init({
  transitions: [{
    before: ({ current, next, trigger }) => {

      let menu = document.querySelector('.main-nav');
      let nextItem = menu.querySelector('a[href="' + next.url.path + '"]');

      if (nextItem !== null) {
        menu.querySelector('.active').classList.remove('active');
        nextItem.classList.add('active');
      } else {
        if (menu.querySelector('.active')) {
          menu.querySelector('.active').classList.remove('active');
        }

      }

    },
    leave({ current, next, trigger }) {
      // do something with `current.container` for your leave transition
      // then return a promise or use `this.async()`
      document.body.classList.remove('js-transition-ready');
    },
    afterLeave(){
      document.body.classList.remove('js-transition-ready');
      window.scrollTo(0,0);
    },
    enter({ current, next, trigger }) {
      // do something with `next.container` for your enter transition
      // then return a promise or use `this.async()`
      setTimeout(function(){
        document.body.classList.add('js-transition-ready');
      }, 50);
    },
    afterEnter({ }) {
      init();
      document.body.classList.add('js-transition-ready');
    }
  }]
});


// headroom
var mainHeader = document.querySelector('.main-header');
var headroom  = new Headroom(mainHeader, {
  offset: 50,
  tolerance: 50
});
headroom.init();


// Steps
document.querySelectorAll('.js-steps').forEach(function(el){
  var $stepWrapper = el.querySelector('.js-steps__inner');
  var $steps = el.querySelectorAll('.js-step');
  var stepNumber = $steps.length;
  var thisWidth = el.offsetWidth;

  $steps.forEach(function(stepEl){
    stepEl.style.width = thisWidth;
    stepEl.classList.remove('hidden');
  });




  $stepWrapper.classList.add('flex');

  var $nextStep = el.querySelectorAll('.js-next-step');
  $nextStep.forEach(function(nextEl, currentStep){
    nextEl.addEventListener('click',function(e){
      e.preventDefault();
      var stepToScroll = nextEl.dataset.step;
      $stepWrapper.setAttribute('style','transform:translateX(' + -(thisWidth * stepToScroll) + 'px)');
    });
  })
});

// Ticker
var $ticker = document.querySelector('.ticker');
var $tickerElements = $ticker.querySelectorAll('li');
var currentTicker = 0;
$tickerElements[0].classList.add('active');



window.setCorrectingInterval = ( function( func, delay ) {
    var instance = { };

    function tick( func, delay ) {
        if ( ! instance.started ) {
            instance.func = func;
            instance.delay = delay;
            instance.startTime = new Date().valueOf();
            instance.target = delay;
            instance.started = true;

            setTimeout( tick, delay );
        } else {
            var elapsed = new Date().valueOf() - instance.startTime,
            adjust = instance.target - elapsed;

            instance.func();
            instance.target += instance.delay;

            setTimeout( tick, instance.delay + adjust );
        }
    };

    return tick( func, delay );
} );


var startTime = Date.now();
/*
setCorrectingInterval(function(){
  $tickerElements[currentTicker].classList.remove('active');
  currentTicker++;
  if (currentTicker >= $tickerElements.length) {
    currentTicker = 0;
  }
  $tickerElements[currentTicker].classList.add('active');
  console.log( ( Date.now() - startTime ) + 'ms elapsed' );


}, 4000)
*/
