$(document).ready(function() {
  $("#one").click(function() {
    $(this).toggleClass("swingout");
    $(".link-fade").toggleClass("main-link-fade");
    $(".first-link").toggleClass("first-fade");
    $(".second-link").toggleClass("second-fade");
  });
});

$(document).ready(function() {
  $("#two").click(function() {
    $(this).toggleClass("swingout");
    $(".link-fade-two").toggleClass("main-link-fade");
    $(".first-link-two").toggleClass("first-fade");
    $(".second-link-two").toggleClass("second-fade");
    $(".third-link-two").toggleClass("third-fade");
  });
});

$(document).ready(function() {
  $("#three").click(function() {
    $(this).toggleClass("swingout");
    $(".first-link-three").toggleClass("main-link-fade");
    $(".first-link-three").toggleClass("first-fade");
  });
});
