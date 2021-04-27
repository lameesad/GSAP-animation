var tlanimation = new TimelineMax();

tlanimation
  .to(".circle", 1, { x: 100, ease: Back.easeOut })
  .to(".square", 0.5, { x: 100, ease: Elastic.easeIn })
  .to(".rectangle", 1, { x: 100, ease: Bounce.easeIn });
