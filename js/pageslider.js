!function(){
	let aTags = document.querySelectorAll('nav.menue>ul>li>a')
for(let i=0;i<aTags.length;i++) {	
	function animate(time) {
	requestAnimationFrame(animate);
	TWEEN.update(time);
	}
	requestAnimationFrame(animate);
	aTags[i].onclick = function(x) {
		x.preventDefault()  
		let a = x.currentTarget
		let href = a.getAttribute('href')
		let element = document.querySelector(href)
		let currentTop = window.scrollY
		let top = element.offsetTop - 90
		let s = top - currentTop
		var coords = {y: window.scrollY}
		var tween = new TWEEN.Tween(coords)
		.to({y:top}, 500)
		.easing(TWEEN.Easing.Quadratic.Out)
		.onUpdate(function() {
		window.scrollTo( 0, coords.y)
		})
		.start(); // 立即开始 tween*/
	}
}
}.call()
