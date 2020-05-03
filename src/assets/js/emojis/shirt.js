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
				el.appendChild(svg["path"]("M11 2C8 2 0 4 0 6s1 7 2 9 8 0 9-1 2-12 0-12z", {["fill"]: "#3B88C3",["d"]: "M11 2C8 2 0 4 0 6s1 7 2 9 8 0 9-1 2-12 0-12z",}));el.appendChild(svg["path"]("M1 4.717C.352 5.088 0 5.565 0 6c0 2 1 7 2 9 .281.562 1.039.777 2 .85C3 13 2 9 1 4.717z", {["fill"]: "#55ACEE",["d"]: "M1 4.717C.352 5.088 0 5.565 0 6c0 2 1 7 2 9 .281.562 1.039.777 2 .85C3 13 2 9 1 4.717z",}));el.appendChild(svg["path"]("M25 2c3 0 11 2 11 4s-1 7-2 9-8 0-9-1-2-12 0-12z", {["fill"]: "#3B88C3",["d"]: "M25 2c3 0 11 2 11 4s-1 7-2 9-8 0-9-1-2-12 0-12z",}));el.appendChild(svg["path"]("M35 4.717c.648.371 1 .848 1 1.283 0 2-1 7-2 9-.281.562-1.039.777-2 .85C33 13 34 9 35 4.717z", {["fill"]: "#55ACEE",["d"]: "M35 4.717c.648.371 1 .848 1 1.283 0 2-1 7-2 9-.281.562-1.039.777-2 .85C33 13 34 9 35 4.717z",}));el.appendChild(svg["path"]("M25 2h-1.068C23.515 3.695 21.021 5 18 5s-5.515-1.305-5.932-3H11C8.791 2 6 3.791 6 6c0 0 0 20-1 24s1.791 4 4 4h18c2.209 0 5 0 4-4S30 6 30 6c0-2.209-2.791-4-5-4z", {["fill"]: "#3B88C3",["d"]: "M25 2h-1.068C23.515 3.695 21.021 5 18 5s-5.515-1.305-5.932-3H11C8.791 2 6 3.791 6 6c0 0 0 20-1 24s1.791 4 4 4h18c2.209 0 5 0 4-4S30 6 30 6c0-2.209-2.791-4-5-4z",}));el.appendChild(svg["path"]("M18 7c3.866 0 7-2.239 7-5h-1.068C23.515 3.695 21.021 5 18 5s-5.515-1.305-5.932-3H11c0 2.761 3.134 5 7 5z", {["fill"]: "#55ACEE",["d"]: "M18 7c3.866 0 7-2.239 7-5h-1.068C23.515 3.695 21.021 5 18 5s-5.515-1.305-5.932-3H11c0 2.761 3.134 5 7 5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};