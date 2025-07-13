gsap.registerPlugin(ScrollTrigger, ScrambleTextPlugin);

const stickyImage = document.getElementById('sticky-image');
const changeImageSection = document.getElementById('section04');
const prevImage = document.getElementById('prev-image');

gsap.set('#prev-image', { scale: 1.5 });

const changeImage = () => {
  prevImage.src = './img/ethereal-flower.jpeg';
};

const resetImage = () => {
  prevImage.src = './img/black-rose.jpeg';
};

window.addEventListener('scroll', () => {
  const stickyImageRect = stickyImage.getBoundingClientRect();
  const changeImageSectionRect = changeImageSection.getBoundingClientRect();

  if (changeImageSectionRect.top <= stickyImageRect.top) {
    changeImage();
  } else {
    resetImage();
  }
});

const scrambleText = () => {
  gsap.to('#current-text', {
    duration: 1,
    scrambleText: 'CURRENT',
  });
};

const nextScrambleText = () => {
  gsap.to('#next-text', {
    duration: 1,
    scrambleText: 'NEXT',
  });
};

ScrollTrigger.create({
  trigger: '#section04',
  start: 'top-=40% 80%',
  onEnter: () => {
    scrambleText();
    gsap.to('#prev-image', {
      scale: 1,
      duration: 1.2,
      ease: 'power2.out',
    });
  },
  onComplete: () => {
    gsap.set('#prev-image', { scale: 1 });
  },
  // markers: true,
});

ScrollTrigger.create({
  trigger: '#section05',
  start: 'top-=40% 80%',
  onEnter: () => {
    nextScrambleText();
    gsap.to('#prev-image', {
      scale: 1,
      duration: 1.2,
      ease: 'power2.out',
    });
  },
  onComplete: () => {
    gsap.set('#prev-image', { scale: 1 });
  },
  // markers: true,
});
