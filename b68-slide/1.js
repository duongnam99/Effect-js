document.addEventListener("DOMContentLoaded",function(){
	var nut = document.querySelectorAll('.chuyenslide ul li');
	var slides = document.querySelectorAll('.cacslide ul li');
	//console.log(slides);
	// cho slide chay lien tuc:
	var thoigian = setInterval(function(){autoSlide();},4500);
	// xu li su kien click
	for (var i = 0; i < nut.length; i++) {
		nut[i].addEventListener('click', function(){
			//huy slide tu chuyen dong: 
			clearInterval(thoigian);
			// bo tat ca cac class kich hoat trc
			for (var i = 0; i < nut.length; i++) {
				nut[i].classList.remove('kichhoat');
			}
			this.classList.add('kichhoat');
			// xu li phan tinh vi tri
			var nutkichhoat = this;
			console.log(nutkichhoat);
			var vitrinut = 0;
			// ham sibling lần về phần tử cùng cấp đầu tiên => ra dc vị trí phàn tử dc kich vao
			for (vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {	
			}
			// het vong lap thi bien i bang so thu tu
				// console.log('vi tri cua phan tu co class la kich hoat la = ' + vitrinut);
			// buoc 1: bản thân các thẻ li đều bị cho opacity = 0, và có thêm class active với opacity = 1, 
			// thẻ li đầu tiên có sẵn class active để hiển thị mặc định, khi click, ta xóa class active ở tất cả các slide rồi add vào cái dc click:

			for (var i = 0; i < slides.length; i++) {
				slides[i].classList.remove('active');
			}
			slides[vitrinut].classList.add('active');
			
		}) 
	} // het phan su kien cho nut
		
	//function autoSlide cho function trong setInterval:
	function autoSlide(){
		// xem slide nao dang hien thi:
		var vitrislide = 0;
		var slidehientai = document.querySelector('.cacslide ul li.active');
		
		for (vitrislide = 0; slidehientai = slidehientai.previousElementSibling; vitrislide++) {
		}
		// neu chua den slide cuoi hay vitrislide , slides.length thi hoat dong binhh thuong
		if (vitrislide < slides.length -1 ) {
			for (var i = 0; i < slides.length; i++) {
			slides[i].classList.remove('active');
			nut[i].classList.remove('kichhoat');
			}
			// cho phan tu tiep theo hien thi ra
			slides[vitrislide].nextElementSibling.classList.add('active');

			nut[vitrislide].nextElementSibling.classList.add('kichhoat');

		}else{
			for (var i = 0; i < slides.length; i++) {
			slides[i].classList.remove('active');
			nut[i].classList.remove('kichhoat');
			}
			// cho phan tu tiep theo hien thi ra
			slides[0].classList.add('active');

			nut[0].classList.add('kichhoat');
			}
	}
},false)