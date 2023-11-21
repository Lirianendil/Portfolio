const accordeonBtns = document.querySelectorAll(".accordion-button");


accordeonBtns.forEach(btn => {
  btn.addEventListener("click", () => {
   btn.parentElement.querySelector(".accordion-content").classList.toggle("open")
  })
})

$('.what-client-to-say-courusel').slick({
  centerMode: true,
  infinite: true,
  centerPadding: '0',
  slidesToShow: 1,
  prevArrow: "<img class='a-left control-c prev slick-prev' src='images/left-arrow.svg'>",
  nextArrow:"<img class='a-right control-c next slick-next' src='images/right-arrow.svg'>",
});
  

  
