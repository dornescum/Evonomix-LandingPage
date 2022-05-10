import {slides} from "./utils.js";

const toggleNav = $('.toggle-nav');
const sidebarOverlay = $('.sidebar-overlay');
const closeBtn = $('.sidebar-close');
// const linkMenu = document.getElementById('link');
// const destinatiiInterne = document.getElementById('destinatii-interne');
const destinatiiInterne = $('#destinatii-interne');
const hiddenLinks = $('.hidden-links');


// let lastEl = linkMenu.lastElementChild;
const carousel = $('#carousel');
const videoContainer = $('.video');
const videoBtn = $('.btn-icon');
const form = $('form');
const imgCarousel = document.getElementById('carousel-image');


// nav
toggleNav.on('click', () => sidebarOverlay.addClass('show'));
closeBtn.on('click', () => sidebarOverlay.removeClass('show'));
// =========

destinatiiInterne.on('click', function () {
	hiddenLinks.toggleClass('show-links');

});
carousel.attr('class', 'carousel');

// video

videoBtn.on('click', () => {
	const icon = $('.btn-icon').children();
	if (icon.hasClass("icon-play-circled")) {
		icon.removeClass('icon-play-circled');
		icon.addClass('icon-pause');
		videoContainer.get(0).play();
	} else if (icon.hasClass("icon-pause")) {
		icon.removeClass('icon-pause');
		icon.addClass('icon-play-circled');
		videoContainer.get(0).pause();
	}
});

// form
form.on('click', (e) => {
	e.preventDefault();
	let allData = [];
	let formDestinations = $("#destinations").val();
	let formBudget = $("#budget").val();
	let formName = $("#fullName").val();
	let formEmail = $("#email").val();
	allData.push(formDestinations, formBudget, formName, formEmail);
	console.log(allData);

	const trip = `${formName} wants to go to ${formDestinations} and has ${formBudget} $`;
	$('#alertInfo').text(trip).addClass('testing');
	const dataKey = $('.bg-red').data('key1', 1234);
	// console.log(dataKey);
	setTimeout(() => {
		// $('#alertInfo').addClass('hidden');
		$('#alertInfo').remove();
	}, 10000);
	form.trigger('reset')
	// form.reset();
});


imgCarousel.innerHTML = slides.map(item => {
	const {background: {backgroundImage, backgroundColor}, title, description, id} = item;
	if (title === "" || description === "" || backgroundImage === "") {
		return `        	<div class="item" style=${backgroundColor}>
                				<img src='https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZXJyb3J8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                   				  alt=${title} datatype=${id}>
                   				  <article>
                   				  	   <h1>N/A</h1>
                   				   <p>N/A</p>
                   				     <button class="btn-carousel">
                    				 	<i class="icon-star" aria-hidden="true"></i>
                         				<span>Detalii</span>
                         			</button>
								</article>
                   		</div>
`;
	}
	return `        	<div class="item">
                				<img src=${backgroundImage}
                   				  alt=${title} datatype=${id}>
                   				  <article>
                   				  	   <h1>${title}</h1>
                   				   <p>${description}</p>
                   				     <button class="btn-carousel">
                    				 	<i class="icon-star" aria-hidden="true"></i>
                         				<span>Detalii</span>
                         			</button>
								</article>
                   		</div>
`;
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
