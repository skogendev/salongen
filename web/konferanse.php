<html>
<?php include('inc/head.php') ?>
<body data-barba="wrapper">

<?php
  $activePage = 'konferanse';
  include('inc/header.php')
?>

<div class="main-content" data-barba="container" data-barba-namespace="home">
  <?php
    $subtitle = 'Konferanse';
    $title = 'Book din neste konferanse hos oss';
    $includeButtons = false;
    include('components/page-intro.php');
  ?>

  <?php include('components/book-conference.php') ?>

  <?php include('components/images.php') ?>

  <?php include('components/split-articles.php') ?>

  <?php include('components/meeting-rooms.php') ?>

  <?php include('components/contact.php') ?>

  <?php include('components/testimonials.php') ?>

  <?php include('inc/footer.php') ?>

</div>


</body>
</html>
