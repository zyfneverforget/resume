!function(){
	let view = document.querySelector('.swiper-container')
	let mySwiper = new Swiper (view, {
		// Optional parameters
		
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
