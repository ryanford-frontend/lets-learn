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
				el.appendChild(svg["path"]("M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-1.2H0V27zm15.526-6.5H15.5l20.5.1v-5.2H15.526zM32 5H15.526v5.2H36V9c0-2.209-1.791-4-4-4z", {["fill"]: "#006A4E",["d"]: "M0 27c0 2.209 1.791 4 4 4h28c2.209 0 4-1.791 4-4v-1.2H0V27zm15.526-6.5H15.5l20.5.1v-5.2H15.526zM32 5H15.526v5.2H36V9c0-2.209-1.791-4-4-4z",}));el.appendChild(svg["path"]("M15.526 15.333v.067H36v-5.2H15.526zM.026 20.5L0 25.8h36v-5.2l-20.5-.1z", {["fill"]: "#FFCE00",["d"]: "M15.526 15.333v.067H36v-5.2H15.526zM.026 20.5L0 25.8h36v-5.2l-20.5-.1z",}));el.appendChild(svg["path"]("M4 5C1.879 5 .161 6.656.026 8.743V20.5h15.5V5H4z", {["fill"]: "#D21034",["d"]: "M4 5C1.879 5 .161 6.656.026 8.743V20.5h15.5V5H4z",}));el.appendChild(svg["path"]("M12.339 11.413H8.885l-.013-.04L7.776 8l-.022.068-1.087 3.345H3.078l2.858 2.077.045.033-1.067 3.285-.042.129 2.904-2.11 2.903 2.11-1.109-3.414 2.904-2.11z", {["fill"]: "#FFF",["d"]: "M12.339 11.413H8.885l-.013-.04L7.776 8l-.022.068-1.087 3.345H3.078l2.858 2.077.045.033-1.067 3.285-.042.129 2.904-2.11 2.903 2.11-1.109-3.414 2.904-2.11z",}));
				proto = el;
			}
		},
	};
	delete new_props.options;

	return h("svg", new_props);
};