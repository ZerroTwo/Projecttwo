window.onload = function() {
const headPhoneStyle = document.querySelectorAll('.head__phone__style'),
	  colorHeadPhone = document.querySelectorAll('.size'),
	  wrapperBg = document.querySelector('.wrapper'),
	  arrowLeft = document.querySelectorAll('.arrow__left'),
 	  arrowRight = document.querySelectorAll('.arrow__right'),
 	  arrowL = document.querySelector('.arrow__l'),
      arrowR = document.querySelector('.arrow__r'),
      seachArea = document.querySelector('.seach__area'),
      seachAreaInput = document.querySelector('.input__text'),
      closeSearch = document.querySelector('.close'),
      logoType = document.querySelector('.logo')
      search = document.querySelector('.search__icon');

  
let notAvailableColor = {
	0: [2],
	1: [0,1],
	2: [],
	3: [1, 2 , 3],
	4: [0],
	5: [1,4],
};


function scan(){
	let index  = 0 ;
	 	search.addEventListener('click' , function(){
	 		
	 			switch(index){
	 				case 0 :
	 					logoType.classList.add('high');
	 					seachArea.classList.add('active');
	 					closeSearch.classList.add('active');
	 					index++;
	 				break;

	 				case 1 :
	 				 if (seachAreaInput.value) alert('Запрос....');
	 				
	 				break;
	 			}
	 	});
	 	closeSearch.addEventListener('click' , function(){
	 		logoType.classList.remove('high');
	 		seachArea.classList.remove('active');
	 		closeSearch.classList.remove('active');
	 		index--;
	 	});



};
scan();




function headPhoneClick(){
let current = 2;    
//CLICK HEADPHONE

	for(let i = 0 ; i < headPhoneStyle.length ; i++){
		headPhoneStyle[i].addEventListener('click' , function(){
			let colorNot = notAvailableColor[i];
			let colorNotRemove = notAvailableColor[current];
			for(let num = 0; num < colorNotRemove.length; num++){
				colorHeadPhone[colorNotRemove[num]].classList.remove('notavailable');
			};
			for(let num = 0; num < colorNot.length; num++){
				colorHeadPhone[colorNot[num]].classList.add('notavailable');
			};
			headPhoneStyle[current].classList.remove('active');
			headPhoneStyle[current].classList.remove('show');
			current = i;
			headPhoneStyle[i].classList.add('active');
			headPhoneStyle[current].classList.add('show');

		});
	};

//ARROW CLICK

arrowR.addEventListener('click' , function(){
		let colorNotRemove = notAvailableColor[current];
			if(current < 5){
				for(let num = 0; num < colorNotRemove.length; num++){
					colorHeadPhone[colorNotRemove[num]].classList.remove('notavailable');
				};
				console.log(current);
				headPhoneStyle[current].classList.remove('active');
				headPhoneStyle[current].classList.remove('show');
				++current;
				headPhoneStyle[current].classList.add('active');
				headPhoneStyle[current].classList.add('show');
				let colorNot = notAvailableColor[current];
					for(let num = 0; num < colorNot.length; num++){
						colorHeadPhone[colorNot[num]].classList.add('notavailable');
					};

			} else {
				let colorNotRemove = notAvailableColor[current];
					for(let num = 0; num < colorNotRemove.length; num++){
						colorHeadPhone[colorNotRemove[num]].classList.remove('notavailable');
					};
				headPhoneStyle[current].classList.remove('active');
				headPhoneStyle[current].classList.remove('show');
				current = 0;
				headPhoneStyle[current].classList.add('active');
				headPhoneStyle[current].classList.add('show');	
				let colorNot = notAvailableColor[current];
					for(let num = 0; num < colorNot.length; num++){
						colorHeadPhone[colorNot[num]].classList.add('notavailable');
					};
			};
	});
	
	arrowL.addEventListener('click' , function(){
		let colorNotRemove = notAvailableColor[current];
			if(current > 0){
				for(let num = 0; num < colorNotRemove.length; num++){
					colorHeadPhone[colorNotRemove[num]].classList.remove('notavailable');
				};
				headPhoneStyle[current].classList.remove('active');
				headPhoneStyle[current].classList.remove('show');
				--current;
				headPhoneStyle[current].classList.add('active');
				headPhoneStyle[current].classList.add('show');
				let colorNot = notAvailableColor[current];
					for(let num = 0; num < colorNot.length; num++){
						colorHeadPhone[colorNot[num]].classList.add('notavailable');
					};
			} else {
				for(let num = 0; num < colorNotRemove.length; num++){
					colorHeadPhone[colorNotRemove[num]].classList.remove('notavailable');
				};
				headPhoneStyle[current].classList.remove('active');
				headPhoneStyle[current].classList.remove('show');
				current = 5 ;
				headPhoneStyle[current].classList.add('active');
				headPhoneStyle[current].classList.add('show');
				let colorNot = notAvailableColor[current];
					for(let num = 0; num < colorNot.length; num++){
						colorHeadPhone[colorNot[num]].classList.add('notavailable');
					};
			};
	});



};
headPhoneClick();

function colorHeadPhoneClick(){
	let numActive = 1;
	let nameActiveBg = {
		0: 'dark',
		1: 'white',
		2: 'blue',
		3: 'red',
		4: 'yellow',
	};
	for(let i = 0 ; i < colorHeadPhone.length ; i++){
			colorHeadPhone[i].addEventListener('click' , function(){

				colorHeadPhone[numActive].classList.remove('active');
				colorHeadPhone[i].classList.add('active');
				wrapperBg.classList.remove(nameActiveBg[numActive]);
				wrapperBg.classList.add(nameActiveBg[i]);
				numActive = i;
		});
	};
};
colorHeadPhoneClick();





}