$.fn.extend({
	tnow : setTimeout(function(){
		$(this).css("opacity","1");
	},2000),
});
window.onscroll = function(){
	scht = document.body.scrollTop;	
	now();
	homepage();
	main();
	friend();
	produ();
	end();
	
};
function homepage(){
	scht = document.body.scrollTop;
	console.log(scht);
	if( 0<= scht &&scht <= 400){
		$(".homePage p").addClass("homeplay2").css("top",scht+"px");
		$(".homePage .img1").addClass("homeplay1");
	}else{
		$(".homePage p").removeClass("homeplay2");
		$(".homePage .img1").removeClass("homeplay1");
	}
};
function now(scrheight){	
	for(let i=0;i<3 ; i++){
		if(400 <= scht && scht <= 1500){
			$(".nowimg").eq(i).addClass("nowplay1-" + i);
			$(".nowdiv").eq(i).addClass("nowplay2-" + i);
		}else{
			$(".nowimg").eq(i).removeClass("nowplay1-" + i);
			$(".nowdiv").eq(i).removeClass("nowplay2-" + i);
		};
	}
};		
function about(){
	// let len = $(".change").length,
	// temp = 0,
	// tempNext = 1;

	// $(".mebutton").click(function(){
	// 	if(temp >= len)temp=0;
	// 	if(tempNext >= len)tempNext = 1;
	// 	// for(var i = 0; i<len ; i++){
	// 	// 	if(i!=temp && i!=tempNext)$(".change").eq(i).css({
	// 	// 		"transition":"none",
	// 	// 		"left":0,
	// 	// 		"z-index" : 1
	// 	// 	});
	// 	// };
	// 	if(temp < len){
	// 		$(".change").eq(temp).css({
	// 			"left":"-200px",
	// 			"transition" : "left 1s ",
	// 			"z-index" : 5
	// 		});
	// 	};
	// 	$(".change").eq(tempNext).css({"left":"0"});
	// 	temp++;
	// 	tempNext++;
	// })
	var changes = document.querySelectorAll(".change"),
			len = changes.length,
			btn = document.querySelector(".mebutton"),
			temp = 0,
			tempNext = 1;
		changes[temp].style.left = 0;
	btn.onclick = function(){
		if(temp>=len)temp = 0;
		if(tempNext>=len)tempNext = 0;
		for(var i=0;i<len;i++){
			changes[i].style.transition = "left .8s";
		}
		for(i=0;i<len;i++){
			changes[i].style.left = 200+"px";
			if(i!=temp&&i!=tempNext)changes[i].style.transition = "none";
		}
		changes[temp].style.left = -200+"px";
		changes[tempNext].style.left = 0;
		temp++;
		tempNext++;
	}
	console.log($(".me img"));
};
about();
var arr=[
	{
		name : "旅游",
		url : "./image/bb3-0.png"
	},
	{
		name : "篮球",
		url : "./image/bb2-0.png"
	},
	{
		name : "越野",
		url : "./image/bb1-0.png"
	},
	{
		name : "看书",
		url : "./image/bb4-0.png"
	},
	{
		name : "电影",
		url : "./image/bb5-0.png"
	}
];
console.log($("<div></div>").addClass("main"));
function classify(option){
	option.forEach(function(item,index){
		// console.log($("<div></div>").addClass("main"));
		$("<div></div>").addClass("main").html('<div class="maintopimg"></div><div class="mainline"></div><span class="mainspan">'
				+ item.name +'</span><div class="maintrue">点击详情</div>').appendTo($(".classify"));
		$(".maintopimg").eq(index).css("backgroundImage","url("+item.url+")");
		console.log(index);
		$(".maintrue").eq(index).click(function(){
			for(var i=0;i<$(".maintrue").length ;i++){
				$(".classbot").eq(i).css("width","0");
			}
			$(".classbot").eq(index).css({
				"width":"1200px",
			});
		});
	});
};
classify(arr);
function main(){
	let temp = 0;
	if(2500 <= scht && scht <= 3800){
		$(".hobby h1").slideDown("slow").delay(2000)
		const maint = setInterval(function(){
			if(temp == 5)temp = 0;
				$(".classify .main-ul .liimg").eq(temp).addClass("mainpaly1");
				$(".main").eq(temp).addClass("mainpaly2");
				temp++;
		},600);
	}else{
		$(".hobby h1").slideUp("slow");
		$(".classify .main-ul img").removeClass("mainpaly1");
	}
};
const arr1 = [0,1,2,3,4];
const arr2 = [0,1,2,3,4,5,6,7,8,9];
arr1.forEach(function(item){
	$("<div></div>").addClass("classbot").appendTo(".hobby").html('<div class="close">☹</div>');
	$(".close").eq(item).click(function(){
		$(".classbot").eq(item).css("display","none");
		console.log(1);
	});
	arr2.forEach(function(item1){
		$("<img />").attr("src","./image/d"+ item +"-" + item1+".jpg").appendTo($(".classbot").eq(item));
	});
});

