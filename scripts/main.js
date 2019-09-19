$(document).ready(function() {
  $("#one").click(function() {
    $(this).toggleClass("swingout");
    $(".link-fade").toggleClass("main-link-fade");
    $(".first-link").toggleClass("first-fade");
    $(".second-link").toggleClass("second-fade");
    $(".shader").toggleClass("shaded");
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
    $(this).toggleClass("swingout");
    $(".link-fade-two").toggleClass("main-link-fade");
    $(".first-link-two").toggleClass("first-fade");
    $(".second-link-two").toggleClass("second-fade");
    $(".third-link-two").toggleClass("third-fade");
    $(".shader").toggleClass("shaded");
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
    $(this).toggleClass("swingout");
    $(".first-link-three").toggleClass("main-link-fade");
    $(".first-link-three").toggleClass("first-fade");
    $(".shader").toggleClass("shaded");
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

// start of transition

$(document).ready(function() {
  $(".animsition").animsition({
    inClass: "zoom-in-lg",
    outClass: "zoom-out-lg",
    inDuration: 1500,
    outDuration: 800,
    linkElement: ".animsition-link",
    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
    loading: true,
    loadingParentElement: "body", //animsition wrapper element
    loadingClass: "animsition-loading",
    loadingInner: "", // e.g '<img src="loading.svg" />'
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ["animation-duration", "-webkit-animation-duration"],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay: false,
    overlayClass: "animsition-overlay-slide",
    overlayParentElement: "body",
    transition: function(url) {
      window.location.href = url;
    }
  });
});
