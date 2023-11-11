document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
  
    let currentRating = 0; // Varsayılan olarak hiçbir yıldız aktif değil
  
    stars.forEach(function (star) {
      star.addEventListener("mouseover", function () {
        const rating = parseInt(star.getAttribute("data-index"));
        setRating(rating);
      });
      star.addEventListener("mouseout", function () {
        setRating(currentRating);
      });
      star.addEventListener("click", function () {
        const rating = parseInt(star.getAttribute("data-index"));
        currentRating = rating;
      });
    });
  
    function setRating(rating) {
      stars.forEach(function (star) {
        const index = parseInt(star.getAttribute("data-index"));
        if (index <= rating) {
          star.style.color = "#1d3546";
        } else {
          star.style.color = "#6b6b6b";
        }
      });
    }
  });
  