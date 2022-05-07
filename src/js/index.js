import {toggleNav, sidebarOverlay, closeBtn} from "./nav.js";


const linkMenu = document.getElementById('link');
const destinatiiInterne = document.getElementById('destinatii-interne');
let lastEl = linkMenu.lastElementChild;
const carousel = document.getElementById('carousel');
const videoContainer = document.querySelector('.video');
const videoBtn = document.querySelector('.btn-icon');

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
