document.addEventListener('DOMContentLoaded', (event) => {
    const card = document.getElementById('card');
    const tapMe = document.getElementById('tap-me');
    const hyperlink = document.getElementById('hyperlink');
  
    card.addEventListener('click', function() {
      const isFlipped = this.style.transform === 'rotateY(180deg)';
      this.style.transform = isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)';
  
      if (isFlipped) {
        tapMe.style.animation = 'bounce 2s infinite';  // Resume animation
      } else {
        tapMe.style.animation = 'none';  // Stop animation
      }
    });
  
    hyperlink.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });
  
