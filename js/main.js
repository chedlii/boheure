(function($) {
  //   "use strict";

  /*==================================================================
    [ Validate ]*/
  var input = $(".validate-input .input100");

  $(".validate-form").on("submit", function() {
    var check = true;

    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }

    return check;
  });

  $(".validate-form .input100").each(function() {
    $(this).focus(function() {
      hideValidate(this);
    });
  });

  function validate(input) {
    if ($(input).attr("type") == "email" || $(input).attr("name") == "email") {
      if (
        $(input)
          .val()
          .trim()
          .match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
          ) == null
      ) {
        return false;
      }
    } else {
      if (
        $(input)
          .val()
          .trim() == ""
      ) {
        return false;
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass("alert-validate");
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass("alert-validate");
  }

  /*==================================================================
    [ Simple slide100 ]*/

  $(".simpleslide100").each(function() {
    var delay = 3000;
    var speed = 1000;
    var itemSlide = $(this).find(".simpleslide100-item");
    var nowSlide = 0;

    $(itemSlide).hide();
    $(itemSlide[nowSlide]).show();
    nowSlide++;
    if (nowSlide >= itemSlide.length) {
      nowSlide = 0;
    }

    setInterval(function() {
      $(itemSlide).fadeOut(speed);
      $(itemSlide[nowSlide]).fadeIn(speed);
      nowSlide++;
      if (nowSlide >= itemSlide.length) {
        nowSlide = 0;
      }
    }, delay);
  });

  window.onload = function() {
    // localStorage.clear();
    if (
      typeof localStorage.getItem("min") !== "undefined" &&
      typeof localStorage.getItem("sec") !== "undefined" &&
      typeof this.localStorage.getItem("day") !== "undefined" &&
      typeof this.localStorage.getItem("hour") !== "undefined" &&
      localStorage.getItem("min") != null &&
      localStorage.getItem("sec") != null &&
      localStorage.getItem("day") != null &&
      localStorage.getItem("hour") != null
    ) {
      var day = localStorage.getItem("day");
      var hour = localStorage.getItem("hour");
      var min = localStorage.getItem("min");
      var sec = localStorage.getItem("sec");
    } else {
      console.log("c2");
      var day = 35;
      var hour = 18;
      var min = 30;
      var sec = "0" + 0;
    }
    var time;

    setInterval(function() {
      localStorage.setItem("day", day);
      localStorage.setItem("hour", hour);
      localStorage.setItem("min", min);
      localStorage.setItem("sec", sec);
      time = day + ":" + hour + ":" + min + " : " + sec;

      document.querySelector(".seconds").innerHTML = sec;
      document.querySelector(".minutes").innerHTML = min;
      document.querySelector(".hours").innerHTML = hour;
      document.querySelector(".days").innerHTML = day;

      //   document.getElementById("timer").innerHTML = time;
      if (sec == 00) {
        if (min != 0) {
          min--;
          sec = 59;
          if (min < 10) {
            min = "0" + min;
          }
        } else {
          if (hour == 00) {
            day--;
            hour = 24;
          } else {
            hour--;
            min = 59;
            if (hour < 10) {
              hour = "0" + hour;
            }
          }
        }
      } else {
        sec--;
        if (sec < 10) {
          sec = "0" + sec;
        }
      }
    }, 1000);
  };
})(jQuery);
