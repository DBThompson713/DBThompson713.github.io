var $form = $("form#form1"),
  url =
    "https://script.google.com/macros/s/AKfycbx_XFWIdyG-7ZXCSYbYdMB7exHTQhe2k8zwLysI2H9DoC_dbOw/exec";

$("#submit-form").on("click", function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeJSON()
  }).success();
});
