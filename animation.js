const view = document.querySelector('.view');

function navigateToPage(pageUrl) {
  view.style.transform = 'translateX(-100%)';
  setTimeout(() => {
    window.location.href = pageUrl;
  }, 500); // Wait for the animation to finish before redirecting
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
  // Assuming there's a button or link that triggers the transition
  const nextPageButton = document.getElementById('nextPageButton');
  nextPageButton.addEventListener('click', () => {
    navigateToPage('camera.html');
  });
});