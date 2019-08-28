<head>
  <title>SALONGEN</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <script>
  (function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        var ieV = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        document.querySelector('body').className += ' ie-old';
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        var ieV = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        document.querySelector('body').className += ' ie11';
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // IE 12 (aka Edge) => return version number
      var ieV = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        document.querySelector('body').className += ' edge';
    }

    // other browser
    return false;
  })();

  detectIE();
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
