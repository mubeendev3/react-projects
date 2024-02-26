// JavaScript function to scroll to the top of the page
function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Show/hide "Go to top" button based on scroll position
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    var scrollToTopBtn = document.getElementById("goToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }