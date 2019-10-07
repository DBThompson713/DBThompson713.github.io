function postToGoogle() {
  var field1 = $("#nameField").val();
  var field2 = $("#emailField").val();
  var field3 = $("#commentField").val();

  if (field1 == "") {
    alert("Please Fill Your Name");
    document.getElementById("nameField").focus();
    return false;
  }
  if (field2 == "") {
    alert("Please Fill Your Email");
    document.getElementById("emailField").focus();
    return false;
  }
  if (field3 == "") {
    alert("How's it going?");
    document.getElementById("commentField").focus();
    return false;
  }

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
