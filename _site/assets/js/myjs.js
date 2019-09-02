// Scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

// Slick FX
$(document).ready(function(){
    $("#showmailbox").click(function(){
        $("#mailbox").slideToggle();
    });
    $("#showheaderhidden1").click(function(){
        $("#headerhidden1").slideToggle();
    });
    $("#showsearch").click(function(){
        $("#search").slideToggle();
    });
  
    $("#showEmployment1").click(function(){
        $("#employment1").slideToggle();
    });
  
    $("#showEmployment2").click(function(){
        $("#employment2").slideToggle();
    });
  
    $("#showEmployment3").click(function(){
        $("#employment3").slideToggle();
    });
  
  
    $("#showProject1").click(function(){
        $("#project1").slideToggle();
    });
    $("#showMinorProject1").click(function(){
        $("#minorProject1").slideToggle();
    });
  
    $("#showProject2").click(function(){
        $("#project2").slideToggle();
    });
    $("#showMinorProject2").click(function(){
        $("#minorProject2").slideToggle();
    });
  
    $("#showProject3").click(function(){
        $("#project3").slideToggle();
    });
    $("#showMinorProject3").click(function(){
        $("#minorProject3").slideToggle();
    });
  
    $("#showProject4").click(function(){
        $("#project4").slideToggle();
    });
    $("#showMinorProject4").click(function(){
        $("#minorProject4").slideToggle();
    });
  
  
  
  
    $("#showAward1").click(function(){
        $("#award1").slideToggle();
    });
  
    $("#showAward2").click(function(){
        $("#award2").slideToggle();
    });
  
    $("#showAward3").click(function(){
        $("#award3").slideToggle();
    });
  
    $("#showAward4").click(function(){
        $("#award4").slideToggle();
    });
  
    $("#showAward5").click(function(){
        $("#award5").slideToggle();
    });
  
    $("#showAward6").click(function(){
        $("#award6").slideToggle();
    });
  
    $("#showAward7").click(function(){
        $("#award7").slideToggle();
    });
  
  
  
  
});
