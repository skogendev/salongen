<html>
<?php include('inc/head.php') ?>
<body data-barba="wrapper">

<?php
  $activePage = 'mat-drikke';
  include('inc/header.php')
?>

<div class="main-content" data-barba="container" data-barba-namespace="home">

  <?php
    $title = 'Med fokus på råvarer';
    $includeButtons = true;
    include('components/page-intro.php');
  ?>

  <?php include('components/split-intro-text-with-image.php') ?>

  <?php include('components/food.php') ?>

  <?php include('components/split-cta.php') ?>

  <?php include('components/split-intro-text-with-image-reverse.php') ?>

  <?php include('components/contact.php') ?>

  <?php include('inc/footer.php') ?>

</div>


</body>
</html>
