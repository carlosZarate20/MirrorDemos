
function mostrarVoz(){
	var element = document.getElementById('labelCalendar');
	var element2 = document.getElementById('BlockOpa');
	var element3 = document.getElementById('Block1');
	var element4 = document.getElementById('Block3');
	var element5 = document.getElementById('BlockOpa');

	if(element.style.display == 'none'){
		element.style.display = 'block';
		element2.style.opacity = "0.5";
		element3.style.opacity = "0.5";
		element4.style.opacity = "0.5";
		element5.style.opacity = "0.5";
	}else{
		element.style.display = 'none';
		element2.style.opacity = '1';
		element3.style.opacity = '1';
		element4.style.opacity = '1';
		element5.style.opacity = '1';

	}
}
