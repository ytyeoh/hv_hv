// This is our custom scripts
$(document).ready(function () {
  // Disable Right Click
  document.addEventListener("contextmenu", (event) => event.preventDefault());

  $("#headerNavbarButton").click(function () {
    $(".navlist-ul").toggle();
    $(this).toggleClass("toggleclick");
    if ($(this).hasClass("toggleclick")) {
      $(".main-content").addClass("fadeanimation");
      $(".navlist-ul li").addClass("navanimation");
      $(".main-content").removeClass("fadeinanimation");
    } else {
      $(".main-content").removeClass("fadeanimation");
      $(".navlist-ul li").removeClass("navanimation");
      $(".main-content").addClass("fadeinanimation");
    }
  });

  $(".carousel").carousel({
    interval: 2000,
    pause: "false",
  });

  $("#playButton").click(function () {
    $(".carousel").carousel("cycle");
    $(this).hide();
    $("#pauseButton").show();
  });
  $("#pauseButton").click(function () {
    $(".carousel").carousel("pause");
    $(this).hide();
    $("#playButton").show();
  });
});

// Auto Reload After 11min Inactive
var refresh_rate = 660; //<-- In seconds, change to your needs
var last_user_action = 0;
var lost_focus = true;
var focus_margin = 10; // If we lose focus more then the margin we want to refresh
var allow_refresh = true; // on off sort of switch

function keydown(evt) {
  if (!evt) evt = event;
  if (evt.keyCode == 192) {
    // Shift+TAB
    toggle_on_off();
  }
} // function keydown(evt)

function toggle_on_off() {
  if (can_i_refresh) {
    allow_refresh = false;
    console.log("Auto Refresh Off");
  } else {
    allow_refresh = true;
    console.log("Auto Refresh On");
  }
}

function reset() {
  last_user_action = 0;
  console.log("Reset");
}

function windowHasFocus() {
  lost_focus = false;
  console.log(" <~ Has Focus");
}

function windowLostFocus() {
  lost_focus = true;
  console.log(" <~ Lost Focus");
}

setInterval(function () {
  last_user_action++;
  refreshCheck();
}, 1000);

function can_i_refresh() {
  if (last_user_action >= refresh_rate && lost_focus && allow_refresh) {
    return true;
  }
  return false;
}

function refreshCheck() {
  var focus = window.onfocus;

  if (can_i_refresh()) {
    //window.location.reload(); // If this is called no reset is needed
    if (
      window.location.href.indexOf("other-projects") > -1 ||
      window.location.href.indexOf("unit") > -1
    ) {
      window.location.href = "../index.html";
    } else {
      window.location.href = "index.html";
    }
    reset(); // We want to reset just to make sure the location reload is not called.
  } else {
    console.log("Timer");
  }
}
window.addEventListener("focus", windowHasFocus, false);
window.addEventListener("blur", windowLostFocus, false);
window.addEventListener("click", reset, false);
window.addEventListener("mousemove", reset, false);
window.addEventListener("keypress", reset, false);
window.onkeyup = keydown;
