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
				el.appendChild(svg["path"]("M23.651 23.297L12.702 12.348l9.386-7.821 9.385 9.385z", {["fill"]: "#BE1931",["d"]: "M23.651 23.297L12.702 12.348l9.386-7.821 9.385 9.385z",}));el.appendChild(svg["path"]("M34.6 13.912c-1.727 1.729-4.528 1.729-6.255 0l-6.257-6.256c-1.729-1.727-1.729-4.53 0-6.258 1.726-1.727 4.528-1.727 6.257 0L34.6 7.656c1.728 1.727 1.728 4.529 0 6.256z", {["fill"]: "#DD2E44",["d"]: "M34.6 13.912c-1.727 1.729-4.528 1.729-6.255 0l-6.257-6.256c-1.729-1.727-1.729-4.53 0-6.258 1.726-1.727 4.528-1.727 6.257 0L34.6 7.656c1.728 1.727 1.728 4.529 0 6.256z",}));el.appendChild(svg["path"]("M14 17.823S-.593 35.029.188 35.813C.97 36.596 18.177 22 18.177 22L14 17.823z", {["fill"]: "#99AAB5",["d"]: "M14 17.823S-.593 35.029.188 35.813C.97 36.596 18.177 22 18.177 22L14 17.823z",}));el.appendChild(svg["path"]("M25.215 27.991c-1.726 1.729-4.528 1.729-6.258 0L8.009 17.041c-1.727-1.728-1.727-4.528 0-6.256 1.728-1.729 4.53-1.729 6.258 0l10.948 10.949c1.728 1.729 1.728 4.528 0 6.257z", {["fill"]: "#DD2E44",["d"]: "M25.215 27.991c-1.726 1.729-4.528 1.729-6.258 0L8.009 17.041c-1.727-1.728-1.727-4.528 0-6.256 1.728-1.729 4.53-1.729 6.258 0l10.948 10.949c1.728 1.729 1.728 4.528 0 6.257z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};