$(function () {
	$('.menu__list-link .open').on('click', function (){
		$('.drop-menu__list').toggleClass('open')
	});

const list = document.querySelectorAll('.menu__list li a')
let drop = document.querySelectorAll('.drop-menu__list')
 list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('open'); });
        item.classList.add('open')
    })
});

// $('.menu__list-item:nth-child(2) .menu__list-link--icon').on('click',function(){
// 	$('.menu__list-item:nth-child(1) .drop-menu__list').removeClass('open');
// 	$(this).toggleClass('icon-active');
// 	$('.menu__list-item:nth-child(1) .menu__list-link--icon').removeClass('icon-active');

// });


let btnCategories = $(".menu__wrapper");
    let categories = $(".menu__btn");

    $(document).click(function (e) {
        if (!btnCategories.is(e.target) && btnCategories.has(e.target).length === 0 &&
            !categories.is(e.target) && categories.has(e.target).length === 0
        ) {
            btnCategories.removeClass('open');
			$('.menu__btn').removeClass('open');
			categories.removeClass('icon-active');
			
        }
    });

$('.menu__btn').on('click', function(){
	$('.menu__wrapper').toggleClass('open');
	$(this).toggleClass('open');

});

$(".header-slider").slick({
	centerMode:true,
	centerPadding: '135px',
	slidesToShow: 1,
	dots: true,
	prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99994 1L0.999939 8L7.99994 15"  stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00006 1L8.00006 8L1.00006 15" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',

responsive: [
            {
                breakpoint: 951,
                settings: {
                    dots: false,
                }
    },
	{
		breakpoint: 801,
		settings: {
			dots: false,
		}
},
{
		breakpoint: 751,
		settings: {
			dots: false,
			centerMode: false,
			arrows: false,
		}
},
	
]			
});
$('.products__btn-more').on('click', function(){
$(this).addClass('hidden');
	$('.products__items-show').removeClass('hidden');
});

	
$('.rooms-slider').slick({

	slidesToShow: 3,
	infinite: true,
	dots: true,
	arrows: true,
	prevArrow: false,
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00006 1L8.00006 8L1.00006 15" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		responsive: [
            {
                breakpoint: 901,
                settings: {
					slidesToShow: 2,
					centerMode:true,


                }
    },
	{
		breakpoint: 801,
		settings: {
			slidesToShow: 2,
			centerMode:false,


			
		}
},
{
		breakpoint: 651,
		settings: {
			centerMode:true,
			slidesToShow: 1,
			centerPadding: '17%',


		}
},
{
	breakpoint: 501,
	settings: {
		centerMode:true,
		slidesToShow: 1,
		centerPadding: '10%',
arrows: false,


	}
},
{
	breakpoint: 431,
	settings: {
		centerMode:true,
		slidesToShow: 1,
		centerPadding: '5%',
arrows: false,


	}
},
{
	breakpoint: 361,
	settings: {
		centerMode:true,
		slidesToShow: 1,
		centerPadding: '2%',
arrows: false,


	}
}
]
});
$('.tips-slider').slick({
	slidesToShow: 3,
	
	dots: true,
	arrows: true,
	prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99994 1L0.999939 8L7.99994 15"  stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.00006 1L8.00006 8L1.00006 15" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
		responsive: [
            {
                breakpoint: 891,
                settings: {
					slidesToShow: 2,
                }
    },
	{
		breakpoint: 551,
		settings: {
			slidesToShow: 1,
			arrows: false,

		}
},

	
]
});

$('[data-fancybox="gallery"]').fancybox({
	loop: true,
	buttons: [
		"zoom",
		"share",
		"download",
		"thumbs",
		"close"
	  ],
});

});



// let isMobile = {
// 	Android: function() {return navigator.userAgent.match(/Android/i);},
// 	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
// 	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
// 	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
// 	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
// 	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
// };
// 		let body=document.querySelector('body');
// if(isMobile.any()){
// 		body.classList.add('touch');
// 		let arrow=document.querySelectorAll('.menu__list-link--icon');
// 	for(i=0; i<arrow.length; i++){
// 			let thisLink=arrow[i].previousElementSibling;
// 			let subMenu=arrow[i].nextElementSibling;
// 			let thisArrow=arrow[i];

// 			thisLink.classList.add('parent');
// 		arrow[i].addEventListener('click', function(){
// 			subMenu.classList.toggle('open');
// 			thisArrow.classList.toggle('active');
// 		});
// 	}
// }else{
// 	body.classList.add('mouse');
// }



