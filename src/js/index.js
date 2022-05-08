import {toggleNav, sidebarOverlay, closeBtn} from "./nav.js";


const linkMenu = document.getElementById('link');
const destinatiiInterne = document.getElementById('destinatii-interne');
let lastEl = linkMenu.lastElementChild;
const carousel = document.getElementById('carousel');
const videoContainer = document.querySelector('.video');
const videoBtn = document.querySelector('.btn-icon');
// const icon = videoBtn.firstElementChild;

const form = document.getElementById('form');

const second = document.getElementById('second');
const articleTest = document.getElementById('articleTest');
const imgCarousel = document.getElementById('carousel-image');
const articolCarousel = document.getElementById('carousel-article');
console.log(articolCarousel);




// nav
toggleNav.addEventListener('click', () => {
	sidebarOverlay.classList.add('show');
});
closeBtn.addEventListener('click', () => {
	sidebarOverlay.classList.remove('show');
});
// =========
destinatiiInterne.addEventListener('click', () => {
	lastEl.classList.toggle('show-links');
});
carousel.setAttribute('class', 'carousel');
// video
videoBtn.addEventListener('click', () => {
	const icon = videoBtn.firstElementChild;
	if (icon.classList.contains("fa-play-circle-o")) {
		icon.classList.remove('fa-play-circle-o');
		icon.classList.add('fa-pause-circle');
		videoContainer.play();
	} else if (icon.classList.contains("fa-pause-circle")) {
		icon.classList.remove('fa-pause-circle');
		icon.classList.add('fa-play-circle-o');
		videoContainer.pause();
	}
});
// =====
// form
form.addEventListener('click', (e) => {
	e.preventDefault();
	const allData = [];
	const formDestinations = document.getElementById("form").elements[0].value;
	const formBudget = document.getElementById("form").elements[1].value;
	const formName = document.getElementById("form").elements[2].value;
	const formEmail = document.getElementById("form").elements[3].value;
	const outputInfo = document.getElementById('alertInfo');
	allData.push(formDestinations, formBudget, formName, formEmail);
	console.log(allData);
	// if (allData.length === 0 || allData.length < 3) {
	// 	return;
	// } else {
	// 	setTimeout(() => {
	// 		outputInfo.classList.add('alertInfo');
	// 		outputInfo.innerHTML = `<p>${allData[0]}, has this
	// 		${formBudget} and wants to go to ${formDestinations}. You can reach him at this email ${allData[3]}</p>`;
	// 	}, 10000);
	// }

});


const slides = [
	{
		title: "Oferta saptamanii 1",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, nostrum!",
		"background": {
			"backgroundImage": "../../assets/img1.webp",
			"backgroundColor": "#fff"
		}
	},
	{
		title: "Oferta saptamanii 2",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, nostrum!",
		"background": {
			"backgroundImage": "../../assets/img2.webp",
			"backgroundColor": "#fff"
		}
	},
	{
		title: "Oferta saptamanii 3",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, nostrum!",
		"background": {
			"backgroundImage": "../../assets/img3.webp",
			"backgroundColor": "#fff"
		}
	}

];


// second.innerHTML = slides.map(item=>{
// 	return `        <div class="owl-carousel owl-theme">
//            				 <div class="item">
//                 				<img src=${item.background.backgroundImage}
//                    				  alt=${item.title}>
//           			 	 </div>
//         </div>
//     `
// });
imgCarousel.innerHTML = slides.map(item=>{
	return `        
           				 <div class="item">
                				<img src=${item.background.backgroundImage}
                   				  alt=${item.title}>
          			 	 </div>
      
    `
});
articolCarousel.innerHTML = slides.map(item=>{
	const {title, description} =item;
	console.log(item);
	return `                            <h1>${title}</h1>
                    <p>${description}</p>
                    <button class="btn-carousel">
                        <i class="fa fa-star" aria-hidden="true"></i>
                        <span>Detalii</span></button>
    `
});







$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 2
		},
		1000: {
			items: 1
		}
	},
});
