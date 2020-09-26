$(document).ready(function(){
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var par = document.getElementById("inside_pagemax");
      var hash = this.hash.substring(1);
      var el = document.getElementById(hash);
      var wd = 0;
      if (hash != "page_top") wd = par.offsetHeight * 3/4;
      $(par).animate({scrollTop:el.offsetTop+wd,},500);
      console.log(el);
    });
  });

  var navbar = document.getElementById("inside_navbar");
  $("#inside_pagemax").scroll(function(){
    if( $("#inside_pagemax").scrollTop() > (window.innerHeight - document.getElementById("sticky-navbar").offsetHeight) ) {
      $("#sticky-navbar").css('background', 'rgb(70, 65, 120)');
      $("#sticky-navbar").css('border-bottom', 'none');
    }
    else {$("#sticky-navbar").css('background', ''); $("#sticky-navbar").css('border-bottom', '');
  }
  });
  $(".navbutton").click(function(){
    if(!navbar.classList.contains("visible")) {
      navbar.classList.add("visible");
    }
    else {
      navbar.classList.remove("visible");
    }
  });
});
