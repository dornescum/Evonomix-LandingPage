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
// form budget
let formBudget = $("#budget");
formBudget.prop("disabled", "disabled");

// nav
toggleNav.on('click', () => sidebarOverlay.addClass('show'));
closeBtn.on('click', () => sidebarOverlay.removeClass('show'));
// =========

destinatiiInterne.on('click', function () {
	hiddenLinks.slideToggle(1000).addClass('show-links');
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
let formDestinations = $("#destinations option:selected");
const destinationValid = $("#destinationValid");
// destination validation
$('#destinations').change(function(e){
	// console.log(e);
	console.log($(this).val());
	if ($(this).val() === "Select") {
		destinationValid.removeClass('valid-feedback')
		destinationValid.addClass('invalid')
	}
	 else {
		destinationValid.addClass('valid-feedback')
		destinationValid.removeClass('invalid')
		formBudget.removeAttr("disabled");
	}
});

form.on('submit', (e) => {
	e.preventDefault();
	let firstName = $("#firstName");
	let lastName = $("#lastName");
	let formEmail = $("#email");
	let formMessage = $("#textarea");
	const clientInfo = $("#clientInfo");
	const emailPattern = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$";
	const showInfo =()=>{
		// destination validation
		if (formDestinations.text() === "Select"){
			destinationValid.removeClass('valid-feedback')
			destinationValid.addClass('invalid')
		} else {
			formBudget.removeAttr("disabled");
		}

		// name validation
	if (firstName.val().length <3 || lastName.val().length<=5){
	return alert('First and last name are a must')
}
		clientInfo.removeAttr("id", "clientInfo")
		clientInfo.html(`
				<div class="inner-client">
					<h1>${firstName.val()} ${lastName.val()}</h1>
					<p> Wants to go to ${formDestinations.val()} and has
					 a budget of
					 <span class=${formBudget.val() === "100$" || formBudget.val() === "500$" ? "sarac" : " "}>
					${formBudget.val() === "100$" || formBudget.val() === "500$" ? "De Sarac !" : formBudget.val() }</span> </p>
		 			<p>He left us this message : <span>${formMessage.val()}</span></p>
					 <p>We may contact him at <span class="email-validate">${formEmail.val()}</span></p>
				</div>
		`)
		clientInfo.addClass('clientInfo')

	}
	showInfo();
	const checkEmail=()=>{
		if (formEmail.val().indexOf('@')===-1){
			alert('no @')
		}
		// if (formEmail.val() !== emailPattern){
		// 	alert('no')
		// }

	}
	checkEmail()
	form.trigger('reset')
	destinationValid.addClass('valid-feedback')
	destinationValid.removeClass('invalid')

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
