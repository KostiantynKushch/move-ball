'use strict';

const field = document.querySelector('.ba-field');
const ball = document.querySelector('.ba-ball');
const coord = field.getBoundingClientRect();
const rightBorder = coord.right - coord.left;
const bottomBorder = coord.bottom - coord.top;


field.addEventListener('click', () => {
	//pointer coord
	const leftPos = event.clientX - coord.left;
	const topPos = event.clientY - coord.top;

	//move ball
	setPositionProperty('--top', `${topPos - 5}px`);
	setPositionProperty('--left', `${leftPos - 5}px`);

	//restrick movment by border
	if (leftPos <= 20) {
		setPositionProperty('--left', `20px`);
	}

	if (topPos <= 20) {
		setPositionProperty('--top', `20px`);
	}

	if (leftPos >= rightBorder - 20) {
		setPositionProperty('--left', `${rightBorder - 30}px`);
	}

	if (topPos >= bottomBorder - 20) {
		setPositionProperty('--top', `${bottomBorder - 30}px`);
	}
});

function setPositionProperty(name, value) {
	document.documentElement.style.setProperty(`${name}`, `${value}`);
}