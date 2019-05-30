<html>
<?php include('inc/head.php') ?>
<body data-barba="wrapper">

<?php
  $activePage = 'kontakt';
  include('inc/header.php')
?>

<div class="main-content" data-barba="container" data-barba-namespace="home">

  <?php
    $subtitle = 'Kontakt';
    $title = 'Vi skreddersyr din opplevelse';
    $includeButtons = false;
    include('components/page-intro.php');
  ?>

  <?php include('components/split-map.php') ?>
  <?php include('components/contact-people.php') ?>
  <?php include('components/split-cta.php') ?>
  <?php include('components/images.php') ?>
  <?php include('inc/footer.php') ?>

</div>


</body>
</html>
