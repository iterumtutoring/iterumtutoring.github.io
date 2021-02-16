

function myFunction() {
  var x = document.getElementById("navbar-right");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}  
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120 ) {
    document.getElementById("navbar-right").style.padding = "0px 0px 0px";
    document.getElementById("logo").style.width = "200px";
    document.getElementById("alert").style.height = "1px";
        document.getElementById("alert").style.padding = "1px";
  } 
 



  else {
    document.getElementById("navbar-right").style.padding = "54px 0px 0px";
    document.getElementById("logo").style.width = "400px";
    document.getElementById("alert").style.height = "30px";
    document.getElementById("alert").style.padding = "5px";
  }
}
