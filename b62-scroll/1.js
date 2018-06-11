document.addEventListener("DOMContentLoaded",function(){
	// khai bao bien
	var menudo = document.querySelector('.menu');
	var trangthaimenudo = 'duoi95';

	var tin = document.querySelector('.tin');
    var trangthaitin = 'duoi'
	var vt = tin.offsetTop;
	// vùng hiển thị cho nội dung ở sidebar(bên phải) khi đông cứng
	var khuhienthi = 800;
	var chancuoi = vt + khuhienthi;
	console.log(chancuoi);

	// hieu ung load 
	var phantuload = document.querySelector('.s3')
	var trangthais3 = 'duoi';
	var vts3 = phantuload.offsetTop - 300;
	console.log(phantuload);

	window.addEventListener('scroll',function(){
		// hiệu ứng của phần menu
		if(window.pageYOffset > 95) { // 95 là phần rộng của banner (trên đỉnh)
			if(trangthaimenudo =='duoi95' ){
				menudo.classList.add('menuden');
				trangthaimenudo ='tren95';
			}
		}else if(window.pageYOffset <= 95){
			if(trangthaimenudo == 'tren95'){
				menudo.classList.remove('menuden');
				trangthaimenudo = 'duoi95';
			}
		}
		// hiệu ứng của sidebar ( nội dung phải)
		if(window.pageYOffset > vt && window.pageYOffset <= chancuoi ){
			if(trangthaitin == 'duoi'){
				tin.classList.add('tindunglai');
				trangthaitin = 'dongcung';
			}
		}else if(window.pageYOffset <= vt || window.pageYOffset > chancuoi){
			if(trangthaitin == 'dongcung'){
				tin.classList.remove('tindunglai');
				trangthaitin = 'duoi';
			}
		}
		// hiệu ứng của nội dung trái
		if(window.pageYOffset > vts3){
			if(trangthais3 == 'duoi'){
				phantuload.classList.add('dilen');
				trangthais3 = 'tren';
			}
		}else if(window.pageYOffset <= vts3){
			if(trangthais3 == 'tren'){
				phantuload.classList.remove('dilen');
				trangthais3 = 'duoi';
			}
		}

	})
	
},false)