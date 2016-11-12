document.addEventListener("DOMContentLoaded",function(){
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
	 				s:'十年'
	 			},
	 			success:function(res){
	 			var res=JSON.parse(res);
	 			console.log(res);
	 			res.data.data.forEach(function(e){
	 				console.log(e)
	 			})
	 				 
	 			}
	 		});
	 		
	 	}
	 })
	 
})