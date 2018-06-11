document.addEventListener("DOMContentLoaded",function(){
	var nutphai = document.querySelector('.nuts b.phai'),
		nuttrai = document.querySelector('.nuts b.trai'),
		slides  = document.querySelectorAll('.slides ul li'),
		chiSohientai = 0,
		trangthai = 'dangdungyen';
		

	nutphai.addEventListener('click', function(){
		// kiem tra trang thai: (chong nguoi dung nhan lien tuc)
		if(trangthai == 'dangchuyendong') { return false; } // dung chuong trinh

		trangthai = 'dangchuyendong';
		var trangthaicua2chuyendong = 0;

		var phantuhientai = slides[chiSohientai];
		if(chiSohientai < slides.length - 1){
			chiSohientai += 1;
		}else{
			chiSohientai = 0;
		}
		var phantutieptheo = slides[chiSohientai];

		phantuhientai.classList.add('bienMatkhianNext');
		phantutieptheo.classList.add('diVaokhianNext');

		// xử lí phần tử hiện tại kết thức chuyển động:
		phantuhientai.addEventListener('webkitAnimationEnd',function(){
			this.classList.remove('dangxem');
			this.classList.remove('bienMatkhianNext');
			trangthaicua2chuyendong += 1;
			if(trangthaicua2chuyendong == 2) {trangthai = 'dangdungyen';} 
		})
		// xử lí phần tử tiếp theo kết thúc chuyển động:
		phantutieptheo.addEventListener('webkitAnimationEnd',function(){
			this.classList.remove('diVaokhianNext');	
			this.classList.add('dangxem');
			trangthaicua2chuyendong  +=1;
			if(trangthaicua2chuyendong == 2) {trangthai = 'dangdungyen';} //lúc này đã xử lí xong của class của phantuhientai va phantutieptheo tức là trangthaicua2chuyendong = 2 nên ta cho trang thai về là đang đứng yên để không bị return false và click đưọc tiếp
		})
	})
		// nếu người dùng nhấn liên tục thì sẽ có các click mà trangthaicua2chuyendong chưa bằng 2 nên chương trình trả về false và click đó không thực hiên gì.
	nuttrai.addEventListener('click',function(){
		if(trangthai == 'dangchuyendong') { return false;}
		trangthai = 'dangchuyendong';
		var trangthaicua2chuyendong = 0;
		
		var phantuhientai = slides[chiSohientai];
		if(chiSohientai > 0){
			chiSohientai -= 1;
		}else{
			chiSohientai = slides.length - 1;
		}
		var phantutieptheo = slides[chiSohientai];

		phantuhientai.classList.add('bienMatkhianPrev');
		phantutieptheo.classList.add('diVaokhianPrev');

		phantuhientai.addEventListener('webkitAnimationEnd',function(){
			this.classList.remove('dangxem');
			this.classList.remove('bienMatkhianPrev');
			trangthaicua2chuyendong += 1;
			if(trangthaicua2chuyendong == 2) {trangthai = 'dangdungyen';} 
		})
		phantutieptheo.addEventListener('webkitAnimationEnd',function(){
			this.classList.remove('diVaokhianPrev');	
			this.classList.add('dangxem');
			trangthaicua2chuyendong  +=1;
			if(trangthaicua2chuyendong == 2) {trangthai = 'dangdungyen';}
		})

	})
},false)