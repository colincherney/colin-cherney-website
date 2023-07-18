$(document).ready(function () {
  $(".links").on("click", function () {
    if (screen.width >= 1024) {
      $(".container").prepend("<img class='rain' src='rain.png'>");
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 100px; margin-top: 50px'>"
      );
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 200px; margin-top: 50px'>"
      );
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 300px; margin-top: 50px'>"
      );
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 400px; margin-top: 50px'>"
      );
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 500px; margin-top: 50px'>"
      );
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 600px; margin-top: 50px'>"
      );
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 700px; margin-top: 50px'>"
      );
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 800px; margin-top: 50px'>"
      );
    }
    if (screen.width < 1024 && screen.width >= 768) {
      $(".container").prepend("<img class='rain' src='rain.png'>");
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 100px; margin-top: 50px'>"
      );
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 200px; margin-top: 50px'>"
      );
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 300px; margin-top: 50px'>"
      );
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 400px; margin-top: 50px'>"
      );
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 500px; margin-top: 50px'>"
      );
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 600px; margin-top: 50px'>"
      );
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 700px; margin-top: 50px'>"
      );
    }
    if (screen.width < 768) {
      $(".container").prepend("<img class='rain' src='rain.png'>");
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 100px; margin-top: 50px'>"
      );
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 200px; margin-top: 50px'>"
      );
      $(".container").prepend(
        "<img class='rain' src='rain.png' style=' margin-left: 300px; margin-top: 50px'>"
      );
    }
  });
});
