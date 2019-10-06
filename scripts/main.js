$(document).ready(function() {
  // ---------------------------------------SIDE NAVS
  // SWINGER 1
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
    $(".second-link-three").removeClass("second-fade");
  });
  // SWINGER 2
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
    $(".second-link-three").removeClass("second-fade");
  });
  // SWINGER 3
  $("#three").click(function() {
    $(this).hasClass("swingout")
      ? $(".shader").removeClass("shaded")
      : $(".shader").addClass("shaded");

    $(this).toggleClass("swingout");
    $(".first-link-three").toggleClass("main-link-fade");
    $(".first-link-three").toggleClass("first-fade");
    $(".second-link-three").toggleClass("second-fade");
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
  // --------------------------------------------- HOME PAGE BIO FLY UP
  $("#name").click(function() {
    $(this).hasClass("name-fly")
      ? $(".shader").removeClass("shaded")
      : $(".shader").addClass("shaded");

    $(this).toggleClass("name-fly");
    $("#tag").toggleClass("tag-fly");
    $(".main-page-bio").toggleClass("main-page-bio-fadein");
    $(".swinger").toggleClass("dissapear");
    $(".techs").toggleClass("techs-fadein");
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
    $(".second-link-three").removeClass("second-fade");
  });
  // -----------------------------------------------INFO SECTION
  $(".info-click").click(function() {
    $("#one").hasClass("swingout")
      ? $(".shader").removeClass("shaded")
      : $(".shader").addClass("shaded");

    $("#name").toggleClass("name-fly");
    $("#tag").toggleClass("tag-fly");
    $(".main-page-bio").toggleClass("main-page-bio-fadein");
    $(".swinger").toggleClass("dissapear");
    $(".techs").toggleClass("techs-fadein");
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
  // --------------------------------------------HAT ROLL
  $(".hatword").click(function() {
    $("#hato").hasClass("see-the-hat")
      ? $("#hato")
          .removeClass("see-the-hat")
          .addClass("see-the-hat-reverse")
      : $("#hato")
          .removeClass("see-the-hat-reverse")
          .addClass("see-the-hat");
  });
});
