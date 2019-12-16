(function($){
let of = $('.slideBox').offset().top;
let min = $('.portpolio').offset().top;
console.log(min);


// - 이동식 버튼

// $('.btn').on('click',function(e){
// 	e.preventDefault();
// 	$('html, body').stop().animate({'scrollTop':of + 'px'}, 500);

// });


$('.rBtn').on('click',function(e){
	e.preventDefault();
	$('.slideBox').children('ul').stop().animate({marginLeft:'-100%'},1000);

});

$('.lBtn').on('click',function(e){
	e.preventDefault();
	$('.slideBox').children('ul').stop().animate({marginLeft:'-0%'},1000);

})


$('.pprBtn').on('click',function(e){
	e.preventDefault();
	$('.portpolio').children('ul').stop().animate({marginLeft:'-100%'},1000);

});

$('.pplBtn').on('click',function(e){
	e.preventDefault();
	$('.portpolio').children('ul').stop().animate({marginLeft:'-0%'},1000);

});

// -------------------------------------------------------
let i = 0;
const scroll = [];
const m = $('.scroll');

for(let j=0; j<m.length; j++){
	scroll[j] = m.eq(j).offset().top;
}
let ree = true;


$(window).on('mousewheel DOMMouseScroll', function(e){
	let d =  e.originalEvent.wheelDelta;
	if(d < 0 && ree == true){
		ree = false;
		i++; 
		if(i>=m.length-1){i=m.length-1};
	
	} else if (d>=0 && ree==true){
		ree = false;
		i--;
		if(i<=0){i=0}
	};
	$('html, body').stop().animate({'scrollTop':scroll[i] + 'px'}, 500,function(){
		ree = true;
	});
});


// -------------------------------------------------------

// $(window).on(' mousewheel DOMMouseScroll', function(e){
// 	let d =  e.originalEvent.wheelDelta;
// 	if(d > 0){
// 		// $('html, body').animate({'scrollTop':of + 'px'}, 500);
		
// 	}
// });

// -------------------------------------------------------





})(jQuery);