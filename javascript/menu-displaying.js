$(document).ready(function() {
  $( "#menu-img" ).click(function() {
    $(this).siblings().toggle();
    $(this).rotate(90);
  });
});
