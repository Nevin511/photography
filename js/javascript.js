$(document).ready(function(){
// add our header function and footer function
  $(function(){
    $("#navigation").load("navigation.html");
    $("#footer").load("footer.html");
  });

  //adding border and background color to header
  $("header").css("border-bottom", "solid yellow");
  $("header").css("background-color", "black");
  //style and align row-one
  $(".row-one").css("background-color", "black");
  $(".row-one").css("align-items", "stretch");
  $(".row-one article").css("color", "#ffffff");
  $(".row-one article").css("padding", "15px");
  $(".row-one button").css("background-color", "yellow");
  $(".row-one button").css("cursor", "pointer");
  //style and align row-two
  $(".row-two").css("justify-content", "center");
  $(".row-two button").css("cursor", "pointer");
  $(".row-two button").css("background-color", "blue");
  //style and align row-three
  $(".row-three p").css("font-weight", "bold");
  $(".row-three").css("align-items", "center");
  $(".row-three").css("background-color","#add8e6");
  $(".row-three button").css("cursor", "pointer");
  $(".row-three button").css("background-color", "green");
  //align row-four
  $(".row-four").css("text-align", "center");
  //style gallery section
  $(".gallery button").css("color", "black");
  $(".gallery button").css("background-color", "yellow");
  //style h1 and h2 and .mark
  $("h2").css("color", "#0088ff");
  $("h3").css("color", "black");
  $(".mark").css("background-color", "#c0c0c0");
  //highlight row four
  $(".row-four p").hover(function(){
    $(this).addClass("highlight");
  },
  function(){
    $(this).removeClass("highlight");
  });
  // lets add a pop up onload
  alert("Welcome to the page of photography!");
  //make header fixed even when scrolling(after 100px)
  $(function() {
  	$(window).on("scroll", function() {
     		if($(window).scrollTop() > 100) {
              $(".menu-row").addClass("scrolled-menu");
          } else {
             $(".menu-row").removeClass("scrolled-menu");
          }
      });
  });
  //click to slideup rwo-one
  $(".row-one").click(function(){
    $(this).slideUp();
  });
  //double click to hide row-two
  $(".row-two").dblclick(function(){
    $(this).hide();
  });
});
//change the style of row-three when clicking the button
function changeStyle() {
  document.getElementById("demo").style.backgroundColor='black';
  document.getElementById("demo").style.color="yellow";
  document.getElementById("demo").style.fontSize="22px";
}
// Create the 1 column layout
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.gridTemplateColumns = "repeat(1, 100% [col-start])";
  }
}
var elements = document.getElementsByClassName("gallery-column");
// next let's declare the loop variable
var i;
// Create the 4 column layout
function two() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.gridTemplateColumns = "repeat(4, 25% [col-start])";
  }
}
// Create the 8 column layout
function three() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.gridTemplateColumns = "repeat(8, 12.5% [col-start])";
  }
}
