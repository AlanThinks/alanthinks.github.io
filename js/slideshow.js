let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// // Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  // Clicked Slideshow
  let i;
  let slides = document.getElementsByClassName("my-slides");
  let dots = document.getElementsByClassName("dot-indicator");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-image", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-image";

  // // Automatic SlideShow
  // let i;
  // let slides = document.getElementsByClassName("my-slides");
  // for (i = 0; i < slides.length; i++) {
  //   slides[i].style.display = "none";
  // }
  // slideIndex++;
  // if (slideIndex > slides.length) {
  //   slideIndex = 1;
  // }
  // slides[slideIndex - 1].style.display = "block";

  // setTimeout(showSlides, 2750); // Change image every 2 seconds
}
