<html data-scroll>
<?php include('inc/head.php') ?>
<body data-barba="wrapper">

<?php
  $activePage = 'index';
  include('inc/header.php')
?>

<div class="main-content" data-barba="container" data-barba-namespace="home">


<div class="section py-0 overflow-hidden" style="padding: 0;">
  <div class="flex flex-wrap">      
    <div class="w-full lg:flex-1 relative mob-order-2">
      <div class="py-8 p-2 lg:px-24 text-center lg:center-y relative mx-auto">
        <h1 class="heading-xl mb-8 js-load-stagger lg:pt-20">404</h1>
        <p>Sorry! Siden finnes ikke. Kanskje du vil:</p>
        <div class="js-load-stagger mt-8 text-center">
          <a href="/moterom.php" class="button mb-4">Booke møterom</a>
          <a href="/konferanse.php" class="button">Booke konferanse</a>
        </div>
      </div>
    </div>
    <div class="w-full lg:flex-1 mob-order-1 mob-max-h-50vh intro-img">
      <video class="inview lazyload-img lazyload" muted autoplay loop playsinline poster="/assets/tmp24.jpg">
        <source src="/assets/video/introvideo.mp4" type="video/webm">
        <source src="/assets/video/introvideo.mp4" type="video/mp4">
        <img src="/assets/tmp24.jpg">
      </video>
      <!--<img data-src="/assets/img/tmp24.jpg" class="inview lazyload-img lazyload">-->
    </div>  
  </div>
</div>


  <?php include('inc/footer.php') ?>

</div>


</body>
</html>