const arr3 = [
	{
		name : "阿昊",
		pijia : "一个UI很厉害的家伙，人很好",
		pp : "p1"
	},
	{
		name : "板栗",
		pijia : "一个原生JS很厉害的，味道不错",
		pp : "p2"
	},
	{
		name : "文杰",
		pijia : "没有什么特长，人很欢乐",
		pp : "p3"
	},
	{
		name : "金博",
		pijia : "全方面都很突出，人比较腼腆,但是很好相处，很安静",
		pp : "p4"
	},
	{
		name : "小月月",
		pijia : "写书出身，有文学功底",
		pp : "p5"
	},
	{
		name : "高峰",
		pijia : "努力的家伙，老实",
		pp : "p6"
	},
	{
		name : "凌杰",
		pijia : "高高的，静静的。。。",
		pp : "p7"
	}
];
arr3.forEach(function(item,index){
	$("<div></div>").addClass("pel").addClass(item.pp).html('<img src="./image/'+ item.pp +'.jpg"><span>'
		+item.name+'</span><p>'+item.pijia+'</p></div>').appendTo($(".friend"));
});
function friend(){
	let temp = 0;
	if(3600 <= scht && scht <= 4900){
		const friendt =setInterval(function(){
			if(temp == 7)temp = 0;
				$(".people").eq(temp).addClass("pplay");
				$(".pel").eq(temp).addClass("pplay");
				temp++;
		},400);
	}else{
		$(".people").removeClass("pplay");
		$(".pel").removeClass("pplay");
	}
};
function produ(){
	let temp = 0,
		len = $(".production ul li").length;
	for(var i  = 0 ;i< len;i++){
		let temp1 = $(".production ul li").eq(i).index();
		$(".production ul li").eq(i).click(function(){			
			for(var j = 0 ; j<len ;j++){
				$(".proimg img").eq(j).css({
					"transform":"rotateX(90deg)"
				});
				$(".production ul li").eq(j).css({
					"backgroundColor" : "white",
					"color":"black"
				});
			};
			$(".proimg img").eq(temp1).css({
					"transform":"rotateX(0deg)"
			});
			$(".production ul li").eq(temp1).css({
				"backgroundColor" : "grey",
				"color":"white"
			});
			$(".production ul li").eq(temp1).click(function(){
				if(temp == 0){		
					$(".proimg img").eq(temp1).css({
						"transform":"rotateX(90deg)"
					});
					$(".production ul li").eq(temp1).css({
						"backgroundColor" : "",
						"color":""
					});
					temp = 1;
				}else{			
					$(".proimg img").eq(temp1).css({
						"transform":"rotateX(0deg)"
					});
					$(".production ul li").eq(temp1).css({
						"backgroundColor" : "grey",
						"color":"white",
					});
					temp = 0;
				};
			});
		});
	};
	if( 4600<= scht &&scht <= 5900){
		$(".production .tio").addClass("tioplay");
		$(".production ul").addClass("tioliplay");
	}else{
		$(".production .tio").removeClass("tioplay");
		$(".production ul").removeClass("tioliplay");
	};
};
function end(){
	if( 5600<= scht){
		$(".end .text1").addClass("txtplay1");
		$(".end .endnew").addClass("txtplay1");
		$(".end .endplace").addClass("txtplay2");
		$(".end .anniu").addClass("txtplay2");
	}else{
		$(".end .text1").removeClass("txtplay1");
		$(".end .endnew").removeClass("txtplay1");
		$(".end .endplace").removeClass("txtplay2");
		$(".end .anniu").removeClass("txtplay2");
	}
};

