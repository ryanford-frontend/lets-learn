import { h } from "/assets/js/vendor/hyperapp.js";
import rough from "/assets/js/vendor/rough.js";
import uuid from "/assets/js/vendor/uuid.js";

export default (props = {}) => {
	let proto;
	const new_props = {
		...props,
		key: props.key || uuid(),
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "-1 -1 37 37",
		width: (props.size || 1) * 16,
		height: (props.size || 1) * 16,
		oncreate: el => {
			const svg = rough.svg(el, {
				options: props.options || {
					roughness: 0.1,
					strokeWidth: 0.2,
					fillStyle: "solid",
				}
			});

			if (proto) {
				el.parentNode.replaceChild(proto.cloneNode(true), el);
			} else {
				el.appendChild(svg["path"]("M2 10s-2 0-2 2v12c0 2 2 2 2 2h6l8 8s1 1 2 1h1s1 0 1-1V2s0-1-1-1h-1c-1 0-2 1-2 1l-8 8H2z", {["fill"]: "#8899A6",["d"]: "M2 10s-2 0-2 2v12c0 2 2 2 2 2h6l8 8s1 1 2 1h1s1 0 1-1V2s0-1-1-1h-1c-1 0-2 1-2 1l-8 8H2z",}));el.appendChild(svg["path"]("M8 26l8 8s1 1 2 1h1s1 0 1-1V2s0-1-1-1h-1c-1 0-2 1-2 1l-8 8v16z", {["fill"]: "#CCD6DD",["d"]: "M8 26l8 8s1 1 2 1h1s1 0 1-1V2s0-1-1-1h-1c-1 0-2 1-2 1l-8 8v16z",}));el.appendChild(svg["path"]("M29 32.019c-.267 0-.533-.113-.72-.332-.339-.398-.292-.995.105-1.334 3.603-3.071 5.668-7.551 5.668-12.29s-2.066-9.219-5.669-12.29c-.397-.339-.444-.937-.105-1.334.339-.399.935-.444 1.334-.106 4.024 3.431 6.333 8.436 6.333 13.73 0 5.294-2.309 10.299-6.332 13.729-.179.152-.396.227-.614.227z", {["fill"]: "#8899A6",["d"]: "M29 32.019c-.267 0-.533-.113-.72-.332-.339-.398-.292-.995.105-1.334 3.603-3.071 5.668-7.551 5.668-12.29s-2.066-9.219-5.669-12.29c-.397-.339-.444-.937-.105-1.334.339-.399.935-.444 1.334-.106 4.024 3.431 6.333 8.436 6.333 13.73 0 5.294-2.309 10.299-6.332 13.729-.179.152-.396.227-.614.227z",}));el.appendChild(svg["path"]("M26.27 28.959c-.269 0-.533-.115-.717-.338-.327-.396-.271-.98.125-1.307 2.792-2.304 4.394-5.699 4.394-9.315 0-3.573-1.571-6.943-4.311-9.245-.392-.33-.443-.916-.113-1.308.33-.394.915-.443 1.309-.114 3.16 2.656 4.973 6.543 4.973 10.667 0 4.172-1.848 8.089-5.069 10.746-.174.145-.383.214-.591.214z", {["fill"]: "#8899A6",["d"]: "M26.27 28.959c-.269 0-.533-.115-.717-.338-.327-.396-.271-.98.125-1.307 2.792-2.304 4.394-5.699 4.394-9.315 0-3.573-1.571-6.943-4.311-9.245-.392-.33-.443-.916-.113-1.308.33-.394.915-.443 1.309-.114 3.16 2.656 4.973 6.543 4.973 10.667 0 4.172-1.848 8.089-5.069 10.746-.174.145-.383.214-.591.214z",}));el.appendChild(svg["path"]("M23.709 25.959c-.289 0-.576-.124-.774-.365-.351-.427-.289-1.057.138-1.407C24.934 22.658 26 20.403 26 18c0-2.435-1.089-4.708-2.988-6.236-.431-.346-.498-.976-.152-1.406.348-.429.976-.499 1.406-.152C26.639 12.116 28 14.957 28 18c0 3.004-1.333 5.822-3.657 7.731-.186.154-.411.228-.634.228z", {["fill"]: "#8899A6",["d"]: "M23.709 25.959c-.289 0-.576-.124-.774-.365-.351-.427-.289-1.057.138-1.407C24.934 22.658 26 20.403 26 18c0-2.435-1.089-4.708-2.988-6.236-.431-.346-.498-.976-.152-1.406.348-.429.976-.499 1.406-.152C26.639 12.116 28 14.957 28 18c0 3.004-1.333 5.822-3.657 7.731-.186.154-.411.228-.634.228z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};