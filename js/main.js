var tlshapes = new TimelineMax();

tlshapes.staggerFrom(".shape", 0.5, { x: 50, y: 50, opacity: 0 }, 0.2);

$(".playButton").click(function () {
  tlshapes.play();
});
$(".pauseButton").click(function () {
  tlshapes.pause();
});
$(".resumeButton").click(function () {
  tlshapes.resume();
});
$(".reverseButton").click(function () {
  tlshapes.reverse();
});
$(".slowButton").click(function () {
  tlshapes.timeScale(0.5);
});
$(".fastButton").click(function () {
  tlshapes.timeScale(5);
});
$(".seekButton").click(function () {
  tlshapes.seek(2);
});
$(".progressButton").click(function () {
  tlshapes.progress(0.5);
});
