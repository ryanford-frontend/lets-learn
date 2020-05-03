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
				el.appendChild(svg["path"]("M0 4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4z", {["fill"]: "#3B88C3",["d"]: "M0 4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4z",}));el.appendChild(svg["path"]("M20.512 8.071c0 1.395-1.115 2.573-2.511 2.573-1.333 0-2.511-1.209-2.511-2.573 0-1.271 1.178-2.45 2.511-2.45 1.333.001 2.511 1.148 2.511 2.45zm-4.744 6.728c0-1.488.931-2.481 2.232-2.481 1.302 0 2.232.992 2.232 2.481v11.906c0 1.488-.93 2.48-2.232 2.48s-2.232-.992-2.232-2.48V14.799z", {["fill"]: "#FFF",["d"]: "M20.512 8.071c0 1.395-1.115 2.573-2.511 2.573-1.333 0-2.511-1.209-2.511-2.573 0-1.271 1.178-2.45 2.511-2.45 1.333.001 2.511 1.148 2.511 2.45zm-4.744 6.728c0-1.488.931-2.481 2.232-2.481 1.302 0 2.232.992 2.232 2.481v11.906c0 1.488-.93 2.48-2.232 2.48s-2.232-.992-2.232-2.48V14.799z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};