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

function editListener() {
  $("#edit").click(function (e) {
    e.preventDefault();

    let userObj = {
      img: "none",
      name: "Deadlift",
      description: "barbell deadlift",
      time: "10 minutes",
      cal: "370cal",
      setOne: "275x5",
      setTwo: "295x5",
      setThree: "315x5",
      instOne: "set shins close to bar",
      instTwo: "pull slack out of bar",
      instThree: "pick up bar",
    };

    console.log(userObj);
    $("#img").val(userObj.img);
    $("#name").val(userObj.name);
    $("#description").val(userObj.description);
    $("#time").val(userObj.time);
    $("#cal").val(userObj.cal);
    $("#setOne").val(userObj.setOne);
    $("#setTwo").val(userObj.setTwo);
    $("#setThree").val(userObj.setThree);
    $("#instOne").val(userObj.instOne);
    $("#instTwo").val(userObj.instTwo);
    $("#instThree").val(userObj.instThree);
  });
}

function loginListener() {
  $("#login-submit").click(function (e) {
    e.preventDefault();
    let userEmail = $("#email").val();
    let userPassword = $("#password").val();
    alert(userEmail + " " + userPassword);
  });
}

function signupListener() {
  $("#signup-submit").click(function (e) {
    e.preventDefault();
    let fname = $("#fname").val();
    let lname = $("#lname").val();
    let newUserEmail = $("#email").val();
    let newUserPassword = $("#password").val();
    alert(fname + " " + lname + " " + newUserEmail + " " + newUserPassword);
  });
}

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  if (pageID != "") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      $("#app").html(data);
      createListener();
      editListener();
      loginListener();
      signupListener();
    });
  } else {
    $.get(`pages/home/home.html`, function (data) {
      $("#app").html(data);
      createListener();
      editListener();
      loginListener();
      signupListener();
    });

    // remember to change this back
  }
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
  initURLListener();
  navListeners();
});
