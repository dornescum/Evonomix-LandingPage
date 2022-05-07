import {toggleNav, sidebarOverlay, closeBtn} from "./nav.js";


const linkMenu = document.getElementById('link');
const destinatiiInterne = document.getElementById('destinatii-interne');
let lastEl = linkMenu.lastElementChild;
const carousel = document.getElementById('carousel');
const videoContainer = document.querySelector('.video');
const videoBtn = document.querySelector('.btn-icon');

const form = document.getElementById('form');


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



// $(document).ready(function(){
// 	$(".owl-carousel").owlCarousel();
// });

// $('.owl-carousel').owlCarousel({
// 	loop:true,
// 	margin:10,
// 	nav:true,
// 	responsive:{
// 		0:{
// 			items:1
// 		},
// 		600:{
// 			items:3
// 		},
// 		1000:{
// 			items:5
// 		}
// 	}
// })
