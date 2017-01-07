// document.getElementById("menu-img").addEventListener("click", myFunction);

// function showNavgation() {

// }

$(document).ready(function() {
  $( "#menu-img" ).click(function() {
    // $(this).rotate(90);
    $(this).siblings().toggle();
  });
});

$(document).ready(function() {
  $( "#menu-img" )
    .mouseover(function() {
      $(this).rotate(90);
    })
    .mouseleave(function() {
      $(this).rotate(0);
    })
});
