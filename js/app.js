$(document).ready(function() {
  $(".hulk-ryu, .ryu").mouseenter(function() {
    //console.log("mouse enter");
    $(".ryu-cool").hide();
    $(".ryu-still").hide();
    $(".ryu-ready").show();
  })
  .mouseleave(function() {
    //console.log("mouse leave");
    $(".ryu-cool").hide();
    $(".ryu-ready").hide();
    $(".ryu-throwing").hide();
    $(".ryu-still").show();
  })
  .mousedown(function() {
  	//console.log("mouse down");
  	// play hadouken sound
  	$(".ryu-still").hide();
  	$(".ryu-cool").hide();
  	$(".ryu-ready").hide();
  	$(".ryu-throwing").show();
  	$(".hadouken").finish().show()
  	.animate(
  		{"left": "1020px"}, 
  		500, 
  		function() {
  			$(this).hide();
  			$(this).css("left", "520px");
  		})
  	$(".hulk-hadouken").finish().show()
  	.animate(
  		{"left": "180px"}, 
  		500, 
  		function() {
  			$(this).hide();
  			$(this).css("left", "680px");
  		})
  	playHadouken();
  	// animate hadouken to the right of the screen
  })
  .mouseup(function() {
  	//console.log("mouse up");
  	$(".ryu-throwing").hide();
  	$(".ryu-cool").hide();
  	$(".ryu-ready").show();
  })
  function playHadouken () {
  	$("#hadouken-sound")[0].volume = 0.5;
  	$("#hadouken-sound")[0].load();
  	$("#hadouken-sound")[0].play();
  }
  $(document).keydown(function(event) {
  	if (event.keyCode==88)
  	{
  		//console.log("x keydown");
  		$(".ryu-still").hide();
    	$(".ryu-ready").hide();
    	$(".ryu-throwing").hide();
  		$(".ryu-cool").show();
  	}
  })
  .keyup(function(event) {
  	if (event.keyCode==88)
  	{
  		//console.log("x keyup");
  		$(".ryu-cool").hide();
  		$(".ryu-throwing").hide();
  		if($(".ryu").is(":hover"))
  		{
  			$(".ryu-ready").show();
  		}
  		else
  		{
  			$(".ryu-still").show();
  		}
  	}
  });
});