<?php
define('TITLE', 'Media | Glean Agro');
include("./includes/head.php");
include("./includes/navbar.php");
?>
<!-- ===================== Main site section ===================== -->
<main>
    <!-- <div class="item-video">
            <iframe class="owl-video" width="420" height="315" src="https://www.youtube.com/watch?v=JpxsRwnRwCQ">
            </iframe>
         </div> -->
    <!-- =========X============ Media and Reports =========X============ -->
    <section class="news">
        <h2 class="mt-1 mb-1">Media and Reports</h2>
        <div class="owl-theme" id="owl-carousel">
            <div class="item-video" data-merge="3"><a class="owl-video" href="https://vimeo.com/23924346"></a></div>
            <div class="item-video" data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=JpxsRwnRwCQ"></a></div>
            <div class="item-video" data-merge="2"><a class="owl-video" href="https://www.youtube.com/watch?v=FBu_jxT1PkA"></a></div>
            <div class="item-video" data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=oy18DJwy5lI"></a></div>
            <div class="item-video" data-merge="2"><a class="owl-video" href="https://www.youtube.com/watch?v=H3jLkJrhHKQ"></a></div>
            <div class="item-video" data-merge="3"><a class="owl-video" href="https://www.youtube.com/watch?v=g3J4VxWIM6s"></a></div>
            <div class="item-video" data-merge="1"><a class="owl-video" href="https://www.youtube.com/watch?v=0fhoIate4qI"></a></div>
            <div class="item-video" data-merge="2"><a class="owl-video" href="https://www.youtube.com/watch?v=EF_kj2ojZaE"></a></div>
        </div>
    </section>
    <!-- =========X============ /Media and Reports =========X============ -->

    <?php include("./includes/quiklinks.php"); ?>
</main>
<!-- =========X============ /Main site section =========X============ -->

<?php
include("./includes/scripts.php");
include("./includes/footer.php");
?>