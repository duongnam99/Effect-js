document.addEventListener("DOMContentLoaded",function(){
	var trangthai = 'duoi300';
	var menu = document.querySelector('.menu');
	// bat su kien cuon chuot
	window.addEventListener('scroll', function(){
		// console.log(window.pageYOffset);
		if(window.pageYOffset > 300){
			if(trangthai == 'duoi300'){ // thêm trạng thái để chỉ hoạt động 1 lần, tránh giật máy
				// console.log('dang o menu');
				trangthai = 'tren300';
				menu.classList.add('nholai');
			}
		}else if(window.pageYOffset <= 300){
			if(trangthai == 'tren300'){
				trangthai ='duoi300';
				menu.classList.remove('nholai');
			}
		}
	})
},false)