$(document).ready(function() {
  $("#one").click(function() {
    $(this).hasClass("swingout")
      ? $(".shader").removeClass("shaded")
      : $(".shader").addClass("shaded");

    $(this).toggleClass("swingout");
    $(".link-fade").toggleClass("main-link-fade");
    $(".first-link").toggleClass("first-fade");
    $(".second-link").toggleClass("second-fade");
    // TWO
    $("#two").removeClass("swingout");
    $(".link-fade-two").removeClass("main-link-fade");
    $(".first-link-two").removeClass("first-fade");
    $(".second-link-two").removeClass("second-fade");
    $(".third-link-two").removeClass("third-fade");
    // THREE
    $("#three").removeClass("swingout");
    $(".first-link-three").removeClass("main-link-fade");
    $(".first-link-three").removeClass("first-fade");
  });
});

$(document).ready(function() {
  $("#two").click(function() {
    $(this).hasClass("swingout")
      ? $(".shader").removeClass("shaded")
      : $(".shader").addClass("shaded");

    $(this).toggleClass("swingout");
    $(".link-fade-two").toggleClass("main-link-fade");
    $(".first-link-two").toggleClass("first-fade");
    $(".second-link-two").toggleClass("second-fade");
    $(".third-link-two").toggleClass("third-fade");
    // ONE
    $("#one").removeClass("swingout");
    $(".link-fade").removeClass("main-link-fade");
    $(".first-link").removeClass("first-fade");
    $(".second-link").removeClass("second-fade");
    //THREE
    $("#three").removeClass("swingout");
    $(".first-link-three").removeClass("main-link-fade");
    $(".first-link-three").removeClass("first-fade");
  });
});

$(document).ready(function() {
  $("#three").click(function() {
    $(this).hasClass("swingout")
      ? $(".shader").removeClass("shaded")
      : $(".shader").addClass("shaded");

    $(this).toggleClass("swingout");
    $(".first-link-three").toggleClass("main-link-fade");
    $(".first-link-three").toggleClass("first-fade");
    // ONE
    $("#one").removeClass("swingout");
    $(".link-fade").removeClass("main-link-fade");
    $(".first-link").removeClass("first-fade");
    $(".second-link").removeClass("second-fade");
    // TWO
    $("#two").removeClass("swingout");
    $(".link-fade-two").removeClass("main-link-fade");
    $(".first-link-two").removeClass("first-fade");
    $(".second-link-two").removeClass("second-fade");
    $(".third-link-two").removeClass("third-fade");
  });
});

// Name click

$(document).ready(function() {
  $("#name").click(function() {
    $("#one").hasClass("swingout")
      ? $(".shader").removeClass("shaded")
      : $(".shader").addClass("shaded");

    $(this).toggleClass("name-fly");
    $("#tag").toggleClass("tag-fly");
    $(".main-page-bio").toggleClass("main-page-bio-fadein");
    $(".swinger").toggleClass("dissapear");
    $(".techs").toggleClass("techs-fadein");
    // $(".first-link-three").toggleClass("first-fade");
    // ONE
    $("#one").removeClass("swingout");
    $(".link-fade").removeClass("main-link-fade");
    $(".first-link").removeClass("first-fade");
    $(".second-link").removeClass("second-fade");
    // TWO
    $("#two").removeClass("swingout");
    $(".link-fade-two").removeClass("main-link-fade");
    $(".first-link-two").removeClass("first-fade");
    $(".second-link-two").removeClass("second-fade");
    $(".third-link-two").removeClass("third-fade");
    // THREE
    $("#three").removeClass("swingout");
    $(".first-link-three").removeClass("main-link-fade");
    $(".first-link-three").removeClass("first-fade");
  });
});

$(document).ready(function() {
  $(".info-click").click(function() {
    $("#one").hasClass("swingout")
      ? $(".shader").removeClass("shaded")
      : $(".shader").addClass("shaded");

    $("#name").toggleClass("name-fly");
    $("#tag").toggleClass("tag-fly");
    $(".main-page-bio").toggleClass("main-page-bio-fadein");
    $(".swinger").toggleClass("dissapear");
    $(".techs").toggleClass("techs-fadein");
    // $(".first-link-three").toggleClass("first-fade");
    // ONE
    $("#one").removeClass("swingout");
    $(".link-fade").removeClass("main-link-fade");
    $(".first-link").removeClass("first-fade");
    $(".second-link").removeClass("second-fade");
    // TWO
    $("#two").removeClass("swingout");
    $(".link-fade-two").removeClass("main-link-fade");
    $(".first-link-two").removeClass("first-fade");
    $(".second-link-two").removeClass("second-fade");
    $(".third-link-two").removeClass("third-fade");
    // THREE
    $("#three").removeClass("swingout");
    $(".first-link-three").removeClass("main-link-fade");
    $(".first-link-three").removeClass("first-fade");
  });
});
