!function(){

let view = document.querySelector('#comment')

let model = {
	initAV: function(){
		let APP_ID = 'HmJACd7IAKyGmO3MbRVt7e2X-gzGzoHsz'
		let APP_KEY = 'ByCiVycQsDFmGPAxJfzRdkha'
		AV.init({
			appId: APP_ID,
			appKey: APP_KEY
		})
	},
	fetch: function(){
		let query = new AV.Query('Message')
		return query.find()
	},
	load: function(content,name){
		let Message = AV.Object.extend('Message')
		let message = new Message()
		return message.save({
			'content': content,
			'name': name
		})
	},
}

let controller = {
	view: null,
	model: null,
	messageList: null,
	myMessage: null,
	init: function(view,model){
		this.view = view
		this.model = model
		this.messageList = view.querySelector('#board')
		this.myMessage = view.querySelector('#message')   //<form>
		this.model.initAV()
		this.loadMessage()
		this.bindEvent()
	},
	loadMessage: function(){
		this.model.fetch().
		then( (query)=> {
			let array = query.map((x)=>{
				return x.attributes
			})
			console.log(array)
			array.forEach((value) => {
				let content= value.content
				let name = value.name
				let li = document.createElement('li')
				console.log(name)
				li.innerText = name +':'+ content
				this.messageList.appendChild(li)
			})
		})
	},
	bindEvent: function(){
		this.myMessage.addEventListener('submit',(a)=>{
			a.preventDefault()
			this.keep()
		})
	},
	keep: function(){
		let content = this.myMessage.querySelector('input[name=content]').value
		let name = this.myMessage.querySelector('input[name=name]').value
		this.model.load(content,name)
		.then((object)=> {
			console.log(object)
			let li = document.createElement('li')
			li.innerText = name+':'+content
			this.messageList.appendChild(li)
		})
	}
}
controller.init(view,model)
}.call()
