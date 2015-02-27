	
	var $buttonP = document.getElementById('buttonP');
	var $navP = document.getElementById('navP');
	
	var $buttonM = document.getElementById('buttonM');
	var $navM = document.getElementById('navM');
	
	var $buttonR = document.getElementById('buttonR');
	var $navR = document.getElementById('navR');
	
	var $buttonMo = document.getElementById('buttonMo');
	var $navMo = document.getElementById('navMo');
	
	var $buttonU = document.getElementById('buttonU');
	var $navU = document.getElementById('navU');
	
		
	var $buttonMenu = document.getElementById('icoMenu');
	var $buttonClose = document.getElementById('closeMenu');
	var $Menu = document.getElementById('Menu');
	
	
	var showMenu = function(){
		$Menu.classList.toggle('menu-activo');	
		$buttonMenu.classList.toggle('menu-font-gris');			
	}
	
	var showNavP = function(){
		$navP.classList.toggle('h100');	
		
	}
	var showNavM = function(){
		$navM.classList.toggle('h100');	
	}
	var showNavR = function(){
		$navR.classList.toggle('h100');	
	}
	var showNavMo = function(){
		$navMo.classList.toggle('h100');	
	}
	var showNavU = function(){
		$navU.classList.toggle('h100');	
	}
	
	
	$buttonP.addEventListener("click", showNavP);
	$buttonR.addEventListener("click", showNavR);
	$buttonM.addEventListener("click", showNavM);
	$buttonMo.addEventListener("click", showNavMo);
	$buttonU.addEventListener("click", showNavU);
	
	$buttonMenu.addEventListener("click", showMenu);
	$buttonClose.addEventListener("click", showMenu);