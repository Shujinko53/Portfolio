const hamburger = document.querySelector('.hamburger'),
	  menu = document.querySelector('.menu'),
	  closeBtn = document.querySelector('.menu__close'),
	  overlay = document.querySelector('.overlay'),
	  menuLinks = document.querySelectorAll('.menu__link');

const isPressEsc = function (evt) {
	return evt.keyCode === 27;
};

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});

window.addEventListener('keydown', (evt) => {
	if (isPressEsc(evt)) {
		menu.classList.remove('active');
	}
});

function menuCloser(target, event) {
	target.addEventListener(event, () => {
		menu.classList.remove('active');
	});
}

menuCloser(closeBtn, 'click');
menuCloser(overlay, 'click');

menuLinks.forEach((item) => {
	menuCloser(item, 'click');
});

// skill counter

const counters = document.querySelectorAll('.skills__ratings-counter'),
	  lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});