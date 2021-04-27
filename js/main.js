var tlshapes = new TimelineMax();
//label fired at same time animation
tlshapes
  .to(".circle", 1, { x: 100 }, 5, "circleRectangle")
  .to(".square", 1, { x: 100 }, "-=0.25")
  .to(".rectangle", 1, { x: 100 }, "circleRectangle+=1");
