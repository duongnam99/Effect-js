document.addEventListener("DOMContentLoaded",function(){
	var trangthai = 'duoi300';
	//bắt sự kiện khi người dùng scroll
	window.addEventListener('scroll',function(){
		console.log(window.pageYOffset);
		if(window.pageYOffset > 300){
			if(trangthai =='duoi300'){
				console.log('dang o menu');
				trangthai = 'tren300';
			}
		}
	});
},false)