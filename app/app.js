function navListeners() {
  $(".bars").click(function (e) {
    $(".bars").toggleClass("active");
    $(".links").toggleClass("active");
  });

  $(".links a").click(function (e) {
    $(".bars").removeClass("active");
    $(".links").removeClass("active");
  });
}

function createListener() {
  $("#submit").click(function (e) {
    // e.preventDefault();
    let workoutImg = $("#img").val();
    let workoutName = $("#name").val();
    let workoutDesc = $("#description").val();
    let workoutTime = $("#time").val();
    let workoutCal = $("#cal").val();
    let workoutSetOne = $("#setOne").val();
    let workoutSetTwo = $("#setTwo").val();
    let workoutSetThree = $("#setThree").val();
    let workoutInstOne = $("#instOne").val();
    let workoutInstTwo = $("#instTwo").val();
    let workoutInstThree = $("#instThree").val();
    alert(
      workoutImg +
        " " +
        workoutName +
        " " +
        workoutDesc +
        " " +
        workoutTime +
        " " +
        workoutCal +
        " " +
        workoutSetOne +
        " " +
        workoutSetTwo +
        " " +
        workoutSetThree +
        " " +
        workoutInstOne +
        " " +
        workoutInstTwo +
        " " +
        workoutInstThree
    );
  });
}

$(document).ready(function () {
  navListeners();
  createListener();
});
