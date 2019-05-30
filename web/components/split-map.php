<div class="section bg-split bg-split-right">
  <div class="container mt-32 bg-segl">
    <div class="u-flexgrid-g">
      <div class="col-10 lg:col-5 xl:col-5 mb-16 pt-32">
        <div class="heading-sm text-eple mb-4">Kontakt</div>
        <h2 class="heading-lg">Finn frem</h2>
        <hr class="hr-small mx-0">
        <ol class="list-map">
          <li>
            Ibsenkvartalet<br>
            C.J. Hambros plass 2 <br>
            <a href="#" class="heading-sm text-eple no-underline">Vis i kart</a>
          </li>
          <li>
            Nærmeste holdeplass: Tinghuset<br>
            <a href="#" class="heading-sm text-eple no-underline">Gå til reiseplanlegger</a>
          </li>
          <li>
            Parkering i kjelleren av Ibsenkvartalet<br>
            <a href="#" class="heading-sm text-eple no-underline">Mer info</a>
          </li>
        </ol>




      </div>
    </div>
    <div class="h-full w-1/2 bg-black absolute pin-t pin-r">
      <div id="map" class="w-full h-full"></div>
    </div>
  </div>
</div>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQuMyoUnzuxmA41NGO1hgOpajNaLyZXnY"></script>
<script src="https://cdn.sobekrepository.org/includes/gmaps-markerwithlabel/1.9.1/gmaps-markerwithlabel-1.9.1.min.js"></script>
<script>
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
          console.log(i);
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
</script>
