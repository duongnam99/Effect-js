document.addEventListener("DOMContentLoaded",function(){
	var nut = document.getElementsByClassName('declick');
	var nd = document.getElementsByClassName('dehienthi');
	for (var i = 0; i < nut.length; i++) {
		nut[i].onclick = function(){
			console.log(this.classList[1]);

			if(this.classList[1] == 'mautrang'){

				this.classList.remove('mautrang');

				var hienthi = this.getAttribute('data-hienlen');
				var phantuhienra = document.getElementById(hienthi);
			
				phantuhienra.classList.remove('hienthi');
				
			}else{
				// bo het cai mau trang:
				for (var j = 0; j < nut.length; j++) {
					nut[j].classList.remove('mautrang');
				}
				// them cai dc kich mau trang
				this.classList.toggle('mautrang');
				//lay data-hienlen
				var hienthi = this.getAttribute('data-hienlen');
				var phantuhienra = document.getElementById(hienthi);
				//cho cac phan hien thi khac an di
				for (var i = 0; i < nd.length; i++) {
					nd[i].classList.remove('hienthi');
				}
				// cho doi tuong duoc click hien thi ra
				phantuhienra.classList.toggle('hienthi');
			}
			
			
		}
	}
},false)