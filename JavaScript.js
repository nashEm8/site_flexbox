window.onload = function(){
	document.querySelector(".menu_mobile").addEventListener("click", function(){
		if(document.querySelector(".menu nav ul").style.display == 'flex') {
			document.querySelector(".menu nav ul").style.display = 'none';
		} else {
			document.querySelector(".menu nav ul").style.display ='flex';
		}
	});
};

window.onresize=function(){
    if(document.body.clientWidth > 600){
        document.querySelector("nav ul").style.display="flex"
        document.querySelector(".menu_mobile").style.display="none"
        
    }
    else{
        document.querySelector(".menu_mobile").style.display="flex"
    }
    
}

