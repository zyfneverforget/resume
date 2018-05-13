!function(){
	let view = document.querySelector('#topNavBar')
	let controller = {
		view: null,
		init: function(view){
			this.view = view
			this.bindEvent()
		},
		bindEvent: function(){
			window.addEventListener('scroll', (x) => {
				if(window.scrollY) {
				this.active()
			} else {
				this.deactive()
				}
			})
		},
		active: function(){
			this.view.classList.add('active')
		},
		deactive: function(){
			this.view.classList.remove('active')
		}
	}
	controller.init(view)
}.call()

