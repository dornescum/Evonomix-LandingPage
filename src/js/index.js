import {slides} from "./utils.js";
export const toggleNav = document.querySelector('.toggle-nav');
export const sidebarOverlay = document.querySelector('.sidebar-overlay');
export const closeBtn = document.querySelector('.sidebar-close');
const linkMenu = document.getElementById('link');
const destinatiiInterne = document.getElementById('destinatii-interne');
let lastEl = linkMenu.lastElementChild;
const carousel = document.getElementById('carousel');
const videoContainer = document.querySelector('.video');
const videoBtn = document.querySelector('.btn-icon');
const form = document.getElementById('form');
const imgCarousel = document.getElementById('carousel-image');


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
	if (icon.classList.contains("icon-play-circled")) {
		icon.classList.remove('icon-play-circled');
		icon.classList.add('icon-pause');
		videoContainer.play();
	} else if (icon.classList.contains("icon-pause")) {
		icon.classList.remove('icon-pause');
		icon.classList.add('icon-play-circled');
		videoContainer.pause();
	}
});

// form
form.addEventListener('click', (e) => {
	e.preventDefault();
	let allData = [];
	let formDestinations = document.getElementById("form").elements[0].value;
	let formBudget = document.getElementById("form").elements[1].value;
	let formName = document.getElementById("form").elements[2].value;
	let formEmail = document.getElementById("form").elements[3].value;
	allData.push(formDestinations, formBudget, formName, formEmail);
	console.log(allData);
	form.reset();
});


imgCarousel.innerHTML = slides.map(item=>{
	const {background:{backgroundImage, backgroundColor}, title, description} =item;
	if (title ==="" || description === "" || backgroundImage === ""){
		return `        	<div class="item" style=${backgroundColor}>
                				<img src='https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXJyb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                   				  alt=${title}>
                   				  <article>
                   				  	   <h1>N/A</h1>
                   				   <p>N/A</p>
                   				     <button class="btn-carousel">
                    				 	<i class="icon-star" aria-hidden="true"></i>
                         				<span>Detalii</span>
                         			</button>
								</article>
                   		</div>
`
	}
	return `        	<div class="item">
                				<img src=${backgroundImage}
                   				  alt=${title}>
                   				  <article>
                   				  	   <h1>${title}</h1>
                   				   <p>${description}</p>
                   				     <button class="btn-carousel">
                    				 	<i class="icon-star" aria-hidden="true"></i>
                         				<span>Detalii</span>
                         			</button>
								</article>
                   		</div>
`
}).join('');


$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1
		}
	},
});
