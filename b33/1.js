// truy xuat nut:
// trc khi truy xuat:
document.addEventListener("DOMContentLoaded", function(){
	var nut= document.getElementById('nut1');
	var khoi = document.getElementsByClassName('card');
	// console.log('khoi');
	//goi su kien click
	 nut.onclick = function(){
	 	khoi[0].classList.toggle('diphai');
	 }
	
},false)
