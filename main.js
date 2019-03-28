$(function() {
  function beforeGenerate() {
    $(".after-generate").hide();
    $(".before-generate").show();
  }

  function afterGenerate() {
    $(".before-generate").hide();
    $(".after-generate").show();
  }

  function update() {
    $("#user img").attr("src", "https://www.phantauth.ga/icon/empty.png");
    $.ajax({
      url: "https://phantauth.ga/user/",
      dataType: "json",
      success: function(user) {
        rivets.bind($("#user"), { user: user });
        afterGenerate();
      }
    });
  }

  function generate(event) {
    event.preventDefault();
    update();
    return false;
  }

  $("#generate").click(generate);
  beforeGenerate();
});
