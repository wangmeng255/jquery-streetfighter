$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    //console.log("mouse enter");
    $(".ryu-still").hide();
    $(".ryu-ready").show();
  })
  .mouseleave(function() {
    //console.log("mouse leave");
    $(".ryu-still").show();
    $(".ryu-ready").hide();
  });
});