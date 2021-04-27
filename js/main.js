var tlanimation = new TimelineMax();

tlanimation
  .to(".circle", 2, { x: 100 })
  .to(".square", 0.5, { x: 100 })
  .to(".rectangle", 1, { x: 100 });
