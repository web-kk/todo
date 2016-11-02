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
			date:fullTime,
			color:'#f7f7f7'
		}
		$('.show').hide()
		todos.push(todo)
		localStorage.todos=JSON.stringify(todos)
		$('<li><div class="content">'+todo.name+'</div><div class="data">'+fullTime+'</div></li>').appendTo('#ul')
		$('.show-in input').val('')
	})
	var oldText
	
	//
	$('#ul').on('touchend','li',function(){
		var index=$(this).index()
		oldText=$(this).find('.content').html()	
		$('#ul li').eq(index).remove()
		todos.splice(index,1)
		localStorage.todos=JSON.stringify(todos)
		$('.show').show()
		$('.show-in input').val(oldText)	
		$('.s-data').html(fullTime)
		var val=$.trim($('.show-in input').val())
		var todo={
			name:val,
			states:0,
			date:fullTime,
			color:'#f7f7f7'
		}
		localStorage.todos=JSON.stringify(todos)		
	})
	//
	$('.s-img').on('touchend',function(){
		$('.show').hide()
		var todo={
			name:oldText,
			states:0,
			date:fullTime,
			color:'#f7f7f7'
		}
		todos.push(todo)
		localStorage.todos=JSON.stringify(todos)
		$('<li><div class="content">'+todo.name+'</div><div class="data">'+fullTime+'</div></li>').appendTo('#ul')
	})
	//删除
	$('.dele').on('touchend',function(){
		$('.show').hide()
		var index=$(this).index()
		todos.splice(index,1)
		localStorage.todos=JSON.stringify(todos)
	})
	//color
	$('.s-background').on('touchend',function(){
		if($('.color').css('display')=='none'){
			$('.color').show()
		}else{
			$('.color').hide()
		}
	})
	var color=['#f7f7f7','#A1D6AE','#F39484','#F7D885']
	$('.color').on('touchend','li',function(){
		var index=$(this).index()
		$('.color li span').css('border-radius','0%').eq(index).css('border-radius','50%')
		$('.show').css('background',color[index])
		var length=$('#ul li').length
		$('#ul li').eq(length+1).css('background',color[index])
	})
})


