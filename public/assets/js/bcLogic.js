
function start() {
    console.log("Start works");
};

start();

$(function() {
    $(".getstartedbutton").on("click", function(event) {
      event.preventDefault();
      console.log("5");
      $.ajax({
          url:"/clickpostbutton",
          type:"post",
      }).then(function() {
        window.location.href = '/postJobs';
      })
    });

    $(".searchprojects").on("click", function(event) {
        event.preventDefault();
        console.log("6");
        $.ajax({
            url:"/clickbuttonsearch",
            type:"post",
        }).then(function() {
          window.location.href = '/seeJobs';
        })
      });
  });

  function jobRedirect() {
        $.ajax({
            url: "/clickpostjob",
            type: "POST",
        }).then(function(){
            window.location.href = "/seeJobs";
        });
    };