     
console.log("backfish");

$(document).scroll(function(){

    var scrollFromTop = $(document).scrollTop();
    
    //console.log("backfish scroll");

    var topOfFishSection = 3500;
    var bottomOfFishSection = 5600;
    totalDifferenceInPosition = bottomOfFishSection - topOfFishSection;

    if(scrollFromTop>topOfFishSection && scrollFromTop<bottomOfFishSection){
        var differenceInPosition = (bottomOfFishSection - scrollFromTop);

        // for fishies going left
        var diffPercent =(differenceInPosition/totalDifferenceInPosition)*100;

        //console.log("diffPercent: "+diffPercent);

        
        // for fishies going right
        var invertedDiffPercent = (diffPercent*-1)+100;
        
        console.log("invertedDiffPercent: "+invertedDiffPercent +"diffPercent:" +diffPercent);

        
        var speed = $(".backfish").attr("shandons-speed");
        $(".backfish").css("left",((speed*diffPercent)-10)+"%");
        
         var speed = $(".fish").attr("shandons-speed");
        $(".fish").css("left",((speed*diffPercent)-10)+"%");
        
        var speed = $(".frontfish").attr("shandons-speed");
        $(".frontfish").css("left",((speed*invertedDiffPercent)-700)+"%");


        //console.log("speed:"+speed);
    }

});



var controller = new ScrollMagic.Controller({vertical:true});

$(function () { // wait for document ready (Page has finished loading)
    
    // build tween
    var tween = new TimelineMax ()
        .add([
            TweenMax.to("#intro .star1", 1, {backgroundPosition: "0 -10%", ease: Linear.easeNone}),
            TweenMax.to("#intro .star2", 1, {backgroundPosition: "0 -100%", ease: Linear.easeNone}),
            TweenMax.to("#intro .star3", 1, {backgroundPosition: "0 -125%", ease: Linear.easeNone}),
            TweenMax.to("#intro .star4", 1, {backgroundPosition: "0 -125%", ease: Linear.easeNone})
        ]);

    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "#intro", duration: 600, offset: 450})
                    .setTween(tween)
                    .setPin("#intro")
                    .addTo(controller);
    
    
    //Factory Bubbles
    var scene = new ScrollMagic.Scene({ triggerElement: "#action" })
                .setTween("#pollutionbackground .expand", 0.5, {scale: 2.5}) // trigger a TweenMax.to tween
                .addTo(controller);
	
	var scene = new ScrollMagic.Scene({ triggerElement: "#action" })
                .setTween("#pollutionbackground .expand2", 0.5, {scale: 2.5}) // trigger a TweenMax.to tween
                .addTo(controller);
   
	var scene = new ScrollMagic.Scene({ triggerElement: "#action" })
                .setTween("#pollutionbackground .expand3", 0.5, {scale: 2.5}) // trigger a TweenMax.to tween
                .addTo(controller);
    
    
	//Raindrop
		  // build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#raindrop", duration:900}) //was .lilcloud
				  .setPin("#raindrop") // <--pin breaks everything
				  //.setTween("#raindrop", 0.5, {scale: 2.5}) // trigger a TweenMax.to tween
				 // .addIndicators({name: "1 (raindrop:1000)"}) // add indicators (requires plugin)
				  .addTo(controller);
	



});




