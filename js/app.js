'use strict';

const field = document.querySelector('.ba-field');
const ball = document.querySelector('.ba-ball');
const coord = field.getBoundingClientRect();


field.addEventListener('click', () => {
	const leftPos = event.clientX - coord.left;
	const topPos = event.clientY - coord.top;
	const rightBorder = coord.right - coord.left;
	const bottomBorder = coord.bottom - coord.top;

	document.documentElement.style.setProperty('--top', `${topPos - 5}px`);
	document.documentElement.style.setProperty('--left', `${leftPos - 5}px`);

	console.log(leftPos, topPos);

	if (leftPos <= 20) {
		document.documentElement.style.setProperty('--left', `20px`);
	}

	if (topPos <= 20) {
		document.documentElement.style.setProperty('--top', `20px`);
	}

	if (leftPos >= rightBorder - 20) {
		document.documentElement.style.setProperty('--left', `${rightBorder - 30}px`);
	}

	if (topPos >= bottomBorder - 20) {
		document.documentElement.style.setProperty('--top', `${bottomBorder - 30}px`);
	}
});
