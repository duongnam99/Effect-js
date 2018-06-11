document.addEventListener("DOMContentLoaded",function(){
	var nut= document.getElementById('nuthieuung');
	var khoi = document.getElementById('kcd');
	var trangthai ="lan1";
	nut.onclick = function(){
		if(trangthai == "lan1"){
			khoi.classList.remove('kochuyendong')
			khoi.classList.add('chieuso1');
			trangthai ="lan2";
		}
		else if(trangthai =="lan2"){
			khoi.classList.remove('chieuso1');
			trangthai ="lan1";
		}
	}
},false)