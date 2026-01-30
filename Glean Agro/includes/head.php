
<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="utf-8"> 
    <meta name="keywords" content="gleanagro, gleanagrong, gleanagro nigeria, glean agro">
    <meta name="description" content="Glean agro is a leading agricultural solutions provider in Nigeria. Discover Gleanagro NG's innovative farming tools and services.">
    
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <title><?php echo defined('TITLE') && TITLE ? TITLE : 'Glean Agro'; ?></title>
    
    <?php $cache_id = 'v1.0.3'; ?>
    
    <?php
        $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https://" : "http://";
        $canonicalUrl = $protocol . $_SERVER['HTTP_HOST'] . strtok($_SERVER['REQUEST_URI'], '?'); // removes query strings
    ?>
    <!-- Canonical Link -->
    <link rel="canonical" href="<?php echo $canonicalUrl; ?>" />

    <!-- Favicon -->
    <link rel="icon" alt="Glean Agro logo" type="image/png" href="./assets/img/favicon_io/android-chrome-512x512.png">
    
    <!-- Bootstrap CDN -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    
    <!-- Fontawesome icons-->
    <link rel="stylesheet" href="./dist/css/all.css?<?php echo $cache_id; ?>">

    <!-- Owl-carousel -->
    <link rel="stylesheet" href="./dist/css/owl.carousel.min.css?<?php echo $cache_id; ?>">
    
    <!-- Owl-carousel theme-->
    <link rel="stylesheet" href="./dist/css/owl.theme.default.min.css?<?php echo $cache_id; ?>">
    
    <!-- Animation on scroll css-->
    <link rel="stylesheet" href="./dist/css/aos.css?<?php echo $cache_id; ?>">
    <!-- Glightbox -->
    <link rel="stylesheet" href="./dist/css/glightbox.min.css?<?php echo $cache_id; ?>">

    <!-- Custom style-->
    <link rel="stylesheet" href="./dist/css/main.css?<?php echo $cache_id; ?>">
    
    <!-- SweetAlert-->
    <script src="./dist/sweetalert2/sweetalert.all.min.js?<?php echo $cache_id; ?>"></script>
</head>
<body>