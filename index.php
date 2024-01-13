<!DOCTYPE html>
<html lang="es">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Document</title>
   <link rel="stylesheet" href="assets/css/styles.css">
   <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>

</head>
<body>

   <main>

      <div id="parchis">
         <?php
            require("views/table.php");
            require("views/player.php");
         ?>
      </div>

   </main>

   <audio id="audio" style="display:none" src="assets/audio/SonidoComer.mp3"  ></audio>

<script src="assets/js/script.js"></script>
</body>
</html>