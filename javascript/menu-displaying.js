$(document).ready(function() {
  $( "#menu-img" ).click(function() {
    $(this).siblings().toggle();
    $(this).rotate(90);
  });
});

// $(document).ready(function() {
//   $( "#menu-img" )
//     .mouseover(function() {
//       $(this).rotate(90);
//     })
//     .mouseleave(function() {
//       $(this).rotate(0);
//     })
// });
