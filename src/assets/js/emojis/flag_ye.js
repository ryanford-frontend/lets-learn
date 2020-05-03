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
				el.appendChild(svg["path"]("M0 27.063C0 29.272 1.791 31 4 31h28c2.209 0 4-1.728 4-3.937V22H0v5.063z", {["fill"]: "#141414",["d"]: "M0 27.063C0 29.272 1.791 31 4 31h28c2.209 0 4-1.728 4-3.937V22H0v5.063z",}));el.appendChild(svg["path"]("M0 14h36v8H0z", {["fill"]: "#EEE",["d"]: "M0 14h36v8H0z",}));el.appendChild(svg["path"]("M32 5H4C1.791 5 0 6.854 0 9.063V14h36V9.063C36 6.854 34.209 5 32 5z", {["fill"]: "#CE1126",["d"]: "M32 5H4C1.791 5 0 6.854 0 9.063V14h36V9.063C36 6.854 34.209 5 32 5z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};