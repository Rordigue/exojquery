// Ex 1 hide les éléments p
//$("p").hide();

// Ex 2 hide la div avec id test
$("#test").hide();

// Ex 3 hide la div avec la classe test
$(".test").hide();

// Ex 4 hide tout les éléments
//$("*").hide();

// Ex 5 hide tout les éléments href
$("[href]").hide();

// Ex 6 hide les lignes impaires dans un tableau
$("tr:odd").hide();

// Ex 7 hide les p sur le click
$("p").click(function(){
    $(this).hide();
});

// Ex 8 hide les p sur le doubleclick
$("p").dblclick(function(){
  $(this).hide();
});

// Ex 9 hide les ps sur le mouse hover
$("p").mouseenter(function(){
  $(this).hide();
});

// Ex 10 hide input sur l'appui clavier
$("input").keypress(function(){
  $(this).hide();
});

// Ex 11 event click sur les p
$("p").on("click", function(){
  $(this).hide();
});

// Ex 12 function hide p
$("p").click(function(){
    $(this).hide();
});

// Ex 13 hide on click with defined speed
$("p").click(function(){
    $(this).hide("slow");
});

// Ex 14 show a p element on click
$("button").click(function(){
    $("p").show();
});

// Ex 15 show / hide p on click
$("button").click(function(){
    $("p").toggle();
});

// Ex 16 fade out div
$("div").fadeOut();

// Ex 17 fade out div with defined speed
$("div").fadeOut("slow");

// Ex 18 fade out div with defined speed and defined opacity
$("div").fadeTo("slow", 0.2);

// Ex 19 fade toggle on click with speed
$("button").click(function(){
  $("div").fadeToggle(1000);
});

// Ex 20 slide up a div
$("div").slideUp();

// Ex 21 slide up a div with speed
$("div").slideUp("slow");

// Ex 22 slide down a div
$("div").slideDown();

// Ex 23 toggle between sliding up and down a div
$("button").click(function(){
    $("div").slideToggle();
});

// Ex 24 move a div 250px to right
$("div").animate({left: '250px'}); // what the actual fuck

// Ex 25 set the height of a div with animate
$("div").animate({height:'500px'});

// Ex 26 set css properties
$("div").animate({
    opacity: '0.4',
    height: '500px',
    width: '500px'
});

// Ex 27 set the font size of a div
$("div").animate({fontSize: '100px'}, "slow");

// Ex 28 stop an animation effect
$("div").stop();

// Ex 29 return the text content of a div
$("div").html();

// Ex 30 return the value of an input
$("input").val();

// Ex 31 return the url address of a link
$("a").attr("href");

// Ex 32 change the text of a div
$("div").text("Hello World");

// Ex 33 change the value of an inout field
$("input").val("John Doe");

// Ex 34 change the value of an img src

$("img").attr("src", "myimage.jpg")