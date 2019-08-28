<head>
  <title>SALONGEN</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <script>
    (function () {
      var v = 3,
          div = document.createElement('div'),
          all = div.getElementsByTagName('i'),
          browser,
          isIE;

      while ( div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->', all[0]);
      v = v > 4 ? v : document.documentMode;
      if (v) {
          browser = " ie"
          for(var i = 5; i<12; i++){
              if(v < i) {
                  browser += ' lte-ie' + i;
              }else if (v > i) {
                  browser += ' gte-ie' + i;
              }else if (v == i) {
                  browser += ' ie' + i;
                  console.log('ie' + i)
              }
          }

          isIE = {
              "version" : v
          }

      } else {
          browser = ' not-ie';
          isIE = false;
      }
      document.documentElement.className += browser;
      window.ie = isIE;
  }());
  </script>
  <style type="text/css">
    @font-face {
      font-family: 'bluu';
      src: url('/assets/fonts/bluu.woff2') format('woff2'),
           url('/assets/fonts/bluu.woff2') format('woff');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'gothamnarrow';
      src: url('/assets/fonts/gotham.woff2') format('woff2'),
           url('/assets/fonts/gotham.woff2') format('woff');
      font-weight: normal;
      font-style: normal;
    }
    @font-face {
      font-family: 'gothamnarrowmedium';
      src: url('/assets/fonts/gotham-medium.woff2') format('woff2'),
           url('/assets/fonts/gotham-medium.woff2') format('woff');
      font-weight: normal;
      font-style: normal;
    }
	</style>
  <link href="/assets/css/styles.css?v=<?php echo time() ?>" rel="stylesheet" type="text/css" media="all" />
  <link rel="icon" type="image/png" href="/assets/img/favicon.png">
</head>
