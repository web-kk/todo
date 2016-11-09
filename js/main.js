$(document).ready(function(){
	var add=$('.add')
	var ul=$('#ul')
	var ss=$('.input input')
	var todos=[]
	var tijiao=$('.s-add')
	var color=['#f7f7f7','#A1D6AE','#F39484','#F7D885']
	var start
	//遍历
	if(localStorage.todos){
		todos=JSON.parse(localStorage.todos);
		for(var i in todos){
			var c=(todos[i].states)? 'done':''
			$('<li class="'+c+'"><div class="content">'+todos[i].name+'</div><div class="data">'+todos[i].date+'</div></li>').appendTo('#ul')
		}
	}	
	//添加
	add.on('touchend',function(){
		var fullTime
		var time=new Date()
		var nowTime
		var nowHour
		var nowFen
		nowTime=time.toLocaleDateString()
		nowHour=time.getHours()
		nowFen=time.getMinutes()
		fullTime=nowTime+' '+nowHour+':'+nowFen	
		$('.show').show()
		$('.s-data').html(fullTime)
		$('.show-in input').val('')
	})
	tijiao.on('touchend',function(){
		var val=$.trim($('.show-in input').val())
		if(val==''){
			return
		}
		var fullTime
		var time=new Date()
		var nowTime
		var nowHour
		var nowFen
		nowTime=time.toLocaleDateString()
		nowHour=time.getHours()
		nowFen=time.getMinutes()
		fullTime=nowTime+' '+nowHour+':'+nowFen	
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
	$('#ul').on('touchstart','li',function(e){
		start=e.originalEvent.changedTouches[0].clientX
	})
	//修改
	$('#ul').on('touchend','li',function(e){
		var now=e.originalEvent.changedTouches[0].clientX
		if(now-start==0){
			var fullTime
			var time=new Date()
			var nowTime
			var nowHour
			var nowFen
			nowTime=time.toLocaleDateString()
			nowHour=time.getHours()
			nowFen=time.getMinutes()
			fullTime=nowTime+' '+nowHour+':'+nowFen	
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
		}
			
	})
	//返回
	$('.s-img').on('touchend',function(){
		$('.show').hide()
		if($.trim($('.show-in input').val())==''){
			return
		}
		var fullTime
		var time=new Date()
		var nowTime
		var nowHour
		var nowFen
		nowTime=time.toLocaleDateString()
		nowHour=time.getHours()
		nowFen=time.getMinutes()
		fullTime=nowTime+' '+nowHour+':'+nowFen	
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
		if($.trim($('.show-in input').val())==''){
			return
		}
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

	$('.color').on('touchend','li',function(){
		var index=$(this).index()
		$('.color li span').css('border-radius','0%').eq(index).css('border-radius','50%')
		$('.show').css('background',color[index])
		$('.show input').css('background',color[index])
		$('#ul li').eq(index).remove()
		todos.splice(index,1)
		localStorage.todos=JSON.stringify(todos)
//		var length=$('#ul li').length
//		console.log(length)
//		$('#ul li').eq(length).css('background',color[index])
	})
	//左右滑动事件
	$('#ul').on('touchend','li',function(e){
		var now=e.originalEvent.changedTouches[0].clientX
		if (now-start>30){
			var index=$(this).index()
			$('#ul li').eq(index).addClass('done')
			todos[index].states=1
			localStorage.todos=JSON.stringify(todos)	
		}
		if(now-start<-30){
			var index=$(this).index()
			$('#ul li').eq(index).removeClass('done')
			todos[index].states=0
			localStorage.todos=JSON.stringify(todos)			
		}
	})
	//搜索
	$('.input input').on('touchend',function(){
		setInterval(function(){
			$('#ul li').hide()
			$('.content:contains("'+$('.input input').val()+'")').closest('li').show()
			if($('.input input').val()==''){
				$('#ul li').show()
			}
		},300)
		
	})
	
})


