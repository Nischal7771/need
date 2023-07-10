// Animation configuration
const animationConfig = {
  duration: 1000,
  easing: 'easeInOutSine',
};

// Function to animate the whole page
function animatePage() {
  // Animate the navigation bar
  anime({
    targets: '#navbar',
    translateY: [-50, 0],
    opacity: [0, 1],
    ...animationConfig,
  });

  // Animate each section
  anime({
    targets: 'section',
    translateY: [50, 0],
    opacity: [0, 1],
    delay: anime.stagger(200),
    ...animationConfig,
  });

  // Animate each element inside the sections
  anime({
    targets: 'section *',
    translateY: [50, 0],
    opacity: [0, 1],
    delay: anime.stagger(100),
    ...animationConfig,
  });
}
 
  // Call the animatePage function when the page finishes loading
  window.addEventListener('load', animatePage);