document.addEventListener("DOMContentLoaded",function(){
	var nutphai = document.querySelector('.nuts b.phai'),
		nuttrai = document.querySelector('.nuts b.trai'),
		slides  = document.querySelectorAll('.slides ul li'),
		chiSohientai = 0,
		trangthai = 'dangdungyen';
		
	function xaxdinh2slidevachuyendong(nutnao){
		if(trangthai == 'dangchuyendong') { return false; }
		trangthai = 'dangchuyendong';
		var trangthaicua2chuyendong = 0;
		var phantuhientai = slides[chiSohientai];

		// if(nutnao == 'nuttrai'){
		// 	chiSohientai = (chiSohientai >0) ? (chiSohientai - 1) : (chiSohientai = slides.length - 1);
		// }else if (nutnao == 'nutphai'){
		// 	chiSohientai = (chiSohientai < slides.length - 1) ? (chiSohientai + 1) : 0;
		// }
			// viet thu gon lai phan if else:
		chiSohientai = (nutnao == 'nuttrai') ? ((chiSohientai >0) ? (chiSohientai - 1) : (chiSohientai = slides.length - 1)) : ((chiSohientai < slides.length - 1) ? (chiSohientai + 1) : 0);
		
		var phantutieptheo = slides[chiSohientai];

		//end animationcheck:
		var xulihientaiketthuc = function(){
			this.classList.remove('dangxem');
			// if(nutnao == 'nutphai'){
			// 	this.classList.remove('bienMatkhianNext');
			// }else if(nutnao == 'nuttrai'){
			// 	this.classList.remove('bienMatkhianPrev');
			// }
			this.classList.remove((nutnao == 'nutphai') ? ('bienMatkhianNext') : ('bienMatkhianPrev'));

			trangthaicua2chuyendong += 1;
			if(trangthaicua2chuyendong == 2) {trangthai = 'dangdungyen';} 

		}
		phantuhientai.addEventListener('webkitAnimationEnd',xulihientaiketthuc);

		var xulitieptheoketthuc = function(){
			this.classList.add('dangxem');
			// if(nutnao == 'nutphai'){
			// 	this.classList.remove('diVaokhianNext');
			// }else if(nutnao == 'nuttrai'){
			// 	this.classList.remove('diVaokhianPrev');
			// }
			this.classList.remove((nutnao == 'nutphai') ? ('diVaokhianNext') : ('diVaokhianPrev'));
			trangthaicua2chuyendong  +=1;
			if(trangthaicua2chuyendong == 2) {trangthai = 'dangdungyen';} 
		}
		phantutieptheo.addEventListener('webkitAnimationEnd',xulitieptheoketthuc);

		// if(nutnao == 'nuttrai'){
		// 	phantuhientai.classList.add('bienMatkhianPrev');
		// 	phantutieptheo.classList.add('diVaokhianPrev');
		// }else if (nutnao == 'nutphai'){
		// 	phantuhientai.classList.add('bienMatkhianNext');
		// 	phantutieptheo.classList.add('diVaokhianNext');
		// }
		phantuhientai.classList.add((nutnao == 'nuttrai') ? ('bienMatkhianPrev') : ('bienMatkhianNext'));
		phantutieptheo.classList.add((nutnao == 'nuttrai') ? ('diVaokhianPrev') : ('diVaokhianNext'));

	}


	var chuyendongchonutphai = function(){
		xaxdinh2slidevachuyendong('nutphai');
		// // kiem tra trang thai: (chong nguoi dung nhan lien tuc)
		// if(trangthai == 'dangchuyendong') { return false; } // dung chuong trinh

		// trangthai = 'dangchuyendong';
		// var trangthaicua2chuyendong = 0;

		// var phantuhientai = slides[chiSohientai];
		// if(chiSohientai < slides.length - 1){
		// 	chiSohientai += 1;
		// }else{
		// 	chiSohientai = 0;
		// }
		// var phantutieptheo = slides[chiSohientai];

		// phantuhientai.classList.add('bienMatkhianNext');
		// phantutieptheo.classList.add('diVaokhianNext');

		// // xử lí phần tử hiện tại kết thức chuyển động:
		// phantuhientai.addEventListener('webkitAnimationEnd',function(){
		// 	this.classList.remove('dangxem');
		// 	this.classList.remove('bienMatkhianNext');
		// 	trangthaicua2chuyendong += 1;
		// 	if(trangthaicua2chuyendong == 2) {trangthai = 'dangdungyen';} 
		// })
		// // xử lí phần tử tiếp theo kết thúc chuyển động:
		// phantutieptheo.addEventListener('webkitAnimationEnd',function(){
		// 	this.classList.remove('diVaokhianNext');	
		// 	this.classList.add('dangxem');
		// 	trangthaicua2chuyendong  +=1;
		// 	if(trangthaicua2chuyendong == 2) {trangthai = 'dangdungyen';} //lúc này đã xử lí xong của class của phantuhientai va phantutieptheo tức là trangthaicua2chuyendong = 2 nên ta cho trang thai về là đang đứng yên để không bị return false và click đưọc tiếp
		// })
		// // nếu người dùng nhấn liên tục thì sẽ có các click mà trangthaicua2chuyendong chưa bằng 2 nên chương trình trả về false và click đó không thực hiên gì.
	}

	var chuyendongchonuttrai = function(){
		xaxdinh2slidevachuyendong('nuttrai');
		// if(trangthai == 'dangchuyendong') { return false;}
		// trangthai = 'dangchuyendong';
		// var trangthaicua2chuyendong = 0;
		
		// var phantuhientai = slides[chiSohientai];
		// if(chiSohientai > 0){
		// 	chiSohientai -= 1;
		// }else{
		// 	chiSohientai = slides.length - 1;
		// }
		// var phantutieptheo = slides[chiSohientai];

		// phantuhientai.classList.add('bienMatkhianPrev');
		// phantutieptheo.classList.add('diVaokhianPrev');

		// phantuhientai.addEventListener('webkitAnimationEnd',function(){
		// 	this.classList.remove('dangxem');
		// 	this.classList.remove('bienMatkhianPrev');
		// 	trangthaicua2chuyendong += 1;
		// 	if(trangthaicua2chuyendong == 2) {trangthai = 'dangdungyen';} 
		// })
		// phantutieptheo.addEventListener('webkitAnimationEnd',function(){
		// 	this.classList.remove('diVaokhianPrev');	
		// 	this.classList.add('dangxem');
		// 	trangthaicua2chuyendong  +=1;
		// 	if(trangthaicua2chuyendong == 2) {trangthai = 'dangdungyen';}
		// })
	}

		nuttrai.addEventListener('click',chuyendongchonuttrai);
		nutphai.addEventListener('click',chuyendongchonutphai);
},false)