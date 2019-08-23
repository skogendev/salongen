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
  var calendar = flatpickr(calendarOpen, {
    'locale': Norwegian,
    'minDate': 'today',
    'dateFormat': 'j. F'
  });
  

  function checkMeetingRoom(date, from, to) {
    $meetingRoomButton.innerHTML = 'Vent...';
    if (date) {
      var date = date;
      var timeFrom = from;
      var timeTo = to; 
    } else {
      var timeFrom = document.getElementById('time-from').value;
      var timeTo = document.getElementById('time-to').value;    
      var date = calendar.selectedDates[0];
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      if (month < 10) { 
        var month = '0' + month;
      }
      var day = date.getDate();
      if (day < 10) { 
        var day = '0' + day;
      }
      var date = year.toString() + month.toString() + day.toString();    

    }
    
    var url = 'http://salongen.codewise.no/umbraco/api/nexudus/GetBookedRooms?date=' + date + '&from=' + timeFrom + '&to=' + timeTo;
    

    var request = new XMLHttpRequest()
    /* http://salongen.codewise.no/umbraco/api/nexudus/GetBookedRooms?date=20191003&from=10&to=13 */
    request.open('GET', url, true);
    request.onload = function() {
      // Begin accessing JSON data here
      document.getElementById('meeting-rooms').scrollIntoView({
        behavior: 'smooth'
      });
      
      var data = JSON.parse(this.response)
      
      if (request.status >= 200 && request.status < 400) {
        setTimeout(function(){
          $meetingRoomButton.innerHTML = 'Sjekk';
        }, 500);
        data.forEach(function(id){
          document.querySelector('.room-' + id).classList.add('meeting-room-disabled');
        })
      } else {
        console.log('error')
      }
    }

    request.send()
  }
  var $meetingRoomButton = document.getElementById('button-meeting-rooms');
  if ($meetingRoomButton) {
    $meetingRoomButton.addEventListener('click', function(e){
      e.preventDefault();
      
      checkMeetingRoom()
    });
  }

  var urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('d')) {
 
    var timeFrom = urlParams.get('f');
    var timeTo = urlParams.get('t');
    var day = urlParams.get('d');
    var day = day.split(' ');
    switch(day[1]) {
      case 'Januar':
        var month = '01';
      case 'Februar':
        var month = '02';
      case 'Mars':
          var month = '03';
      case 'April':
        var month = '04';  
      case 'Mai':
          var month = '05';
      case 'Juni':
        var month = '06';  
      case 'Juli':
        var month = '07';
      case 'August':
        var month = '08';
      case 'September':
          var month = '09';
      case 'Oktober':
        var month = '10';  
      case 'November':
          var month = '11';
      case 'Desember':
        var month = '12';              
    }
    var day = parseInt(day[0]);
    var d = new Date();
    var n = d.getFullYear();
    var date = n.toString() + month.toString() + day.toString();    

    checkMeetingRoom(date, timeFrom, timeTo)

}

  function getBookedHours() {
    document.querySelector('.table-book').classList.add('loading');
    var date = calendar.selectedDates[0];
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      if (month < 10) { 
        var month = '0' + month;
      }
      var day = date.getDate();
      if (day < 10) { 
        var day = '0' + day;
      }
      var date = year.toString() + month.toString() + day.toString();    
      
      var roomId = document.querySelector('.js-calendar-hours').dataset.roomId;
      
      var url = 'http://salongen.codewise.no/umbraco/api/nexudus/GetBookedHours?roomid=' + roomId + '&date=' + date;
      
      var linkUrl = 'https://ibsen.spaces.nexudus.com/nb/bookings/calendar?resourceid=' + roomId + '&date=' + year.toString() + '-' + month.toString() + '-' + day.toString() + '&view=agendaDay&showAll=true';
      
      document.querySelector('.js-book-room-link ').href = linkUrl;

      var request = new XMLHttpRequest()
      request.open('GET', url, true);
      request.onload = function() {
        
        var data = JSON.parse(this.response)

        document.querySelectorAll('.meeting-room-hour').forEach(function(el) {
          el.disabled = false;
        });

        

        
        if (request.status >= 200 && request.status < 400) {
          document.querySelector('.table-book').classList.remove('loading');
          if (data.length) {
            data.forEach(function(hour){
              document.getElementById('hour' + hour).disabled = true;
            });
          }
          

        } else {
          console.log('error')
        }
      }

      request.send()
  }

  var $meetingHourButton = document.getElementById('button-meeting-hours');
  if ($meetingHourButton) {
    $meetingHourButton.addEventListener('click', function(e){
      e.preventDefault();
      getBookedHours();
    });
  }

  var $hourInput = document.querySelector('.js-calendar-hours');
  if ($hourInput) {
    $hourInput.addEventListener('change', function(e){
      e.preventDefault();
      getBookedHours();
    });
  }
  
  

  

  var calendarInline = document.querySelectorAll('.c-calendar-inline');
  if (calendarInline.length) {
    var id = calendarInline[0].dataset.roomId;
    var url = 'http://salongen.codewise.no/umbraco/api/nexudus/GetBookedDays?roomid=' + id;
    

    var request = new XMLHttpRequest()
    request.open('GET', url, true);
    request.onload = function() {
      
      var data = JSON.parse(this.response)

      
      
      if (request.status >= 200 && request.status < 400) {
        if (data.length) {
          flatpickr(calendarInline, {
            'disable': data,
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
        }
        

      } else {
        console.log('error')
      }
    }

    request.send()
    
    
  }
  

  // Lazysizes
  lazySizes.init();

  // Inview
  inView('.lazyload-img').on('enter', el => {
    el.classList.add('inview')
  });
  inView.threshold(0.15);

  inView('.section').on('enter', el => {
    el.classList.add('inview')
  });

  // Steps
  function steps(){
    document.querySelectorAll('.js-steps').forEach(function(el){
      var $stepWrapper = el.querySelector('.js-steps__inner');
      var $steps = el.querySelectorAll('.js-step');
      var stepNumber = $steps.length;
      var thisWidth = el.offsetWidth;
      var stepToScroll = 0;

      $steps.forEach(function(stepEl){
        stepEl.style.width = thisWidth;
        var stepToScroll = $stepWrapper.dataset.step;
        $stepWrapper.setAttribute('style','transform:translateX(' + -(thisWidth * stepToScroll) + 'px)');  
      });

      $stepWrapper.classList.add('flex');

      var $nextStep = el.querySelectorAll('.js-next-step');
      $nextStep.forEach(function(nextEl, currentStep){
        nextEl.addEventListener('click',function(e){
          e.preventDefault();
          stepToScroll = nextEl.dataset.step;
          $steps[stepToScroll].classList.remove('hidden');
          if (stepToScroll == 1) {
            setTimeout(function(){
              document.querySelector('.form').querySelector('input').focus();
            }, 500);
          }
          $stepWrapper.setAttribute('style','transform:translateX(' + -(thisWidth * stepToScroll) + 'px)');   
          $stepWrapper.dataset.step = stepToScroll;
            
        });
      });

      
    });
  }

  steps();

  window.addEventListener('resize', function(){
    steps();
  });
  // Slideshow

  // swiper
  var mySwiper = new Swiper ('.swiper-container', {

      loop: false,
      slidesPerView: 'auto',
      slidesPerGroup: 1,
      spaceBetween: 100,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },

    });



    if (document.getElementById('map')) {

      function loadScript(url, completeCallback) {
         var script = document.createElement('script'), done = false,
             head = document.getElementsByTagName("head")[0];
         script.src = url;
         script.onload = script.onreadystatechange = function(){
           if ( !done && (!this.readyState ||
                this.readyState == "loaded" || this.readyState == "complete") ) {
             done = true;
             completeCallback();

            // IE memory leak
            script.onload = script.onreadystatechange = null;
            head.removeChild( script );
          }
        };
        head.appendChild(script);
      }
      loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAQuMyoUnzuxmA41NGO1hgOpajNaLyZXnY",function () {
        loadScript('https://cdn.sobekrepository.org/includes/gmaps-markerwithlabel/1.9.1/gmaps-markerwithlabel-1.9.1.min.js',function(){

          var map;
          function initMap() {
            map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: 59.91607648496168, lng: 10.741200438082907},
              zoom: 18,
              styles: [
                {
                  "featureType": "administrative.land_parcel",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "landscape.man_made",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#d47366"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "labels.text",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "visibility": "simplified"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "labels.text",
                  "stylers": [
                    {
                      "color": "#d47366"
                    },
                    {
                      "visibility": "simplified"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.fill",
                  "stylers": [
                    {
                      "color": "#ffffff"
                    },
                    {
                      "visibility": "simplified"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "color": "#ffffff"
                    },
                    {
                      "visibility": "simplified"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.text",
                  "stylers": [
                    {
                      "visibility": "simplified"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "labels.text.fill",
                  "stylers": [
                    {
                      "color": "#d47366"
                    },
                    {
                      "visibility": "simplified"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "geometry.stroke",
                  "stylers": [
                    {
                      "visibility": "simplified"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "labels",
                  "stylers": [
                    {
                      "visibility": "off"
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "elementType": "labels.icon",
                  "stylers": [
                    {
                      "saturation": -100
                    },
                    {
                      "lightness": 40
                    }
                  ]
                },
                {
                  "featureType": "transit",
                  "elementType": "labels.text",
                  "stylers": [
                    {
                      "color": "#d47366"
                    },
                    {
                      "visibility": "simplified"
                    }
                  ]
                }
              ]
            });



                var places = [
                  {
                    position: new google.maps.LatLng(59.916391,10.741900),
                   type: 'info'
                 }, {
                    position: new google.maps.LatLng(59.915515,10.741213),
                    type: 'info'
                  }, {
                    position: new google.maps.LatLng(59.916491,10.742590),
                    type: 'info'
                  }
                ];

                // Create markers.
                for (var i = 0; i < places.length; i++) {
                  var num = i + 1;
                  var marker = new MarkerWithLabel({
                    map: map,
                    position: places[i].position,
                    icon: '/assets/ui/map-marker.png',
                    labelContent: num,
                    labelClass: 'map-label',
                    labelInBackground: true
                  });
                };
          }
          initMap();
        });
      });




    }



  function meetingRoomValidator() {
    document.querySelectorAll('.js-meeting-rooms-check').forEach(function(meetingRoomEl){
      meetingRoomEl.addEventListener('change',function(){
        var inputsHaveValue = 0;
        document.querySelectorAll('.js-meeting-rooms-check').forEach(function(meetingRoomElInside){
          if (meetingRoomElInside.value.length > 0) {
            inputsHaveValue++;
          }
        });
        if (inputsHaveValue >= 3) {
          document.querySelector('.js-meeting-rooms-button').disabled = false;
        }
      })
    })
  }

  meetingRoomValidator();


  

}

init();


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
      function closeNav(){
        var $elementsToClose = document.querySelectorAll('.js-show-nav-element');
        $elementsToClose.forEach(function(el){
          el.classList.add('hidden');
        });
        document.querySelector('.js-show-nav').classList.remove('active');
      }
      closeNav();
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




// Ticker

var mySwiper = new Swiper ('.ticker-wrapper', {

    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    direction: 'vertical',
    autoplay: {
      delay: 10000,
    },
    slideClass: 'ticker-slide'

  });


/*
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




