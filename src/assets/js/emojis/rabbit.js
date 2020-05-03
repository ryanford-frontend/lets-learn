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
				el.appendChild(svg["path"]("M9 11C9 6.858 7 0 8 0s7 4 5 11c-1.138 3.983-.896 4-2 4s-2 .142-2-4z", {["fill"]: "#99AAB5",["d"]: "M9 11C9 6.858 7 0 8 0s7 4 5 11c-1.138 3.983-.896 4-2 4s-2 .142-2-4z",}));el.appendChild(svg["path"]("M9.55 11.704c0-3.414-1.297-9.065-.648-9.065.648 0 4.538 3.296 3.241 9.065-.738 3.282-.581 3.296-1.297 3.296s-1.296.117-1.296-3.296z", {["fill"]: "#F4ABBA",["d"]: "M9.55 11.704c0-3.414-1.297-9.065-.648-9.065.648 0 4.538 3.296 3.241 9.065-.738 3.282-.581 3.296-1.297 3.296s-1.296.117-1.296-3.296z",}));el.appendChild(svg["path"]("M4.789 12.375C3.726 8.372.033 2.256 1 2c.966-.257 7.792 2.07 7.655 9.349-.078 4.142.161 4.096-.907 4.379-1.068.283-1.897.65-2.959-3.353z", {["fill"]: "#99AAB5",["d"]: "M4.789 12.375C3.726 8.372.033 2.256 1 2c.966-.257 7.792 2.07 7.655 9.349-.078 4.142.161 4.096-.907 4.379-1.068.283-1.897.65-2.959-3.353z",}));el.appendChild(svg["path"]("M5.5 12.914c-.875-3.299-3.579-8.429-2.952-8.595.627-.167 5.232 2.022 5.458 7.93.129 3.361.285 3.335-.407 3.519-.692.183-1.223.445-2.099-2.854z", {["fill"]: "#F4ABBA",["d"]: "M5.5 12.914c-.875-3.299-3.579-8.429-2.952-8.595.627-.167 5.232 2.022 5.458 7.93.129 3.361.285 3.335-.407 3.519-.692.183-1.223.445-2.099-2.854z",}));el.appendChild(svg["circle"](32.5, 28.5, 7, {["cy"]: "28.5",["r"]: "3.5",["fill"]: "#CCD6DD",["cx"]: "32.5",}));el.appendChild(svg["path"]("M30.733 31.736C32.227 30.354 33 28.218 33 25c0-7.18-6.82-11-14-11-2.057 0-3.829.157-5.323.54C12.592 13.41 10.817 13 8.4 13 4.136 13 0 17.069 0 21.333c0 4.13 3.88 4.637 7.999 4.664L8 26c3 5 1 10 3 10 1.588 0 1.914-2.217 1.981-4.375 1.068.663 2.258 1.191 3.531 1.577C15.635 33.726 15 34.271 15 34.5c0 1.381 2 1.5 5 1.5 5.522 0 13 0 11-4-.054-.107-.151-.19-.267-.264z", {["fill"]: "#99AAB5",["d"]: "M30.733 31.736C32.227 30.354 33 28.218 33 25c0-7.18-6.82-11-14-11-2.057 0-3.829.157-5.323.54C12.592 13.41 10.817 13 8.4 13 4.136 13 0 17.069 0 21.333c0 4.13 3.88 4.637 7.999 4.664L8 26c3 5 1 10 3 10 1.588 0 1.914-2.217 1.981-4.375 1.068.663 2.258 1.191 3.531 1.577C15.635 33.726 15 34.271 15 34.5c0 1.381 2 1.5 5 1.5 5.522 0 13 0 11-4-.054-.107-.151-.19-.267-.264z",}));el.appendChild(svg["circle"](6, 18, 2, {["cy"]: "18",["r"]: "1",["fill"]: "#292F33",["cx"]: "6",}));el.appendChild(svg["path"]("M2 21c0 1.104-.5 2-1 2s-1-.896-1-2 .448-1 1-1 1-.104 1 1z", {["fill"]: "#F4ABBA",["d"]: "M2 21c0 1.104-.5 2-1 2s-1-.896-1-2 .448-1 1-1 1-.104 1 1z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};