!function(){
	let view = document.getElementsByClassName('menuTrigger')
	for(let i=0;i<view.length;i++) { 
		view[i].onmouseenter = function(x) {
			let li = x.currentTarget
			li.classList.add('active')
		}
		view[i].onmouseleave = function (y) {
			let li = y.currentTarget 
			li.classList.remove('active')
		}
	}
}.call()
