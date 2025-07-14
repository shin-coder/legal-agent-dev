gsap.registerPlugin(ScrollTrigger);

const slideTexts = document.querySelectorAll(
  '.slide-text, .slide-text-2, .slide-text-3'
);

slideTexts.forEach((text, index) => {
  gsap.to(text, {
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    duration: 1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: text,
      start: 'top 80%',
      end: 'bottom 20%',
    },
  });
});
