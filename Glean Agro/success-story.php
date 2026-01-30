<?php
define('TITLE', 'Success Story | Glean Agro');
if (session_status() == PHP_SESSION_NONE) {
  session_start();
}
include("./includes/head.php");
include("./includes/navbar.php");
include("./code.php");
?>
<!-- =========X============ Success story =========X============ -->
<main>
  <section class="">
    <h1 class="text-center text-secondary_custom mt-3">Our Success Story </h1>
    <div class="heading-line"></div>
    <p class="m-2 text-center">
      Discover the inspiring journey of our local farmers, whose dedication and hard work have transformed their dreams into a thriving success story.
    </p>
    <!-- The expanding image container -->
    <div class="containers p-2">
      <!-- Close the image -->
      <span onclick="this.parentElement.style.display='none'" class="closebtn">&times;</span>

      <!-- Expanded image -->
      <!-- <div class="img-wrapper"> -->
      <img id="expandedImg" style="width:100%;">
      <!-- </div> -->

      <!-- Image text -->
      <div id="imgtext" class="m-3"></div>
    </div>
    <!-- <div class="flex-row image-controls"> -->
    <div class="mt-5">
      <!-- The grid: four columns -->
      <div class="row p-3">
        <?php
        $img_caption = array(
          1 => "Glean partner farmer land preparation for 2023/2024 season",
          3 => "Wheat farmers training session with Glean Agro field officer",
          4 => "Glean Agro field officer conducting farmer onboarding discuss",
          5 => "Glean partner farmer at input distribution for 2023/2024 wheat dry season",
          6 => "Glean partner farmer at input distribution for 2023/2024 wheat dry season",
          7 => "Glean partner farmer at input Distribution for 2023/2024 wheat dry season",
          8 => "Glean partner farmer at input Distribution for 2023/2024 wheat dry season",
          9 => "Glean Agro field officer and farmer partners after agronomy training",
          10 => "Glean partner farmer at input distribution for 2023/2024 wheat dry season",
          11 => "Early emergence of wheat under irrigation grown during 2023/2024 wheat dry season",
          12 => "Early emergence of wheat grown during 2023/2024 wheat dry season",
          14 => "Input distribution for 2023/2024 wheat dry season",
          16 => "Land preparation for 2023/2024 wheat dry season",
          21 => "Glean Agro field officer conducting field inspection",
          23 => "Glean Agro field officer conducting field inspection",
          25 => "Glean Agro field officer conducting field inspection",
          27 => "What at Anthesis stage during 2023/2024 wheat dry season",
          28 => "Happy Glean farmer partner irrigating his field",
          29 => "What at grain filling stage during 2023/2024 wheat dry season",
          30 => "Wheat at early flowering and flag leaf initiation during 2023/2024 wheat dry season",
          32 => "Happy Children excited about the harvest at Glean Pilot Soybean Farm"
        );

        $file = scandir(__DIR__ . "/assets/img/success_story/"); // gets files from dir
        $f = array_diff($file, ['.', '..']); // filters the array to remove . and ..
        foreach ($f as $img) {
          $extension = pathinfo($img, PATHINFO_EXTENSION);
          $img_with_no_extn = basename($img, '.' . $extension);
          echo '<div class="column">';
          echo "<img class='img-shadow' src='./assets/img/success_story/$img' alt='$img_caption[$img_with_no_extn]' onclick='myFunction(this);'>";
          echo '</div>';
        }
        ?>
      </div>
    </div>
    <!-- </div> -->
  </section>
  <!-- =========X============ /Success story =========X============ -->

  <?php include("./includes/quiklinks.php"); ?>
</main>
<!-- =========X============ /Main site section =========X============ -->

<?php
include("./includes/scripts.php");
include("./includes/footer.php");
?>