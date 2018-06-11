document.addEventListener("DOMContentLoaded",function(){
	// khai bao cac bien can dung (nen dung iId thi chuan hon)
	var nut = document.querySelector('.nut'),
		menutrai = document.querySelector('.menutrai'),
		den = document.querySelector('.den'),
		noidungto = document.querySelector('.noidungto');
		trang = document.querySelector('.mautrang');

	// khi click vao nut xanh
	nut.onclick = function(){
		den.classList.add('len');
		// cho ca khoi to dich phai
		//noidungto.classList.add('dichphai'); ko cho dich phai ca khoi nua vi da co hieu ung quay
		trang.classList.add('trangquay');
		menutrai.classList.remove('vetrai');
	}
	den.onclick = function(){
		den.classList.remove('len');
		//noidungto.classList.remove('dichphai');
		trang.classList.remove('trangquay');
		menutrai.classList.add('vetrai');
	}
},false)