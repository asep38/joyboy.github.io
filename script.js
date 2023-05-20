const timeLine = gsap.timeline();

timeLine
  .from([".bannerAddtionalBg", ".home"], {
    duration: 1.2,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  })

  .from("header", {
    delay: -0.2,
    duration: 0.8,
    y: 16,
    opacity: 0,
    ease: "power3.inOut",
  })

  .from([".content h1", ".cta"], {
    delay: -0.4,
    duration: 0.8,
    y: 80,
    opacity: 0,
    ease: "power3.out",
    stagger: {
      amount: 0.2,
    },
  })

  .from(".main img", {
    delay: -0.4,
    duration: 0.8,
    y: 80,
    opacity: 0,
    ease: "power3.out",
  })

  .from([".pagination span"], {
    duration: -0.4,
    x: 80,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: {
      amount: 0.2,
    },
  });

gsap.from([".slider", ".small_product"], {
  delay: 2.4,
  x: -60,
  skewX: 2,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
  stagger: {
    amount: 0.3,
  },
});
