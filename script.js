document.addEventListener('DOMContentLoaded', (event) => {
    const card = document.getElementById('card');
    const hyperlink = document.getElementById('hyperlink');
  
    card.addEventListener('click', function() {
      this.style.transform = this.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    });
  
    // Prevent the card from flipping when hyperlink is clicked
    hyperlink.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });
  