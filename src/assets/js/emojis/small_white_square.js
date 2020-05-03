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
				el.appendChild(svg["path"]("M25 24c0 .553-.447 1-1 1H12c-.552 0-1-.447-1-1V12c0-.552.448-1 1-1h12c.553 0 1 .448 1 1v12z", {["fill"]: "#E6E7E8",["d"]: "M25 24c0 .553-.447 1-1 1H12c-.552 0-1-.447-1-1V12c0-.552.448-1 1-1h12c.553 0 1 .448 1 1v12z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};