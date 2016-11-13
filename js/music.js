document.addEventListener("DOMContentLoaded",function(){
	var player = new Audio();
	var $btnPlay = $("#btnPlay");
	var $span = document.querySelectorAll("header span");
	var $swp = document.querySelector("section .swiper-wrapper");
	var width = $(window).width();
	$span[1].addEventListener("tap",function(){
		$(this).siblings().removeClass("blod");
		$(this).addClass("blod");
		$swp.style = "transition-duration: 0ms; transform: translate3d(0px, 0px, 0px);transition:transform 300ms"; 
	});
	$span[2].addEventListener("tap",function(){
		$(this).siblings().removeClass("blod");
		 $(this).addClass("blod");
		$swp.style = "transition-duration: 0ms; transform: translate3d(-"+width+"px, 0px, 0px);transition:transform 300ms";
	});
	$span[3].addEventListener("tap",function(){
		$(this).siblings().removeClass("blod");
		$(this).addClass("blod");
		$swp.style = "transition-duration: 0ms; transform: translate3d(-"+2*width+"px, 0px, 0px);transition:transform 300ms";
	});
	 
	 var $txt = $("#txt");
	 var $find = $("#find");
	 $find.on("tap",function(){
	 var tval = $txt.val(); 
	 	if(tval===""){
	 		alert("请输入搜索信息")
	 	}else{
	 		$.ajax({
	 			type:"get",
	 			url:" http://apis.baidu.com/geekery/music/query",
	 			headers:{
	 				apikey:'bfa91e993c34940be862874bca50f785'
	 			},
	 			data:{
	 				s:tval
	 			},
	 			success:function(res){
	 			var res=JSON.parse(res);
	 			console.log(res);
	 			var $songlist = $(".songlist");
	 			$songlist.empty();
	 			res.data.data.forEach(function(e){
	 				var $li = $("<li/>");
	 				var $div = $("<div/>");
	 				$div.addClass("sole").attr("id",e.hash);
	 				var $span = $("<span/>");
	 				$span.html(e.songname).appendTo($div);
	 				var $span = $("<span/>");
	 				$span.html(e.filename).appendTo($div);
	 				$div.appendTo($li);
	 				var $div = $("<div/>");
	 				$div.addClass("iconfont icon-add2").attr("id","add").appendTo($li);
	 				$li.appendTo($songlist);
	 			});				 
	 			}
	 		});
	 		
	 	}
	 });
	 var $songname = $(".songname");
	 var $singer = $(".singer");
	 var $singimg = $("#singimg");
	 $("section").on("tap",".sole",function(){
	 	var id =  $(this).attr("id");
	 	$.ajax({
	 		type:"get",
	 		url:" http://apis.baidu.com/geekery/music/playinfo",
	 		headers:{
	 			apikey:'bfa91e993c34940be862874bca50f785'
	 		},
	 		data:{
	 			hash:id
	 		},
	 		success:function(res){
	 			var res = JSON.parse(res);
	 			console.log(res);
	 			player.src = res.data.url;
	 			player.play();
	 			$songname.html(res.data.songName);
	 			$singer.html(res.data.singerName);
	 		}
	 	}); 
	 	if(player.play()){
		 	$btnPlay.removeClass("icon-play").addClass("icon-pause");
		 	
		 }else{
		 	$btnPlay.removeClass("icon-pause").addClass("icon-play");
		 }
	 });
	 $btnPlay.on("tap",function(){
	 	if(player.paused){
	 		$btnPlay.removeClass("icon-play").addClass("icon-pause");
			player.play();
		}else{
			player.pause();
			$btnPlay.removeClass("icon-pause").addClass("icon-play");
			
		}
	 })
	
	 player.onplay=function(){
	 	$singimg.addClass('playing');
	 	$singimg.css("animationPlayState","running");
	 }
	 player.onpause = function(){
		// 移除图片旋转效果
		$singimg.css("animationPlayState","paused");
	}
	var $minelist = $("#minelist");
	$("section").on("tap","#add",function(){
		var $li = $("<li/>");
		$(this).siblings().clone().appendTo($li);
		var $div = $("<div/>");
		$div.attr("id","del").addClass("iconfont icon-failed").appendTo($li);
		$li.appendTo($minelist);
	});
	
	
	
	
})