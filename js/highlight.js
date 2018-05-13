!function(){
	window.addEventListener('scroll',function() {
		let specialTags = document.querySelectorAll('[data-x]')
		let minIndex = 0
		for (let i=1;i<specialTags.length;i++) {
			if (Math.abs(specialTags[i].offsetTop-window.scrollY)<(Math.abs(specialTags[minIndex].offsetTop-window.scrollY))){
				minIndex = i
			}
		}
		let id = specialTags[minIndex].id
		let a = document.querySelector('a[href="#'+id+'"]') //获取到a标签 例如<a href=#siteWork>
		let li = a.parentNode                                //获取a标签的父元素li标签
		let brother=li.parentNode.children
		for(let i=0;i<brother.length;i++) {
			brother[i].classList.remove('heighlight')
		}
		li.classList.add('heighlight')
	}) 
}.call()
