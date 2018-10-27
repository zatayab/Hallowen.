$ (document).ready(function(){
	
	$("img").hide();
	
    $("h2").click(function(){
	$("p").slideToggle();
	$("body").css("background-color", "#bbff7f");
	$("h2").css("color", "red");
	});
	$("p").click(function() {
	var date= new Date($.now()) ;
	$("p").html(date);
	$("img").show();
	});

	
});