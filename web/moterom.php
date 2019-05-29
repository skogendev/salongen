<html>
<?php include('inc/head.php') ?>
<body data-barba="wrapper">

<?php
  $activePage = 'moterom';
  include('inc/header.php')
?>

<div class="main-content" data-barba="container" data-barba-namespace="home">

  <?php
    $title = 'Våre møterom';
    $includeButtons = false;
    include('components/page-intro.php');
  ?>

  <?php include('components/meeting-rooms.php') ?>

  <?php include('components/images.php') ?>

  <?php include('components/contact.php') ?>

  <?php include('components/split-articles.php') ?>


</div>

<?php include('inc/footer.php') ?>

</body>
</html>
