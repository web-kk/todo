$(document).ready(function(){
	var add=$('.add')
	var ul=$('#ul')
	var ss=$('.input input')
	var todos=[]
	var tijiao=$('.s-add')
	var fullTime
	var time=new Date()
	var nowTime
	var nowHour
	var nowFen
	nowTime=time.toLocaleDateString()
	nowHour=time.getHours()
	nowFen=time.getMinutes()
	fullTime=nowTime+' '+nowHour+':'+nowFen
	//遍历
	if(localStorage.todos){
		todos=JSON.parse(localStorage.todos);
		for(var i in todos){
			$('<li><div class="content">'+todos[i].name+'</div><div class="data">'+todos[i].date+'</div></li>').appendTo('#ul')
		}
	}	
	//添加
	add.on('touchend',function(){
		$('.show').show()
		$('.s-data').html(fullTime)
	})
	tijiao.on('touchend',function(){
		var val=$.trim($('.show-in input').val())
		if(val==''){
			return
		}
		var todo={
			name:val,
			states:0,
			date:fullTime
		}
		$('.show').hide()
		todos.push(todo)
		localStorage.todos=JSON.stringify(todos)
		$('<li><div class="content">'+todo.name+'</div><div class="data">'+fullTime+'</div></li>').appendTo('#ul')
		$('.show-in input').val('')
	})
})