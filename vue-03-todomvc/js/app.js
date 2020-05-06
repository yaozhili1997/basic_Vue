(function (Vue) {//表示依赖了全局的Vue
	//const表示申明的变量是不可变的，ES6
	const items= [
		{
			id: 1,//主键id
			content: 'vue.js',//输入的内容
			completed: false//是否完成
		},
		{
			id: 2,
			content: 'java',
			completed: false
		},
		{
			id: 3,
			content: 'python',
			completed: false
		}
	]

	new Vue({
		el: '#todoapp',
		data: {
			items//ES6这是对象属性的简写方式  等价于items:items
		},
		methods: {
			addItem(event){   //Es6语法 它等价于 addItem:function()
				console.log('addItem',event.target.value)
				//1.获取文本框中的内容
				const content=event.target.value.trim()
				//2.判断数据是否为空，如果为空，什么都不做
				if(!content.length){
					return
				}
				//3.如果不为空，则添加到数组中
				const id=this.items.length+1
				this.items.push(
				{
					id,//id: id,
					content,//content: content,
					completed: false
				})
				//4.清空文本输入框的内容
				event.target.value=''
			}
		},
	})
})(Vue);
