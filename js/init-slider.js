!function(){
	let view = document.querySelector('.swiper-container')
	let mySwiper = new Swiper (view, {
		// Optional parameters
		autoplay: {
			delay: 2000,
		},
    spaceBetween: 600,
		loop: true,
	
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},
	
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	
		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	})
	
}.call()
