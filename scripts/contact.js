function postToGoogle() {
  var field1 = $("#nameField").val();
  var field2 = $("#emailField").val();
  var field3 = $("#commentField").val();

  $.ajax({
    url:
      "https://docs.google.com/forms/d/e/1FAIpQLSfmJKK6uWpjCUI31QxEqh5I4PH0h4HY9mTO9Qtkx5-B7GQ9eQ/formResponse?",
    data: {
      "entry.909700114": field1,
      "entry.1765100811": field2,
      "entry.505968409": field3
    },
    type: "POST",
    dataType: "xml",
    success: function(d) {},
    error: function(x, y, z) {
      $("#success-msg").show();
      $("#form").hide();
    }
  });
  return false;
}
